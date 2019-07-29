const vueImpPulgin = {}
const vueImpDirectives = {
  bind (el, binding, vnode) {
    function isServer (vNode) {
      return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
    }

    function getOffsetTop ($dom) {
      var curDom = $dom
      var offsetTop = $dom.offsetTop
      while (curDom.offsetParent !== null) {
        curDom = curDom.offsetParent
        offsetTop += curDom.offsetTop
      }
      return offsetTop
    }

    function isInview (curDom) {
      const viewTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const viewBottom = window.innerHeight + viewTop
      const offsetTop = getOffsetTop(curDom)
      console.log('isInview:', offsetTop, viewTop, viewBottom)
      return offsetTop >= viewTop && offsetTop <= viewBottom
    }

    function handle () {
      if (isInview(el)) {
        console.log(el)
        let event = new Event('imp')
        el.dispatchEvent(event)
      }
    }

    el.data = {
      isServer,
      handle
    }

    if (!isServer(vnode)) {
      window.addEventListener('scroll', handle)
    }
  },
  inserted (el, binding, vnode) {
    if (!el.data.isServer(vnode)) {
      el.data.handle()
    }
  },
  unbind (el, binding, vnode) {
    if (!el.data.isServer(vnode)) {
      console.log(el)
      window.removeEventListener('scroll', el.data.handle)
    }
  }
}
vueImpPulgin.install = (Vue, options) => {
  Vue.directives('imp', vueImpDirectives)
}
export default vueImpPulgin
export {
  vueImpDirectives as imp
}

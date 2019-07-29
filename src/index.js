const vueImpPulgin = {}
const vueImpDirectives = {
  bind (el, {
    value
  }, vnode) {
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

    function throttling (fn, wait) {
      let timer
      let context, args
      let run = () => {
        timer = setTimeout(() => {
          fn.apply(context, args)
          clearTimeout(timer)
          timer = null
        }, wait)
      }

      return function () {
        context = this
        args = arguments
        if (!timer) {
          console.log('throttle, set')
          run()
        } else {
          console.log('throttle, ignore')
        }
      }
    }

    function handle () {
      if (isInview(el)) {
        console.log(el)
        let event = new Event('imp')
        el.dispatchEvent(event)
      }
    }

    const delay = value ? value.delay : 200
    const scrollHandle = throttling(handle, delay)

    el.data = {
      isServer,
      handle,
      scrollHandle
    }

    if (!isServer(vnode)) {
      window.addEventListener('scroll', scrollHandle)
    }
  },
  inserted (el, {
    value
  }, vnode) {
    if (!el.data.isServer(vnode)) {
      el.data.handle()
    }
  },
  unbind (el, {
    value
  }, vnode) {
    if (!el.data.isServer(vnode)) {
      console.log(el)
      window.removeEventListener('scroll', el.data.scrollHandle)
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

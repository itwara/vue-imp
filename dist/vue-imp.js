(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueImp"] = factory();
	else
		root["vueImp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imp", function() { return vueImpDirectives; });
var vueImpPulgin = {};
var vueImpDirectives = {
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value;

    function isServer(vNode) {
      return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer;
    }

    function getOffsetTop($dom) {
      var curDom = $dom;
      var offsetTop = $dom.offsetTop;
      while (curDom.offsetParent !== null) {
        curDom = curDom.offsetParent;
        offsetTop += curDom.offsetTop;
      }
      return offsetTop;
    }

    function isInview(curDom) {
      var viewTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var viewBottom = window.innerHeight + viewTop;
      var offsetTop = getOffsetTop(curDom);
      console.log('isInview:', offsetTop, viewTop, viewBottom);
      return offsetTop >= viewTop && offsetTop <= viewBottom;
    }

    function throttling(fn, wait) {
      var timer = void 0;
      var context = void 0,
          args = void 0;
      var run = function run() {
        timer = setTimeout(function () {
          fn.apply(context, args);
          clearTimeout(timer);
          timer = null;
        }, wait);
      };

      return function () {
        context = this;
        args = arguments;
        if (!timer) {
          console.log('throttle, set');
          run();
        } else {
          console.log('throttle, ignore');
        }
      };
    }

    function handle() {
      if (isInview(el)) {
        console.log(el);
        var event = new Event('imp');
        el.dispatchEvent(event);
      }
    }

    var delay = value ? value.delay : 200;
    var scrollHandle = throttling(handle, delay);

    el.data = {
      isServer: isServer,
      handle: handle,
      scrollHandle: scrollHandle
    };

    if (!isServer(vnode)) {
      window.addEventListener('scroll', scrollHandle);
    }
  },
  inserted: function inserted(el, _ref2, vnode) {
    var value = _ref2.value;

    if (!el.data.isServer(vnode)) {
      el.data.handle();
    }
  },
  unbind: function unbind(el, _ref3, vnode) {
    var value = _ref3.value;

    if (!el.data.isServer(vnode)) {
      console.log(el);
      window.removeEventListener('scroll', el.data.scrollHandle);
    }
  }
};
vueImpPulgin.install = function (Vue, options) {
  Vue.directives('imp', vueImpDirectives);
};
/* harmony default export */ __webpack_exports__["default"] = (vueImpPulgin);


/***/ })
/******/ ]);
});
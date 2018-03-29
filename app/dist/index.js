// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "width": "640",
    "height": "960",
    "marginLeft": "55",
    "marginTop": "25",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "24",
    "textAlign": "center",
    "color": "#41B883"
  },
  "video": {
    "width": "640",
    "height": "960"
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var LOADMORE_COUNT = 2;

exports.default = {
  data: function data() {
    return {
      lists: [1, 2]
    };
  },

  methods: {
    fetch: function fetch(event) {
      var _this = this;

      modal.toast({ message: 'loadmore', duration: 1 });

      this.$nextTick(function () {
        var length = _this.lists.length;
        for (var i = length; i < length + LOADMORE_COUNT; ++i) {
          _this.lists.push(i + 1);
        }
      });
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    appendAsTree: true,
    attrs: {
      "loadmoreoffset": "10",
      "listData": _vm.lists,
      "bindingExpression": "lists",
      "alias": "num",
      "index": "i",
      "append": "tree"
    },
    on: {
      "loadmore": _vm.fetch
    }
  }, [_c('cell-slot', {
    key: {
      "@binding": "i"
    },
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["panel"]
  }, [_c('video', {
    staticClass: ["video"],
    attrs: {
      "src": "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=eb943ea59b204898beddb85a8002674a&line=0",
      "autoplay": "true",
      "controls": ""
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  })])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/jimzezhang/workspace/smartAlbum/app/src/newlist.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22a44fca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/jimzezhang/workspace/smartAlbum/app/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6497715e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": 750,
    "height": "80"
  },
  "header_text": {
    "fontSize": "36"
  },
  "template": {
    "width": "750",
    "height": "960"
  },
  "input": {
    "height": "80",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "fontSize": "32",
    "width": "750",
    "borderBottomWidth": "1"
  },
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#457cff",
    "position": "fixed",
    "bottom": "0"
  },
  "tab": {
    "height": "120",
    "width": "250",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "#2d54af",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "active": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    },
    "tab-panels": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "icon": {
    "width": "45",
    "height": "45"
  },
  "title": {
    "fontSize": "28",
    "color": "#FFFFFF",
    "marginTop": "10"
  },
  "tab-panels": {
    "position": "relative",
    "width": 3750,
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "stretch",
    "backgroundColor": "#F5F5F5",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "panel": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "fontSize": "36",
    "color": "#707070"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _newlist = __webpack_require__(3);

var _newlist2 = _interopRequireDefault(_newlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './router.js'


exports.default = {
	data: function data() {
		return {
			header: "index",
			activeTab: 0,
			tabs: [{
				title: 'main',
				icon: '//gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
			}, {
				title: 'upload',
				icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
			}, {
				title: 'mine',
				icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
			}]
		};
	},

	components: {
		videolist: _newlist2.default
	},
	computed: {
		panels: function panels() {
			return this.tabs.map(function (tab) {
				return { content: tab.title };
			});
		}
	},
	methods: {

		jump: function jump(e) {

			console.log(e);
			this._data.activeTab = e;
		}
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "Input Text",
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  })]), _c('div', {
    staticClass: ["tabbar"]
  }, [_c('div', {
    staticClass: ["tab", "active"],
    style: {
      left: _vm.activeTab * 250 + 'px'
    }
  }), _vm._l((_vm.tabs), function(tab, i) {
    return _c('div', {
      key: i,
      staticClass: ["tab"],
      on: {
        "click": function($event) {
          _vm.jump(i)
        }
      }
    }, [_c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": tab.icon
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(tab.title))])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#FF4563",
    "position": "fixed",
    "bottom": "50"
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
    "backgroundColor": "rgb(218,59,85)",
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _list = __webpack_require__(10);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			activeTab: 0,
			tabs: [{
				title: 'Main',
				icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
			}, {
				title: 'Upload',
				icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
			}, {
				title: 'Mine',
				icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
			}]
		};
	},

	components: {
		videolist: _list2.default
	},
	computed: {
		panels: function panels() {
			return this.tabs.map(function (tab) {
				return { content: tab.title };
			});
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('videolist'), _c('div', {
    staticClass: ["tab-panels"],
    style: {
      left: _vm.activeTab * -750 + 'px'
    }
  }, _vm._l((_vm.panels), function(panel, pi) {
    return _c('div', {
      key: pi,
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["content"]
    }, [_vm._v(_vm._s(panel.content))])])
  }))], 1), _c('div', {
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
          _vm.activeTab = i
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

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "panel": {
    "width": "600",
    "height": "900",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "justifyContent": "center",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.4)"
  },
  "text": {
    "fontSize": "200",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: let is a reserved word (25:2)\n\n\u001b[0m \u001b[90m 23 | \u001b[39m\t}\u001b[33m,\u001b[39m\n \u001b[90m 24 | \u001b[39m\tcreated\u001b[33m:\u001b[39m{\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 | \u001b[39m\t\tlet url \u001b[33m=\u001b[39m \u001b[32m'http://www.jspang.com/DemoApi/newsApi.php'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 26 | \u001b[39m\n \u001b[90m 27 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetVideo(url\u001b[33m,\u001b[39mres \u001b[33m=>\u001b[39m{\n \u001b[90m 28 | \u001b[39m\t\t\t\u001b[90m//get ajax data from server side\u001b[39m\u001b[0m\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', [_c('cell', {
    staticClass: ["cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, _vm._l((_vm.lists), function(char) {
    return _c('div', {
      key: char,
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"],
      on: {
        "appear": function($event) {
          _vm.onappear(char)
        },
        "disappear": function($event) {
          _vm.ondisappear(char)
        }
      }
    }, [_vm._v(_vm._s(char))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/jimzezhang/workspace/smartAlbum/app/src/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0bcc327c"
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


/***/ })
/******/ ]);
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var C_Projects_papyon_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/main.scss */ "./Styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\papyon-web\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Projects_papyon_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./Styles/main.scss":
/*!**************************!*\
  !*** ./Styles/main.scss ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./main.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./Styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./main.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./Styles/main.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./main.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./Styles/main.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./Styles/main.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./Styles/main.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  border: none;\n  outline: none;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.product-header {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  overflow: hidden;\n}\n.product-header .product-text {\n  display: -moz-box;\n  display: flex;\n}\n.product-header .product-text .product-number {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  padding: 50px 120px 50px 120px;\n}\n.product-header .product-text .product-number .number {\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 90px;\n  line-height: 120px;\n}\n.product-header .product-text .product-number .text {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n}\n.product-header .product-photos {\n  width: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.product-header .product-photos .product-photos-bgBox {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  overflow: hidden;\n}\n\n.product-photos-boxs {\n  margin-top: -460px;\n  padding-bottom: 150px;\n  z-index: 50;\n  background-color: #f5f5f5;\n}\n\n.product-content {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n  -moz-box-pack: center;\n       justify-content: center;\n}\n.product-content .product-content-left {\n  display: -moz-box;\n  display: flex;\n  -moz-box-flex: 1;\n       flex: 1 1;\n  -moz-box-pack: center;\n       justify-content: center;\n}\n.product-content .product-content-left .product-left-center {\n  position: relative;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n.product-content .product-content-left .product-left-center .image-area {\n  width: 280px;\n  height: 650px;\n  background-color: #1f7df8;\n  position: absolute;\n  -moz-box-flex: 50%;\n       flex: 50% 1;\n}\n.product-content .product-content-left .product-left-center .imageProduct {\n  max-height: 60% !important;\n  min-height: 60% !important;\n}\n.product-content .product-content-right {\n  display: -moz-box;\n  display: flex;\n  -moz-box-flex: 1;\n       flex: 1 1;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: center;\n       align-items: center;\n  -moz-box-pack: center;\n       justify-content: center;\n}\n.product-content .product-content-right .product-right-center {\n  display: -moz-box;\n  display: flex;\n  width: 50%;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: start;\n       align-items: flex-start;\n}\n.product-content .product-content-right .product-right-center .product-right-header {\n  display: -moz-box;\n  display: flex;\n}\n.product-content .product-content-right .product-right-center .product-right-header h1 {\n  margin: 0 0 0 10px;\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n}\n.product-content .product-content-right .product-right-center p {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 36px;\n  margin-bottom: 60px;\n}\n.product-content .product-content-right .product-right-center .product-right-effect h1 {\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  color: rgba(0, 0, 0, 0.3);\n  line-height: 44px;\n}\n.product-content .product-content-right .product-right-center .product-right-effect p {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 36px;\n  color: rgba(0, 0, 0, 0.3);\n}\n.product-content .product-content-right .product-right-center .product-right-layout h1 {\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  color: rgba(0, 0, 0, 0.3);\n  line-height: 44px;\n}\n.product-content .product-content-right .product-right-center .product-right-layout p {\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 36px;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.product-footer {\n  display: -moz-box;\n  display: flex;\n  width: 100%;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  margin-bottom: 60px;\n}\n.product-footer .product-buttons {\n  display: -moz-box;\n  display: flex;\n}\n.product-footer .product-buttons button {\n  width: 580px;\n  height: 100px;\n  background-color: #000000;\n  color: white;\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 40px;\n  margin: 40px;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n.product-footer .product-buttons button:hover {\n  background-color: #1fcffe;\n}\n\n.about {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  width: 1000px;\n  padding-bottom: 200px;\n}\n.about h1 {\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 50px;\n  line-height: 80px;\n  color: #000000;\n}\n.about p {\n  font-family: Inter;\n  padding-top: 100px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 36px;\n  color: #000000;\n}\n\n.logo {\n  cursor: pointer;\n}\n.logo .logo {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  -moz-transition: transform 0.5s ease-in-out, -moz-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out, -moz-transform 0.5s ease-in-out;\n}\n.logo:hover img {\n  -webkit-transform: scale(1.05);\n     -moz-transform: scale(1.05);\n          transform: scale(1.05);\n  opacity: 0.7;\n}\n\n.contact {\n  padding: 200px;\n}\n.contact h1 {\n  margin: 50px;\n}\n\n.blog {\n  padding: 200px;\n}\n\nnav {\n  display: -moz-box;\n  display: flex;\n}\nnav ul {\n  display: -moz-box;\n  display: flex;\n  width: 414px;\n  justify-content: space-around;\n  height: 24px;\n  -moz-box-align: center;\n       align-items: center;\n  text-align: center;\n}\nnav ul li {\n  display: inline-block;\n  margin: 0 15px;\n}\nnav ul li a {\n  font-family: \"Inter\", sans-serif;\n  padding: 4px 0;\n  text-decoration: none;\n  display: block;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #000;\n  position: relative;\n}\nnav ul li a::before {\n  content: \"\";\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  -webkit-transition: 0.5s -webkit-transform ease;\n  transition: 0.5s -webkit-transform ease;\n  -moz-transition: 0.5s transform ease, 0.5s -moz-transform ease;\n  transition: 0.5s transform ease;\n  transition: 0.5s transform ease, 0.5s -webkit-transform ease, 0.5s -moz-transform ease;\n  -webkit-transform: scale3d(0, 1, 1);\n     -moz-transform: scale3d(0, 1, 1);\n          transform: scale3d(0, 1, 1);\n  -webkit-transform-origin: 0 50%;\n     -moz-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\nnav ul li a:hover::before {\n  -webkit-transform: scale3d(1, 1, 1);\n     -moz-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1);\n}\nnav ul li a::before {\n  -webkit-transform-origin: 50% 50%;\n     -moz-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  background: #1fcffe;\n}\n\nheader {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  padding: 63px 120px 73px 120px;\n  background-color: #f5f5f5;\n}\n\nfooter {\n  width: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n.content {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  position: relative;\n  background-color: #f5f5f5;\n  width: 100%;\n}\n.content .content-img {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n.content .content-text {\n  position: absolute;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  bottom: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, 50%);\n     -moz-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n}\n.content .content-text h1 {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 90px;\n  line-height: 140px;\n  text-align: center;\n  color: #000000;\n}\n\nmain {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  width: 100%;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  background-color: #f5f5f5;\n}\n\n.contentItem {\n  width: 1025px;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  padding-bottom: 200px;\n}\n.contentItem .items {\n  display: -moz-box;\n  display: flex;\n  flex-wrap: wrap;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n.contentItem .items span {\n  padding: 0 20px;\n}\n\n.items-box {\n  position: relative;\n  display: -moz-inline-box;\n  display: inline-flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  width: 470px;\n  height: 650px;\n  background-color: #1f7df8;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n.items-box:hover {\n  -webkit-transform: translateY(-20px);\n     -moz-transform: translateY(-20px);\n          transform: translateY(-20px);\n  opacity: 0.7;\n}\n.items-box .items-box-header {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n  color: #ffff;\n  margin: 40px 277px 0 20px;\n}\n.items-box p {\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  color: #ffffff;\n  line-height: 36px;\n  margin: 10px 76px 20px 40px;\n}\n.items-box .items-img-dot {\n  position: absolute;\n  top: 160px;\n  left: 40px;\n}\n.items-box .items-img-phone {\n  position: absolute;\n  display: -moz-inline-box;\n  display: inline-flex;\n  width: 621px !important;\n  height: 639px !important;\n  -webkit-transform: translate(-10%, 28%);\n     -moz-transform: translate(-10%, 28%);\n          transform: translate(-10%, 28%);\n}\n.items-box .items-img-phone .roosfyP {\n  min-width: 50% !important;\n  max-width: 50% !important;\n  display: -moz-inline-box;\n  display: inline-flex;\n  object-fit: cover;\n}\n\n.items-box2 {\n  position: relative;\n  display: -moz-inline-box;\n  display: inline-flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  width: 470px;\n  height: 650px;\n  background-color: #1fcffe !important;\n  margin-top: 80px;\n  overflow: hidden;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n.items-box2:hover {\n  -webkit-transform: translateY(-20px);\n     -moz-transform: translateY(-20px);\n          transform: translateY(-20px);\n  opacity: 0.7;\n}\n.items-box2 .items-box2-header {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n  color: #ffffff;\n  margin: 40px 236px 0 20px;\n}\n.items-box2 p {\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  color: #ffffff;\n  line-height: 36px;\n  margin: 10px 76px 20px 40px;\n}\n.items-box2 .roosfyN {\n  width: 100%;\n  height: auto;\n}\n.items-box2 .items-img {\n  position: absolute;\n  display: -moz-inline-box;\n  display: inline-flex;\n  width: 621px !important;\n  height: 650px !important;\n  top: 0;\n  right: 0;\n  -webkit-transform: translate(25%);\n     -moz-transform: translate(25%);\n          transform: translate(25%);\n  z-index: 20;\n}\n.items-box2 .items-img .roosfyP {\n  min-width: 50% !important;\n  max-width: 50% !important;\n}\n.items-box2 .items-imgBg {\n  position: absolute;\n  bottom: 90px;\n  right: 45px;\n}\n\n.naricon {\n  position: relative;\n  display: -moz-inline-box;\n  display: inline-flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  width: 470px;\n  height: 650px;\n  background-color: #090235;\n  overflow: hidden;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n.naricon:hover {\n  -webkit-transform: translateY(-20px);\n     -moz-transform: translateY(-20px);\n          transform: translateY(-20px);\n  opacity: 0.7;\n}\n.naricon .naricon-header {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n  color: #ffffff;\n  margin: 40px 277px 0 20px;\n}\n.naricon p {\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  color: #ffffff;\n  line-height: 36px;\n  margin: 10px 76px 20px 40px;\n}\n.naricon .roosfyN {\n  min-width: 50% !important;\n  max-width: 50% !important;\n  margin-right: 45px !important;\n}\n.naricon .items-img {\n  position: absolute;\n  display: -moz-inline-box;\n  display: inline-flex;\n  width: 623px !important;\n  height: 643px !important;\n  -webkit-transform: translate(0%, 1%);\n     -moz-transform: translate(0%, 1%);\n          transform: translate(0%, 1%);\n}\n.naricon .items-img .roosfyP {\n  min-width: 50% !important;\n  max-width: 50% !important;\n  display: -moz-inline-box;\n  display: inline-flex;\n  object-fit: cover;\n}\n\n.itemQr {\n  position: relative;\n  display: -moz-inline-box;\n  display: inline-flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  width: 470px;\n  height: 650px;\n  background-color: #2333a6 !important;\n  margin-top: 80px;\n  overflow: hidden;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\n.itemQr:hover {\n  -webkit-transform: translateY(-20px);\n     -moz-transform: translateY(-20px);\n          transform: translateY(-20px);\n  opacity: 0.7;\n}\n.itemQr .itemQr-header {\n  font-family: \"IBM Plex Mono\", monospace;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  padding: 40px 175px 5px 37px;\n}\n.itemQr p {\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  color: #ffffff;\n  line-height: 36px;\n  padding: 10px 76px 10px 40px;\n}\n.itemQr .roosfyN {\n  width: 100%;\n  height: auto;\n}\n.itemQr .items-img {\n  position: absolute;\n  display: -moz-inline-box;\n  display: inline-flex;\n  width: 621px !important;\n  height: 650px !important;\n  top: 0;\n  right: 0;\n  -webkit-transform: translate(25%);\n     -moz-transform: translate(25%);\n          transform: translate(25%);\n  z-index: 20;\n}\n.itemQr .items-img .roosfyP {\n  min-width: 50% !important;\n  max-width: 50% !important;\n}\n.itemQr .items-imgBg {\n  position: absolute;\n  bottom: 90px;\n  left: 45px;\n}\n\n.footerHeader {\n  display: -moz-box;\n  display: flex;\n  padding: 150px 120px 110px 150px;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n}\n.footerHeader .footerHeader-numbers {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  padding: 0 80px 0 80px;\n}\n.footerHeader .footerHeader-numbers .number {\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 90px;\n  color: #000000;\n  line-height: 100px;\n}\n.footerHeader .footerHeader-numbers .numbers-text {\n  margin-top: 25px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  color: #000000;\n  line-height: 22px;\n}\n\n.footerHeader-button {\n  width: 1200px;\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  margin: 110px 120px 150px 120px;\n}\n.footerHeader-button .button {\n  padding: 30px 540px;\n  background: #000000;\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n}\n.footerHeader-button .button a {\n  color: white;\n  font-family: IBM Plex Mono;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 40px;\n}\n.footerHeader-button .button .contact {\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n}\n.footerHeader-button .button:hover {\n  background-color: #1fcffe;\n}", "",{"version":3,"sources":["webpack://main.scss","webpack://pages/product/product.scss","webpack://pages/about/about.scss","webpack://components/_logo.scss","webpack://pages/contact/contact.scss","webpack://pages/blog/blog.scss","webpack://components/_navigation.scss","webpack://components/_layout.scss","webpack://components/_content.scss","webpack://components/_contentItem.scss","webpack://components/_contentItemRoosefy.scss","webpack://components/_contentItemAstrodiac.scss","webpack://components/_contentItemNaricon.scss","webpack://components/_ContentItemQr.scss","webpack://components/_footerHeader.scss","webpack://components/_footerButton.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: none;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n}\r\n\r\n// Product Css\r\n@import \"./pages/product/product.scss\";\r\n\r\n// Home Css\r\n\r\n@import \"./pages/index.scss\";\r\n\r\n// About Css\r\n\r\n@import \"./pages/about/about.scss\";\r\n\r\n// LOGO Css\r\n\r\n@import \"./components/logo\";\r\n\r\n// contact Css\r\n\r\n@import \"./pages/contact/contact.scss\";\r\n\r\n// Blog Css\r\n\r\n@import \"./pages/blog/blog.scss\";\r\n\r\n// navigation Css\r\n\r\n@import \"./components/navigation.scss\";\r\n\r\n// layout Css\r\n\r\n@import \"./components/layout.scss\";\r\n\r\n// Content Css\r\n\r\n@import \"./components/content\";\r\n\r\n// ContentItem Css\r\n\r\n@import \"./components/contentItem\";\r\n\r\n// ContentItemRoosefy CSS\r\n\r\n@import \"./components/contentItemRoosefy\";\r\n\r\n// ContentItemRoosefy CSS\r\n\r\n@import \"./components/contentItemAstrodiac\";\r\n\r\n// ContentItemNaricon CSS\r\n@import \"./components/contentItemNaricon\";\r\n\r\n// ContentItemQr CSS\r\n@import \"./components/ContentItemQr.scss\";\r\n\r\n//FOOTER CSS\r\n\r\n@import \"./components/footerHeader\";\r\n\r\n// FOOTER BUTTON\r\n\r\n@import \"./components/footerButton\";\r\n",".product-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n\r\n    .product-text {\r\n        display: flex;\r\n        .product-number {\r\n            display: flex;\r\n            flex-direction: column;\r\n            padding: 50px 120px 50px 120px;\r\n            .number {\r\n                font-family: IBM Plex Mono;\r\n                font-style: normal;\r\n                font-weight: 500;\r\n                font-size: 90px;\r\n                line-height: 120px;\r\n            }\r\n            .text {\r\n                font-family: Inter;\r\n                font-style: normal;\r\n                font-weight: 500;\r\n                font-size: 18px;\r\n                line-height: 22px;\r\n            }\r\n        }\r\n    }\r\n    .product-photos {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        .product-photos-bgBox {\r\n            display: flex;\r\n            justify-content: center;\r\n            overflow: hidden;\r\n        }\r\n    }\r\n}\r\n.product-photos-boxs {\r\n    margin-top: -460px;\r\n    padding-bottom: 150px;\r\n    z-index: 50;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n// EFFECT AND LAYOUTS\r\n\r\n.product-content {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n\r\n    .product-content-left {\r\n        display: flex;\r\n        flex: 1;\r\n        justify-content: center;\r\n        .product-left-center {\r\n            position: relative;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            .image-area {\r\n                width: 280px;\r\n                height: 650px;\r\n                background-color: #1f7df8;\r\n                position: absolute;\r\n                flex: 50%;\r\n            }\r\n            .imageProduct {\r\n                max-height: 60% !important;\r\n                min-height: 60% !important;\r\n            }\r\n        }\r\n    }\r\n    .product-content-right {\r\n        display: flex;\r\n        flex: 1;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        .product-right-center {\r\n            display: flex;\r\n            width: 50%;\r\n            flex-direction: column;\r\n            align-items: flex-start;\r\n            .product-right-header {\r\n                display: flex;\r\n\r\n                h1 {\r\n                    margin: 0 0 0 10px;\r\n                    font-family: IBM Plex Mono;\r\n                    font-style: normal;\r\n                    font-weight: 500;\r\n                    font-size: 34px;\r\n                    line-height: 44px;\r\n                }\r\n            }\r\n            p {\r\n                font-family: Inter;\r\n                font-style: normal;\r\n                font-weight: normal;\r\n                font-size: 18px;\r\n                line-height: 36px;\r\n                margin-bottom: 60px;\r\n            }\r\n            .product-right-effect {\r\n                h1 {\r\n                    font-family: IBM Plex Mono;\r\n                    font-style: normal;\r\n                    font-weight: 500;\r\n                    font-size: 34px;\r\n                    color: rgba(0, 0, 0, 0.3);\r\n                    line-height: 44px;\r\n                }\r\n                p {\r\n                    font-family: Inter;\r\n                    font-style: normal;\r\n                    font-weight: normal;\r\n                    font-size: 18px;\r\n                    line-height: 36px;\r\n                    color: rgba(0, 0, 0, 0.3);\r\n                }\r\n            }\r\n            .product-right-layout {\r\n                h1 {\r\n                    font-family: IBM Plex Mono;\r\n                    font-style: normal;\r\n                    font-weight: 500;\r\n                    font-size: 34px;\r\n                    color: rgba(0, 0, 0, 0.3);\r\n                    line-height: 44px;\r\n                }\r\n                p {\r\n                    font-family: Inter;\r\n                    font-style: normal;\r\n                    font-weight: normal;\r\n                    font-size: 18px;\r\n                    line-height: 36px;\r\n                    color: rgba(0, 0, 0, 0.3);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n.product-footer {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 60px;\r\n    .product-buttons {\r\n        display: flex;\r\n\r\n        button {\r\n            width: 580px;\r\n            height: 100px;\r\n            background-color: #000000;\r\n            color: white;\r\n            font-family: IBM Plex Mono;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 20px;\r\n            line-height: 40px;\r\n            margin: 40px;\r\n            transition: 0.5s ease-in-out;\r\n            cursor: pointer;\r\n            &:hover {\r\n                background-color: #1fcffe;\r\n            }\r\n        }\r\n    }\r\n}\r\n",".about {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 1000px;\r\n    padding-bottom: 200px;\r\n\r\n    h1 {\r\n        font-family: IBM Plex Mono;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 50px;\r\n        line-height: 80px;\r\n        color: #000000;\r\n    }\r\n    p {\r\n        font-family: Inter;\r\n        padding-top: 100px;\r\n        font-style: normal;\r\n        font-weight: normal;\r\n        font-size: 18px;\r\n        line-height: 36px;\r\n        color: #000000;\r\n    }\r\n}\r\n",".logo {\r\n    cursor: pointer;\r\n    .logo {\r\n        backface-visibility: hidden;\r\n        transition: transform 0.5s ease-in-out;\r\n        // backface-visibility: hidden;\r\n        // transition transform: 0.5s ease-in-out;\r\n    }\r\n    &:hover img {\r\n        transform: scale(1.05);\r\n        opacity: 0.7;\r\n    }\r\n}\r\n",".contact {\r\n    padding: 200px;\r\n    h1 {\r\n        margin: 50px;\r\n    }\r\n}\r\n",".blog {\r\n    padding: 200px;\r\n}\r\n","nav {\r\n    display: flex;\r\n    ul {\r\n        display: flex;\r\n        width: 414px;\r\n        justify-content: space-around;\r\n        height: 24px;\r\n        align-items: center;\r\n        text-align: center;\r\n        li {\r\n            display: inline-block;\r\n            margin: 0 15px;\r\n            a {\r\n                font-family: \"Inter\", sans-serif;\r\n                padding: 4px 0;\r\n                text-decoration: none;\r\n                display: block;\r\n                font-style: normal;\r\n                font-weight: 500;\r\n                font-size: 16px;\r\n                line-height: 24px;\r\n                color: #000;\r\n                position: relative;\r\n                &::before {\r\n                    content: \"\";\r\n                    width: 100%;\r\n                    height: 4px;\r\n                    position: absolute;\r\n                    left: 0;\r\n                    bottom: 0;\r\n                    background: #fff;\r\n                    transition: 0.5s transform ease;\r\n                    transform: scale3d(0, 1, 1);\r\n                    transform-origin: 0 50%;\r\n                }\r\n                &:hover::before {\r\n                    transform: scale3d(1, 1, 1);\r\n                }\r\n                &::before {\r\n                    transform-origin: 50% 50%;\r\n                    background: #1fcffe;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n","header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 63px 120px 73px 120px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n",".content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    background-color: #f5f5f5;\r\n    width: 100%;\r\n    .content-img {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 100%;\r\n        height: auto;\r\n        object-fit: cover;\r\n    }\r\n    .content-text {\r\n        position: absolute;\r\n        display: flex;\r\n        flex-direction: column;\r\n        bottom: 50%;\r\n        right: 50%;\r\n        transform: translate(50%, 50%);\r\n        h1 {\r\n            font-family: \"IBM Plex Mono\", monospace;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 90px;\r\n            line-height: 140px;\r\n            text-align: center;\r\n            color: #000000;\r\n        }\r\n    }\r\n}\r\n","main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.contentItem {\r\n    width: 1025px;\r\n    margin: 0 auto;\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-bottom: 200px;\r\n\r\n    .items {\r\n        // width: 1000px;\r\n        // padding: 10%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        align-items: center;\r\n        span {\r\n            padding: 0 20px;\r\n        }\r\n    }\r\n}\r\n",".items-box {\r\n    position: relative;\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    width: 470px;\r\n\r\n    height: 650px;\r\n    background-color: #1f7df8;\r\n\r\n    transition: 0.5s ease-in-out;\r\n    cursor: pointer;\r\n    &:hover {\r\n        transform: translateY(-20px);\r\n        opacity: 0.7;\r\n    }\r\n    .items-box-header {\r\n        font-family: \"IBM Plex Mono\", monospace;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 34px;\r\n        line-height: 44px;\r\n        color: #ffff;\r\n        margin: 40px 277px 0 20px;\r\n    }\r\n    p {\r\n        font-family: \"Inter\", sans-serif;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        color: #ffffff;\r\n        line-height: 36px;\r\n        margin: 10px 76px 20px 40px;\r\n    }\r\n    .items-img-dot {\r\n        position: absolute;\r\n        top: 160px;\r\n        left: 40px;\r\n\r\n        .roosfyN {\r\n        }\r\n    }\r\n\r\n    .items-img-phone {\r\n        position: absolute;\r\n        display: inline-flex;\r\n        width: 621px !important;\r\n        height: 639px !important;\r\n        transform: translate(-10%, 28%);\r\n        .roosfyP {\r\n            min-width: 50% !important;\r\n            max-width: 50% !important;\r\n            display: inline-flex;\r\n            object-fit: cover;\r\n        }\r\n    }\r\n}\r\n",".items-box2 {\r\n    position: relative;\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    width: 470px;\r\n    height: 650px;\r\n    background-color: #1fcffe !important;\r\n    margin-top: 80px;\r\n    overflow: hidden;\r\n    transition: 0.5s ease-in-out;\r\n    cursor: pointer;\r\n    &:hover {\r\n        transform: translateY(-20px);\r\n        opacity: 0.7;\r\n    }\r\n\r\n    .items-box2-header {\r\n        font-family: \"IBM Plex Mono\", monospace;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 34px;\r\n        line-height: 44px;\r\n        color: #ffffff;\r\n        margin: 40px 236px 0 20px;\r\n    }\r\n    p {\r\n        font-family: \"Inter\", sans-serif;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        color: #ffffff;\r\n        line-height: 36px;\r\n        margin: 10px 76px 20px 40px;\r\n    }\r\n    .roosfyN {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .items-img {\r\n        position: absolute;\r\n        display: inline-flex;\r\n        width: 621px !important;\r\n        height: 650px !important;\r\n        top: 0;\r\n        right: 0;\r\n        transform: translate(25%);\r\n        z-index: 20;\r\n\r\n        .roosfyP {\r\n            min-width: 50% !important;\r\n            max-width: 50% !important;\r\n        }\r\n    }\r\n    .items-imgBg {\r\n        position: absolute;\r\n        bottom: 90px;\r\n        right: 45px;\r\n    }\r\n}\r\n",".naricon {\r\n    position: relative;\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    width: 470px;\r\n    height: 650px;\r\n    background-color: #090235;\r\n    overflow: hidden;\r\n\r\n    transition: 0.5s ease-in-out;\r\n    cursor: pointer;\r\n    &:hover {\r\n        transform: translateY(-20px);\r\n        opacity: 0.7;\r\n    }\r\n\r\n    .naricon-header {\r\n        font-family: \"IBM Plex Mono\", monospace;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 34px;\r\n        line-height: 44px;\r\n        color: #ffffff;\r\n        margin: 40px 277px 0 20px;\r\n    }\r\n    p {\r\n        font-family: \"Inter\", sans-serif;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        color: #ffffff;\r\n        line-height: 36px;\r\n        margin: 10px 76px 20px 40px;\r\n    }\r\n    .roosfyN {\r\n        min-width: 50% !important;\r\n        max-width: 50% !important;\r\n        margin-right: 45px !important;\r\n    }\r\n    .items-img {\r\n        position: absolute;\r\n        display: inline-flex;\r\n        width: 623px !important;\r\n        height: 643px !important;\r\n        transform: translate(0%, 1%);\r\n\r\n        .roosfyP {\r\n            min-width: 50% !important;\r\n            max-width: 50% !important;\r\n            display: inline-flex;\r\n            object-fit: cover;\r\n        }\r\n    }\r\n}\r\n",".itemQr {\r\n    position: relative;\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    width: 470px;\r\n    height: 650px;\r\n    background-color: #2333a6 !important;\r\n    margin-top: 80px;\r\n    overflow: hidden;\r\n    transition: 0.5s ease-in-out;\r\n    cursor: pointer;\r\n    &:hover {\r\n        transform: translateY(-20px);\r\n        opacity: 0.7;\r\n    }\r\n\r\n    .itemQr-header {\r\n        font-family: \"IBM Plex Mono\", monospace;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 34px;\r\n        line-height: 44px;\r\n        color: #ffffff;\r\n        padding: 0;\r\n        margin: 0;\r\n        padding: 40px 175px 5px 37px;\r\n    }\r\n    p {\r\n        font-family: \"Inter\", sans-serif;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        color: #ffffff;\r\n        line-height: 36px;\r\n        padding: 10px 76px 10px 40px;\r\n    }\r\n    .roosfyN {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .items-img {\r\n        position: absolute;\r\n        display: inline-flex;\r\n        width: 621px !important;\r\n        height: 650px !important;\r\n        top: 0;\r\n        right: 0;\r\n        transform: translate(25%);\r\n        z-index: 20;\r\n\r\n        .roosfyP {\r\n            min-width: 50% !important;\r\n            max-width: 50% !important;\r\n        }\r\n    }\r\n    .items-imgBg {\r\n        position: absolute;\r\n        bottom: 90px;\r\n        left: 45px;\r\n    }\r\n}\r\n",".footerHeader {\r\n    display: flex;\r\n    // padding: 150px 120px 110px 250px;\r\n    padding: 150px 120px 110px 150px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    .footerHeader-numbers {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 0 80px 0 80px;\r\n\r\n        .number {\r\n            font-family: IBM Plex Mono;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 90px;\r\n            color: #000000;\r\n            line-height: 100px;\r\n        }\r\n        .numbers-text {\r\n            margin-top: 25px;\r\n            font-family: Inter;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 18px;\r\n            color: #000000;\r\n            line-height: 22px;\r\n        }\r\n    }\r\n}\r\n",".footerHeader-button {\r\n    width: 1200px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 110px 120px 150px 120px;\r\n    .button {\r\n        padding: 30px 540px;\r\n        background: #000000;\r\n        transition: 0.5s ease-in-out;\r\n\r\n        a {\r\n            color: white;\r\n            font-family: IBM Plex Mono;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 20px;\r\n            line-height: 40px;\r\n        }\r\n        .contact {\r\n            transition: 0.5s ease-in-out;\r\n        }\r\n        &:hover {\r\n            background-color: #1fcffe;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsOEJBQThCLG1CQUFtQixr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QUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGLGVBQWU7QUFDOUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVIsa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7OztBQUdsQjtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSx1SkFBc0U7QUFDeEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL1N0eWxlcy9tYWluLnNjc3M/ZWRiNCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL1N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vU3R5bGVzL21haW4uc2Nzc1wiO1xyXG5cclxuLy8gVGhpcyBkZWZhdWx0IGV4cG9ydCBpcyByZXF1aXJlZCBpbiBhIG5ldyBgcGFnZXMvX2FwcC5qc2AgZmlsZS5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbNF0hLi9tYWluLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzRdIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUxKCkge1xuICAgIGxldCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgICAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgICAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICAgICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbn0oKTtcbmNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldDEoKSB7XG4gICAgY29uc3QgbWVtbyA9IHtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgICB9O1xufSgpO1xuY29uc3Qgc3R5bGVzSW5Eb20gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZENvdW50TWFwID0ge1xuICAgIH07XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICBjb25zdCBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgICAgICBjb25zdCBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZCArICcgJyArIGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gICAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqLyBjb25zdCByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0MSgpIHtcbiAgICBjb25zdCB0ZXh0U3RvcmUgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgICB9O1xufSgpO1xuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgY29uc3QgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyAnQG1lZGlhICcgKyBvYmoubWVkaWEgKyAnIHsnICsgb2JqLmNzcyArICd9JyA6IG9iai5jc3M7XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICAgIGxldCBjc3MgPSBvYmouY3NzO1xuICAgIGNvbnN0IG1lZGlhID0gb2JqLm1lZGlhO1xuICAgIGNvbnN0IHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJztcbiAgICB9XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5sZXQgc2luZ2xldG9uQ291bnRlciA9IDA7XG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IHVwZGF0ZTtcbiAgICBsZXQgcmVtb3ZlO1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKG9iaik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgfTtcbiAgICAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG4gICAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgICB9XG4gICAgbGlzdCA9IGxpc3QgfHwgW107XG4gICAgbGV0IGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICAgICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkxKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpMV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5wcm9kdWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcm9kdWN0LWhlYWRlciAucHJvZHVjdC10ZXh0IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2R1Y3QtaGVhZGVyIC5wcm9kdWN0LXRleHQgLnByb2R1Y3QtbnVtYmVyIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDUwcHggMTIwcHggNTBweCAxMjBweDtcXG59XFxuLnByb2R1Y3QtaGVhZGVyIC5wcm9kdWN0LXRleHQgLnByb2R1Y3QtbnVtYmVyIC5udW1iZXIge1xcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA5MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xcbn1cXG4ucHJvZHVjdC1oZWFkZXIgLnByb2R1Y3QtdGV4dCAucHJvZHVjdC1udW1iZXIgLnRleHQge1xcbiAgZm9udC1mYW1pbHk6IEludGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4ucHJvZHVjdC1oZWFkZXIgLnByb2R1Y3QtcGhvdG9zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvZHVjdC1oZWFkZXIgLnByb2R1Y3QtcGhvdG9zIC5wcm9kdWN0LXBob3Rvcy1iZ0JveCB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2R1Y3QtcGhvdG9zLWJveHMge1xcbiAgbWFyZ2luLXRvcDogLTQ2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcbiAgei1pbmRleDogNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4ucHJvZHVjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByb2R1Y3QtY29udGVudCAucHJvZHVjdC1jb250ZW50LWxlZnQge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgZmxleDogMSAxO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByb2R1Y3QtY29udGVudCAucHJvZHVjdC1jb250ZW50LWxlZnQgLnByb2R1Y3QtbGVmdC1jZW50ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9kdWN0LWNvbnRlbnQgLnByb2R1Y3QtY29udGVudC1sZWZ0IC5wcm9kdWN0LWxlZnQtY2VudGVyIC5pbWFnZS1hcmVhIHtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY3ZGY4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLW1vei1ib3gtZmxleDogNTAlO1xcbiAgICAgICBmbGV4OiA1MCUgMTtcXG59XFxuLnByb2R1Y3QtY29udGVudCAucHJvZHVjdC1jb250ZW50LWxlZnQgLnByb2R1Y3QtbGVmdC1jZW50ZXIgLmltYWdlUHJvZHVjdCB7XFxuICBtYXgtaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZHVjdC1jb250ZW50IC5wcm9kdWN0LWNvbnRlbnQtcmlnaHQge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgZmxleDogMSAxO1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9kdWN0LWNvbnRlbnQgLnByb2R1Y3QtY29udGVudC1yaWdodCAucHJvZHVjdC1yaWdodC1jZW50ZXIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tb3otYm94LWFsaWduOiBzdGFydDtcXG4gICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcm9kdWN0LWNvbnRlbnQgLnByb2R1Y3QtY29udGVudC1yaWdodCAucHJvZHVjdC1yaWdodC1jZW50ZXIgLnByb2R1Y3QtcmlnaHQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2R1Y3QtY29udGVudCAucHJvZHVjdC1jb250ZW50LXJpZ2h0IC5wcm9kdWN0LXJpZ2h0LWNlbnRlciAucHJvZHVjdC1yaWdodC1oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxufVxcbi5wcm9kdWN0LWNvbnRlbnQgLnByb2R1Y3QtY29udGVudC1yaWdodCAucHJvZHVjdC1yaWdodC1jZW50ZXIgcCB7XFxuICBmb250LWZhbWlseTogSW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4ucHJvZHVjdC1jb250ZW50IC5wcm9kdWN0LWNvbnRlbnQtcmlnaHQgLnByb2R1Y3QtcmlnaHQtY2VudGVyIC5wcm9kdWN0LXJpZ2h0LWVmZmVjdCBoMSB7XFxuICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxufVxcbi5wcm9kdWN0LWNvbnRlbnQgLnByb2R1Y3QtY29udGVudC1yaWdodCAucHJvZHVjdC1yaWdodC1jZW50ZXIgLnByb2R1Y3QtcmlnaHQtZWZmZWN0IHAge1xcbiAgZm9udC1mYW1pbHk6IEludGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLnByb2R1Y3QtY29udGVudCAucHJvZHVjdC1jb250ZW50LXJpZ2h0IC5wcm9kdWN0LXJpZ2h0LWNlbnRlciAucHJvZHVjdC1yaWdodC1sYXlvdXQgaDEge1xcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbn1cXG4ucHJvZHVjdC1jb250ZW50IC5wcm9kdWN0LWNvbnRlbnQtcmlnaHQgLnByb2R1Y3QtcmlnaHQtY2VudGVyIC5wcm9kdWN0LXJpZ2h0LWxheW91dCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5wcm9kdWN0LWZvb3RlciB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLnByb2R1Y3QtZm9vdGVyIC5wcm9kdWN0LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvZHVjdC1mb290ZXIgLnByb2R1Y3QtYnV0dG9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDU4MHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogNDBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9kdWN0LWZvb3RlciAucHJvZHVjdC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZjZmZlO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcbn1cXG4uYWJvdXQgaDEge1xcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmFib3V0IHAge1xcbiAgZm9udC1mYW1pbHk6IEludGVyO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxvZ28gLmxvZ28ge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgLW1vei10cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmxvZ286aG92ZXIgaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgcGFkZGluZzogMjAwcHg7XFxufVxcbi5jb250YWN0IGgxIHtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuXFxuLmJsb2cge1xcbiAgcGFkZGluZzogMjAwcHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDE0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMjRweDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm5hdiB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxubmF2IHVsIGxpIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm5hdiB1bCBsaSBhOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gZWFzZSwgMC41cyAtbW96LXRyYW5zZm9ybSBlYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gZWFzZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIGVhc2UsIDAuNXMgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZSwgMC41cyAtbW96LXRyYW5zZm9ybSBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xcbn1cXG5uYXYgdWwgbGkgYTpob3Zlcjo6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG59XFxubmF2IHVsIGxpIGE6OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMWZjZmZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNjNweCAxMjBweCA3M3B4IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGVudCAuY29udGVudC1pbWcge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uY29udGVudCAuY29udGVudC10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvdHRvbTogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLmNvbnRlbnQgLmNvbnRlbnQtdGV4dCBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA5MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbi5jb250ZW50SXRlbSB7XFxuICB3aWR0aDogMTAyNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG59XFxuLmNvbnRlbnRJdGVtIC5pdGVtcyB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnRJdGVtIC5pdGVtcyBzcGFuIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLml0ZW1zLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0NzBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY3ZGY4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLml0ZW1zLWJveDpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5pdGVtcy1ib3ggLml0ZW1zLWJveC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgY29sb3I6ICNmZmZmO1xcbiAgbWFyZ2luOiA0MHB4IDI3N3B4IDAgMjBweDtcXG59XFxuLml0ZW1zLWJveCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBtYXJnaW46IDEwcHggNzZweCAyMHB4IDQwcHg7XFxufVxcbi5pdGVtcy1ib3ggLml0ZW1zLWltZy1kb3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNjBweDtcXG4gIGxlZnQ6IDQwcHg7XFxufVxcbi5pdGVtcy1ib3ggLml0ZW1zLWltZy1waG9uZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiA2MjFweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA2MzlweCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAyOCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAyOCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAyOCUpO1xcbn1cXG4uaXRlbXMtYm94IC5pdGVtcy1pbWctcGhvbmUgLnJvb3NmeVAge1xcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaXRlbXMtYm94MiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0NzBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZjZmZlICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pdGVtcy1ib3gyOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLml0ZW1zLWJveDIgLml0ZW1zLWJveDItaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiA0MHB4IDIzNnB4IDAgMjBweDtcXG59XFxuLml0ZW1zLWJveDIgcCB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbWFyZ2luOiAxMHB4IDc2cHggMjBweCA0MHB4O1xcbn1cXG4uaXRlbXMtYm94MiAucm9vc2Z5TiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLml0ZW1zLWJveDIgLml0ZW1zLWltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiA2MjFweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuLml0ZW1zLWJveDIgLml0ZW1zLWltZyAucm9vc2Z5UCB7XFxuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG59XFxuLml0ZW1zLWJveDIgLml0ZW1zLWltZ0JnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogOTBweDtcXG4gIHJpZ2h0OiA0NXB4O1xcbn1cXG5cXG4ubmFyaWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0NzBweDtcXG4gIGhlaWdodDogNjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwMjM1O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXJpY29uOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuLm5hcmljb24gLm5hcmljb24taGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiA0MHB4IDI3N3B4IDAgMjBweDtcXG59XFxuLm5hcmljb24gcCB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgbWFyZ2luOiAxMHB4IDc2cHggMjBweCA0MHB4O1xcbn1cXG4ubmFyaWNvbiAucm9vc2Z5TiB7XFxuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogNDVweCAhaW1wb3J0YW50O1xcbn1cXG4ubmFyaWNvbiAuaXRlbXMtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgd2lkdGg6IDYyM3B4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDY0M3B4ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxJSk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxJSk7XFxufVxcbi5uYXJpY29uIC5pdGVtcy1pbWcgLnJvb3NmeVAge1xcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaXRlbVFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQ3MHB4O1xcbiAgaGVpZ2h0OiA2NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzMzYTYgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLml0ZW1Rcjpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbi5pdGVtUXIgLml0ZW1Rci1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNDBweCAxNzVweCA1cHggMzdweDtcXG59XFxuLml0ZW1RciBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDc2cHggMTBweCA0MHB4O1xcbn1cXG4uaXRlbVFyIC5yb29zZnlOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uaXRlbVFyIC5pdGVtcy1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB3aWR0aDogNjIxcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogNjUwcHggIWltcG9ydGFudDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUpO1xcbiAgei1pbmRleDogMjA7XFxufVxcbi5pdGVtUXIgLml0ZW1zLWltZyAucm9vc2Z5UCB7XFxuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG59XFxuLml0ZW1RciAuaXRlbXMtaW1nQmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA5MHB4O1xcbiAgbGVmdDogNDVweDtcXG59XFxuXFxuLmZvb3RlckhlYWRlciB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNTBweCAxMjBweCAxMTBweCAxNTBweDtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVySGVhZGVyIC5mb290ZXJIZWFkZXItbnVtYmVycyB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgODBweCAwIDgwcHg7XFxufVxcbi5mb290ZXJIZWFkZXIgLmZvb3RlckhlYWRlci1udW1iZXJzIC5udW1iZXIge1xcbiAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA5MHB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBsaW5lLWhlaWdodDogMTAwcHg7XFxufVxcbi5mb290ZXJIZWFkZXIgLmZvb3RlckhlYWRlci1udW1iZXJzIC5udW1iZXJzLXRleHQge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4uZm9vdGVySGVhZGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDExMHB4IDEyMHB4IDE1MHB4IDEyMHB4O1xcbn1cXG4uZm9vdGVySGVhZGVyLWJ1dHRvbiAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDMwcHggNTQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmZvb3RlckhlYWRlci1idXR0b24gLmJ1dHRvbiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBNb25vO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uZm9vdGVySGVhZGVyLWJ1dHRvbiAuYnV0dG9uIC5jb250YWN0IHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mb290ZXJIZWFkZXItYnV0dG9uIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmY2ZmZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL21haW4uc2Nzc1wiLFwid2VicGFjazovL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vcGFnZXMvYWJvdXQvYWJvdXQuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX2xvZ28uc2Nzc1wiLFwid2VicGFjazovL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vcGFnZXMvYmxvZy9ibG9nLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL19uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX2NvbnRlbnRJdGVtLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL19jb250ZW50SXRlbVJvb3NlZnkuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX2NvbnRlbnRJdGVtQXN0cm9kaWFjLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL19jb250ZW50SXRlbU5hcmljb24uc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX0NvbnRlbnRJdGVtUXIuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvX2Zvb3RlckhlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9fZm9vdGVyQnV0dG9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQ1JBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFB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QUE7RUFBQSxpQ0FBQTtFQUFBLDRCQUFBO0FmK2xCWjtBZTdsQlE7RUFDSSx5QkFBQTtBZitsQlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gUHJvZHVjdCBDc3NcXHJcXG5AaW1wb3J0IFxcXCIuL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5zY3NzXFxcIjtcXHJcXG5cXHJcXG4vLyBIb21lIENzc1xcclxcblxcclxcbkBpbXBvcnQgXFxcIi4vcGFnZXMvaW5kZXguc2Nzc1xcXCI7XFxyXFxuXFxyXFxuLy8gQWJvdXQgQ3NzXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9wYWdlcy9hYm91dC9hYm91dC5zY3NzXFxcIjtcXHJcXG5cXHJcXG4vLyBMT0dPIENzc1xcclxcblxcclxcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9sb2dvXFxcIjtcXHJcXG5cXHJcXG4vLyBjb250YWN0IENzc1xcclxcblxcclxcbkBpbXBvcnQgXFxcIi4vcGFnZXMvY29udGFjdC9jb250YWN0LnNjc3NcXFwiO1xcclxcblxcclxcbi8vIEJsb2cgQ3NzXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9wYWdlcy9ibG9nL2Jsb2cuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuLy8gbmF2aWdhdGlvbiBDc3NcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzXFxcIjtcXHJcXG5cXHJcXG4vLyBsYXlvdXQgQ3NzXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2xheW91dC5zY3NzXFxcIjtcXHJcXG5cXHJcXG4vLyBDb250ZW50IENzc1xcclxcblxcclxcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9jb250ZW50XFxcIjtcXHJcXG5cXHJcXG4vLyBDb250ZW50SXRlbSBDc3NcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvY29udGVudEl0ZW1cXFwiO1xcclxcblxcclxcbi8vIENvbnRlbnRJdGVtUm9vc2VmeSBDU1NcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvY29udGVudEl0ZW1Sb29zZWZ5XFxcIjtcXHJcXG5cXHJcXG4vLyBDb250ZW50SXRlbVJvb3NlZnkgQ1NTXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2NvbnRlbnRJdGVtQXN0cm9kaWFjXFxcIjtcXHJcXG5cXHJcXG4vLyBDb250ZW50SXRlbU5hcmljb24gQ1NTXFxyXFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2NvbnRlbnRJdGVtTmFyaWNvblxcXCI7XFxyXFxuXFxyXFxuLy8gQ29udGVudEl0ZW1RciBDU1NcXHJcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvQ29udGVudEl0ZW1Rci5zY3NzXFxcIjtcXHJcXG5cXHJcXG4vL0ZPT1RFUiBDU1NcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvZm9vdGVySGVhZGVyXFxcIjtcXHJcXG5cXHJcXG4vLyBGT09URVIgQlVUVE9OXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9jb21wb25lbnRzL2Zvb3RlckJ1dHRvblxcXCI7XFxyXFxuXCIsXCIucHJvZHVjdC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtdGV4dCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgLnByb2R1Y3QtbnVtYmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMjBweCA1MHB4IDEyMHB4O1xcclxcbiAgICAgICAgICAgIC5udW1iZXIge1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLnRleHQge1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2R1Y3QtcGhvdG9zIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICAucHJvZHVjdC1waG90b3MtYmdCb3gge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucHJvZHVjdC1waG90b3MtYm94cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC00NjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcclxcbiAgICB6LWluZGV4OiA1MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gRUZGRUNUIEFORCBMQVlPVVRTXFxyXFxuXFxyXFxuLnByb2R1Y3QtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtY29udGVudC1sZWZ0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAucHJvZHVjdC1sZWZ0LWNlbnRlciB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAuaW1hZ2UtYXJlYSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2RmODtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBmbGV4OiA1MCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5pbWFnZVByb2R1Y3Qge1xcclxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5wcm9kdWN0LWNvbnRlbnQtcmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgLnByb2R1Y3QtcmlnaHQtY2VudGVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICAucHJvZHVjdC1yaWdodC1oZWFkZXIge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5wcm9kdWN0LXJpZ2h0LWVmZmVjdCB7XFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBNb25vO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLnByb2R1Y3QtcmlnaHQtbGF5b3V0IHtcXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucHJvZHVjdC1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICAgIC5wcm9kdWN0LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDU4MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IE1vbm87XFxyXFxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogNDBweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmY2ZmZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuYWJvdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB9XFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IEludGVyO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIubG9nbyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgLmxvZ28ge1xcclxcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAvLyBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAvLyB0cmFuc2l0aW9uIHRyYW5zZm9ybTogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcbiAgICAmOmhvdmVyIGltZyB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMC43O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLmNvbnRhY3Qge1xcclxcbiAgICBwYWRkaW5nOiAyMDBweDtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgbWFyZ2luOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLmJsb2cge1xcclxcbiAgICBwYWRkaW5nOiAyMDBweDtcXHJcXG59XFxyXFxuXCIsXCJuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB1bCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDQxNHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFmY2ZmZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcImhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogNjNweCAxMjBweCA3M3B4IDEyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLFwiLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLmNvbnRlbnQtaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250ZW50LXRleHQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBib3R0b206IDUwJTtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTQwcHg7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwibWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXHJcXG5cXHJcXG4gICAgLml0ZW1zIHtcXHJcXG4gICAgICAgIC8vIHdpZHRoOiAxMDAwcHg7XFxyXFxuICAgICAgICAvLyBwYWRkaW5nOiAxMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLml0ZW1zLWJveCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0NzBweDtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2RmODtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1zLWJveC1oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmZmO1xcclxcbiAgICAgICAgbWFyZ2luOiA0MHB4IDI3N3B4IDAgMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggNzZweCAyMHB4IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1zLWltZy1kb3Qge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxNjBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgICAucm9vc2Z5TiB7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLml0ZW1zLWltZy1waG9uZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiA2MjFweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MzlweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgMjglKTtcXHJcXG4gICAgICAgIC5yb29zZnlQIHtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuaXRlbXMtYm94MiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0NzBweDtcXHJcXG4gICAgaGVpZ2h0OiA2NTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmY2ZmZSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbXMtYm94Mi1oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJJQk0gUGxleCBNb25vXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgICBtYXJnaW46IDQwcHggMjM2cHggMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCA3NnB4IDIwcHggNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucm9vc2Z5TiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbXMtaW1nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDYyMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSk7XFxyXFxuICAgICAgICB6LWluZGV4OiAyMDtcXHJcXG5cXHJcXG4gICAgICAgIC5yb29zZnlQIHtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1zLWltZ0JnIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogOTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLm5hcmljb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogNDcwcHg7XFxyXFxuICAgIGhlaWdodDogNjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTAyMzU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMC43O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXJpY29uLWhlYWRlciB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIklCTSBQbGV4IE1vbm9cXFwiLCBtb25vc3BhY2U7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIG1hcmdpbjogNDBweCAyNzdweCAwIDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDc2cHggMjBweCA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5yb29zZnlOIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1zLWltZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiA2MjNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NDNweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDElKTtcXHJcXG5cXHJcXG4gICAgICAgIC5yb29zZnlQIHtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuaXRlbVFyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDQ3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDY1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzM2E2ICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMC43O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtUXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSUJNIFBsZXggTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTc1cHggNXB4IDM3cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCA3NnB4IDEwcHggNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucm9vc2Z5TiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbXMtaW1nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDYyMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1JSk7XFxyXFxuICAgICAgICB6LWluZGV4OiAyMDtcXHJcXG5cXHJcXG4gICAgICAgIC5yb29zZnlQIHtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLml0ZW1zLWltZ0JnIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogOTBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuZm9vdGVySGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLy8gcGFkZGluZzogMTUwcHggMTIwcHggMTEwcHggMjUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1MHB4IDEyMHB4IDExMHB4IDE1MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLmZvb3RlckhlYWRlci1udW1iZXJzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMCA4MHB4IDAgODBweDtcXHJcXG5cXHJcXG4gICAgICAgIC5udW1iZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBNb25vO1xcclxcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubnVtYmVycy10ZXh0IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcXHJcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuZm9vdGVySGVhZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMjAwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDExMHB4IDEyMHB4IDE1MHB4IDEyMHB4O1xcclxcbiAgICAuYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTQwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggTW9ubztcXHJcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY29udGFjdCB7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmNmZmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9
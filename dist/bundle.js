/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #f8f4f4;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.container {\\n  width: 500px;\\n  font-family: 'Source Sans Pro', sans-serif;\\n  font-weight: 400;\\n  display: flex;\\n  flex-direction: column;\\n  background: #eeecec;\\n  border: 1px solid #928e8e;\\n  box-shadow: #999797 5px 5px 5px;\\n  border-radius: 4px;\\n}\\n\\nheader {\\n  background-color: white;\\n}\\n\\n.note {\\n  color: red;\\n  text-align: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.task-group {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  border: 1px solid #f8f4f4;\\n}\\n\\n.header-list {\\n  border-top: 2px solid #f8f4f4;\\n}\\n\\n.arrow-left {\\n  font-size: 10px;\\n}\\n\\n.optionBtn {\\n  width: 10%;\\n  text-align: end;\\n  cursor: move;\\n}\\n\\n#input-task {\\n  font-size: 17px;\\n  border: 0;\\n  outline: 0;\\n  width: 100%;\\n  padding: 10px;\\n}\\n\\n.task-lister {\\n  padding: 0;\\n  margin: 0;\\n  background-color: white;\\n}\\n\\n.task-lister li {\\n  list-style: none;\\n}\\n\\n.task-list {\\n  border-bottom: 2px solid #f8f4f4;\\n}\\n\\n.selected {\\n  background: rgb(214, 214, 150);\\n}\\n\\n.task-div {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.label {\\n  width: 90%;\\n  float: right;\\n  padding: 10px;\\n  outline: 0;\\n}\\n\\n.task-list-item {\\n  padding: 2px 15px 0 15px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.task-items-item {\\n  display: flex;\\n  padding: 2px 10px;\\n}\\n\\n.line-through {\\n  text-decoration: line-through;\\n}\\n\\n.clear {\\n  padding: 20px;\\n  align-self: center;\\n}\\n\\n#clear-btn {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n#clear-btn:hover {\\n  color: blue;\\n  text-decoration: underline;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_TaskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TaskClass.js */ \"./src/modules/TaskClass.js\");\n/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayTask.js */ \"./src/modules/displayTask.js\");\n/* harmony import */ var _modules_newTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newTask.js */ \"./src/modules/newTask.js\");\n/* harmony import */ var _modules_resetIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/resetIndex.js */ \"./src/modules/resetIndex.js\");\n/* eslint-disable linebreak-style */\n\n\n\n\n\n\n\nconst inputTask = document.querySelector('#input-task');\nconst taskListPlaceholder = document.querySelector('.task-lister');\nconst notifier = document.querySelector('.note');\nconst clearBtn = document.querySelector('#clear-btn');\n\n(0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n// Execute a function when the user presses a key on the keyboard\ninputTask.addEventListener('keypress', (event) => {\n  // If the user presses the \"Enter\" key on the keyboard\n  if (event.key === 'Enter') {\n    const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n    event.preventDefault();\n    if (inputTask.value === '') {\n      notifier.classList.remove('hidden');\n    } else {\n      const index = toDoListData.length + 1;\n      const toDoClass = new _modules_TaskClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputTask.value.trim(), false, index);\n      (0,_modules_newTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(toDoClass);\n      taskListPlaceholder.innerHTML = '';\n      (0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      inputTask.value = '';\n      notifier.classList.add('hidden');\n    }\n  }\n});\n\nclearBtn.addEventListener('click', () => {\n  const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');\n  const clearItems = toDoListData.filter((completeList) => completeList.completed === false);\n  window.localStorage.setItem('bookData', JSON.stringify(clearItems));\n  (0,_modules_resetIndex_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(clearItems);\n  taskListPlaceholder.innerHTML = '';\n  (0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/TaskClass.js":
/*!**********************************!*\
  !*** ./src/modules/TaskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskClass)\n/* harmony export */ });\nclass TaskClass {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/TaskClass.js?");

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _setItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setItems.js */ \"./src/modules/setItems.js\");\n/* harmony import */ var _resetIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetIndex.js */ \"./src/modules/resetIndex.js\");\n/* harmony import */ var _updateComplete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateComplete.js */ \"./src/modules/updateComplete.js\");\n/* eslint-disable no-restricted-syntax */\n\n\n\n\n\nfunction displayList() {\n  const tasklists = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData)();\n  for (let items = 0; items < tasklists.length; items += 1) {\n    const listPlaceholder = document.querySelector('.task-lister');\n    listPlaceholder.innerHTML += `\n                  <li class=\"task-items\">\n                    <div class=\"task-inner-box\"  id=\"${tasklists[items].index}\">\n                      <div class=\"task-items-item\">\n                        <div class=\"task-div line-through ${tasklists[items].index}\">\n                            <input class=\"checkbox ${tasklists[items].index}\" type=\"checkbox\"/>\n                            <div id=\"${tasklists[items].index}\" class=\"label\">${tasklists[items].description}</div>\n                          </div>\n                          <div class=\"optionBtn editBtn ${tasklists[items].index}\" id=\"${tasklists[items].index}\">\n                          <i class=\"opt bi bi-three-dots-vertical\"></i>\n                          </div>\n                          <div class=\"optionBtn deleteBtn removeBtn ${tasklists[items].index} hidden\" id=\"${tasklists[items].index}\">\n                          <i class=\"bi bi-trash-fill\"></i>\n                          </div>\n                      </div>\n                      </div>\n                    </li>\n                  `;\n  }\n  const editBtn = document.querySelectorAll('.editBtn');\n  const removeBtn = document.querySelectorAll('.removeBtn');\n  const taskIn = document.querySelectorAll('.task-inner-box');\n  const label = document.querySelectorAll('.label');\n  const taskListPlaceholder = document.querySelector('.task-lister');\n\n  const clearSelection = () => {\n    for (const boxClassList of [...Object(taskIn)]) {\n      if (boxClassList.classList.contains('selected')) {\n        boxClassList.classList.remove('selected');\n      }\n    }\n    for (const btn of [...Object(removeBtn)]) {\n      btn.classList.add('hidden');\n    }\n    for (const btn of [...Object(editBtn)]) {\n      btn.classList.remove('hidden');\n    }\n  };\n\n  editBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const indexEdit = parseInt(btn.id, 10) - 1;\n      btn.classList.add('hidden');\n      removeBtn[indexEdit].classList.remove('hidden');\n    });\n  });\n\n  const items = JSON.parse(window.localStorage.getItem('taskData'));\n  removeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const id = parseInt(btn.id, 10) - 1;\n      items.splice(id, 1);\n      (0,_resetIndex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(items);\n      taskListPlaceholder.innerHTML = '';\n      displayList();\n    });\n  });\n\n  taskIn.forEach((box) => {\n    box.addEventListener('click', () => {\n      clearSelection(taskIn);\n      box.classList.add('selected');\n      const id = parseInt(box.id, 10) - 1;\n      removeBtn[id].classList.remove('hidden');\n      editBtn[id].classList.add('hidden');\n    });\n  });\n\n  label.forEach((lbl) => {\n    lbl.addEventListener('click', () => {\n      lbl.contentEditable = 'true';\n    });\n    lbl.addEventListener('keypress', (event) => {\n      if (event.key === 'Enter') {\n        lbl.contentEditable = 'false';\n        const str = lbl.textContent;\n        let id = lbl.id - 1;\n        if (id < 0) { id = 0; }\n        _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData[id].description = str;\n        (0,_setItems_js__WEBPACK_IMPORTED_MODULE_1__.setData)(_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData);\n        taskListPlaceholder.innerHTML = '';\n        displayList();\n      }\n    });\n  });\n\n  function updateCompletedData(numberIndex, completedMark) {\n    tasklists[numberIndex].completed = completedMark;\n    (0,_setItems_js__WEBPACK_IMPORTED_MODULE_1__.setData)(tasklists);\n    (0,_updateComplete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n\n  const checkbox = document.querySelectorAll('.checkbox');\n  let indexCheckBox = 0;\n  while (indexCheckBox < checkbox.length) {\n    checkbox[indexCheckBox].addEventListener('change', (e) => {\n      if (e.target.checked) {\n        let number = parseInt(e.target.classList[1], 10) - 1;\n        if (number < 0) { number = 0; }\n        updateCompletedData(number, true);\n      } else {\n        let number = parseInt(e.target.classList[1], 10) - 1;\n        if (number < 0) { number = 0; }\n        updateCompletedData(number, false);\n      }\n    });\n    indexCheckBox += 1;\n  }\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/displayTask.js?");

/***/ }),

/***/ "./src/modules/newTask.js":
/*!********************************!*\
  !*** ./src/modules/newTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _setItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setItems.js */ \"./src/modules/setItems.js\");\n\n\n\nfunction addTask(taskinput) {\n  const taskList = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData)();\n  taskList.push(taskinput);\n  (0,_setItems_js__WEBPACK_IMPORTED_MODULE_1__.setData)(taskList);\n}\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/newTask.js?");

/***/ }),

/***/ "./src/modules/resetIndex.js":
/*!***********************************!*\
  !*** ./src/modules/resetIndex.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resetIndex)\n/* harmony export */ });\n/* harmony import */ var _setItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setItems.js */ \"./src/modules/setItems.js\");\n\n\nfunction resetIndex(index) {\n  let sum = 0;\n  // used the comment below to pass the for element while linter check\n  // eslint-disable-next-line no-restricted-syntax\n  for (const indexData of index) {\n    sum += 1;\n    indexData.index = sum;\n  }\n  (0,_setItems_js__WEBPACK_IMPORTED_MODULE_0__.setData)(index);\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/resetIndex.js?");

/***/ }),

/***/ "./src/modules/setItems.js":
/*!*********************************!*\
  !*** ./src/modules/setItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setData\": () => (/* binding */ setData)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst setData = (input) => window.localStorage.setItem('taskData', JSON.stringify(input));\n\n//# sourceURL=webpack://webpack-setup/./src/modules/setItems.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoListData\": () => (/* binding */ toDoListData)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst toDoListData = () => JSON.parse(window.localStorage.getItem('taskData') || '[]');\n\n//# sourceURL=webpack://webpack-setup/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/updateComplete.js":
/*!***************************************!*\
  !*** ./src/modules/updateComplete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateCompletedDisplay)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\nfunction updateCompletedDisplay() {\n  const checkbox = document.querySelectorAll('.checkbox');\n  const label = document.querySelectorAll('.label');\n  const listItemObject = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDoListData)();\n  // eslint-disable-next-line no-restricted-syntax\n  for (const element of listItemObject) {\n    if (element.completed === true) {\n      const id = parseInt(element.index, 10) - 1;\n      label[id].classList.add('line-through');\n      checkbox[id].setAttribute('checked', 'checked');\n    } else {\n      const id = parseInt(element.index, 10) - 1;\n      label[id].classList.remove('line-through');\n      checkbox[id].setAttribute('unchecked', 'unchecked');\n    }\n  }\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/updateComplete.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
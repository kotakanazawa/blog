/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./libs/client.js":
/*!************************!*\
  !*** ./libs/client.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": function() { return /* binding */ client; }\n/* harmony export */ });\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n  serviceDomain: 'gatsby-microcms-sample',\n  apiKey: process.env.API_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1oZWxsby13b3JsZC8uL2xpYnMvY2xpZW50LmpzPzQ5YjIiXSwibmFtZXMiOlsiY2xpZW50IiwiY3JlYXRlQ2xpZW50Iiwic2VydmljZURvbWFpbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBR0MsNkRBQVksQ0FBQztBQUNqQ0MsZUFBYSxFQUFFLHdCQURrQjtBQUVqQ0MsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFGYSxDQUFELENBQTNCIiwiZmlsZSI6Ii4vbGlicy9jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdtaWNyb2Ntcy1qcy1zZGsnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgc2VydmljZURvbWFpbjogJ2dhdHNieS1taWNyb2Ntcy1zYW1wbGUnLFxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkFQSV9LRVksXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/client.js\n");

/***/ }),

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogId; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/client */ \"./libs/client.js\");\n\nvar _jsxFileName = \"/Users/kotakanazawa/my-apps/blog/pages/[id].js\";\n\nfunction BlogId({\n  blog\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: blog.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [blog.createdAt, \"\\u306B\\u516C\\u958B \", blog.updatedAt, \"\\u306B\\u66F4\\u65B0\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: `${blog.body}`\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticPaths = async () => {\n  const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n    endpoint: \"blog\"\n  });\n  const paths = data.contents.map(content => `/${content.id}`);\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n    endpoint: \"blog\",\n    contentId: id\n  });\n  return {\n    props: {\n      blog: data\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYXRzYnktc3RhcnRlci1oZWxsby13b3JsZC8uL3BhZ2VzL1tpZF0uanM/ZDgwYiJdLCJuYW1lcyI6WyJCbG9nSWQiLCJibG9nIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJfX2h0bWwiLCJib2R5IiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwiY2xpZW50IiwiZW5kcG9pbnQiLCJwYXRocyIsImNvbnRlbnRzIiwibWFwIiwiY29udGVudCIsImlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJjb250ZW50SWQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUM7QUFBRixDQUFoQixFQUEwQjtBQUN2QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGlCQUFJRCxJQUFJLENBQUNFLFNBQVQseUJBQXdCRixJQUFJLENBQUNHLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFDRSw2QkFBdUIsRUFBRTtBQUN2QkMsY0FBTSxFQUFHLEdBQUVKLElBQUksQ0FBQ0ssSUFBSztBQURFO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0FBRU0sTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLG9EQUFBLENBQVc7QUFBRUMsWUFBUSxFQUFFO0FBQVosR0FBWCxDQUFuQjtBQUNBLFFBQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxRQUFMLENBQWNDLEdBQWQsQ0FBbUJDLE9BQUQsSUFBYyxJQUFHQSxPQUFPLENBQUNDLEVBQUcsRUFBOUMsQ0FBZDtBQUNBLFNBQU87QUFDTEosU0FESztBQUVMSyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FQTTtBQVNBLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQy9DLFFBQU1ILEVBQUUsR0FBR0csT0FBTyxDQUFDQyxNQUFSLENBQWVKLEVBQTFCO0FBQ0EsUUFBTVAsSUFBSSxHQUFHLE1BQU1DLG9EQUFBLENBQVc7QUFBRUMsWUFBUSxFQUFFLE1BQVo7QUFBb0JVLGFBQVMsRUFBRUw7QUFBL0IsR0FBWCxDQUFuQjtBQUVBLFNBQU87QUFDTE0sU0FBSyxFQUFFO0FBQ0xwQixVQUFJLEVBQUVPO0FBREQ7QUFERixHQUFQO0FBS0QsQ0FUTSIsImZpbGUiOiIuL3BhZ2VzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGlicy9jbGllbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSWQoeyBibG9nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxuICAgICAgPHA+e2Jsb2cuY3JlYXRlZEF0feOBq+WFrOmWiyB7YmxvZy51cGRhdGVkQXR944Gr5pu05pawPC9wPlxuICAgICAgPGRpdlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7YmxvZy5ib2R5fWAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KHsgZW5kcG9pbnQ6IFwiYmxvZ1wiIH0pXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5jb250ZW50cy5tYXAoKGNvbnRlbnQpID0+IGAvJHtjb250ZW50LmlkfWApXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZFxuICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiBcImJsb2dcIiwgY29udGVudElkOiBpZCB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2c6IGRhdGEsXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "microcms-js-sdk":
/*!**********************************!*\
  !*** external "microcms-js-sdk" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("microcms-js-sdk");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();
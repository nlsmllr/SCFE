"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-leaflet";
exports.ids = ["vendor-chunks/react-leaflet"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-leaflet/lib/TileLayer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/lib/TileLayer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TileLayer: () => (/* binding */ TileLayer)\n/* harmony export */ });\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/generic.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/pane.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/element.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/grid-layer.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"(ssr)/./node_modules/leaflet/dist/leaflet-src.js\");\n\n\nconst TileLayer = (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__.createTileLayerComponent)(function createTileLayer({ url , ...options }, context) {\n    const layer = new leaflet__WEBPACK_IMPORTED_MODULE_0__.TileLayer(url, (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__.withPane)(options, context));\n    return (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__.createElementObject)(layer, context);\n}, function updateTileLayer(layer, props, prevProps) {\n    (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_4__.updateGridLayer)(layer, props, prevProps);\n    const { url  } = props;\n    if (url != null && url !== prevProps.url) {\n        layer.setUrl(url);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9saWIvVGlsZUxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErRztBQUN2RDtBQUNqRCxrQkFBa0IsNkVBQXdCLDRCQUE0QixrQkFBa0I7QUFDL0Ysc0JBQXNCLDhDQUFnQixNQUFNLDZEQUFRO0FBQ3BELFdBQVcsd0VBQW1CO0FBQzlCLENBQUM7QUFDRCxJQUFJLG9FQUFlO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9pZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9UaWxlTGF5ZXIuanM/NGU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50T2JqZWN0LCBjcmVhdGVUaWxlTGF5ZXJDb21wb25lbnQsIHVwZGF0ZUdyaWRMYXllciwgd2l0aFBhbmUgfSBmcm9tICdAcmVhY3QtbGVhZmxldC9jb3JlJztcbmltcG9ydCB7IFRpbGVMYXllciBhcyBMZWFmbGV0VGlsZUxheWVyIH0gZnJvbSAnbGVhZmxldCc7XG5leHBvcnQgY29uc3QgVGlsZUxheWVyID0gY3JlYXRlVGlsZUxheWVyQ29tcG9uZW50KGZ1bmN0aW9uIGNyZWF0ZVRpbGVMYXllcih7IHVybCAsIC4uLm9wdGlvbnMgfSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IExlYWZsZXRUaWxlTGF5ZXIodXJsLCB3aXRoUGFuZShvcHRpb25zLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnRPYmplY3QobGF5ZXIsIGNvbnRleHQpO1xufSwgZnVuY3Rpb24gdXBkYXRlVGlsZUxheWVyKGxheWVyLCBwcm9wcywgcHJldlByb3BzKSB7XG4gICAgdXBkYXRlR3JpZExheWVyKGxheWVyLCBwcm9wcywgcHJldlByb3BzKTtcbiAgICBjb25zdCB7IHVybCAgfSA9IHByb3BzO1xuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmwgIT09IHByZXZQcm9wcy51cmwpIHtcbiAgICAgICAgbGF5ZXIuc2V0VXJsKHVybCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-leaflet/lib/TileLayer.js\n");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"82d571d359fb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjgyZDU3MWQzNTlmYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Void; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Components_Molecules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Molecules/Header */ \"(app-pages-browser)/./src/app/Components/Molecules/Header.tsx\");\n/* harmony import */ var _Components_Atoms_SingleLineChrt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Atoms/SingleLineChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/SingleLineChrt.tsx\");\n/* harmony import */ var _Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Atoms/MultiLineChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/MultiLineChrt.tsx\");\n/* harmony import */ var _Components_Atoms_RadarChrt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Atoms/RadarChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/RadarChrt.tsx\");\n/* harmony import */ var _Components_Atoms_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Atoms/Map */ \"(app-pages-browser)/./src/app/Components/Atoms/Map.tsx\");\n/* harmony import */ var _Components_Atoms_BarChrt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Atoms/BarChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/BarChrt.tsx\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var _Components_Atoms_PieChrt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Atoms/PieChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/PieChrt.tsx\");\n/* harmony import */ var _Components_Molecules_Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Molecules/Sidebar */ \"(app-pages-browser)/./src/app/Components/Molecules/Sidebar.tsx\");\n/* harmony import */ var _Components_Molecules_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/Molecules/Footer */ \"(app-pages-browser)/./src/app/Components/Molecules/Footer.tsx\");\n/* harmony import */ var _Constants_categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../Constants/categories */ \"(app-pages-browser)/./src/Constants/categories.ts\");\n// src/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Void() {\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setShowText(false);\n        }, 2500); // Duration must match the CSS animation duration\n        return ()=>clearTimeout(timer);\n    }, []);\n    const handleCategorySelect = (category)=>{\n        setSelectedCategory(category);\n    };\n    const charts = [\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_PieChrt__WEBPACK_IMPORTED_MODULE_10__.PieChrt, {\n                title: \"Air\",\n                subtitle: \"(%)\",\n                category: [\n                    _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"Air Pollution\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 3\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_SingleLineChrt__WEBPACK_IMPORTED_MODULE_4__.SingleLineChrt, {\n                title: \"Humidity\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_RadarChrt__WEBPACK_IMPORTED_MODULE_6__.RadarChrt, {\n                title: \"Radar\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 1\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_BarChrt__WEBPACK_IMPORTED_MODULE_8__.BarChrt, {\n                title: \"Temperature\",\n                subtitle: \"(\\xb0C)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_Map__WEBPACK_IMPORTED_MODULE_7__.Map, {}, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 5\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"CO2 Concentration\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Parking\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"Wind Speed\",\n                subtitle: \"(KM/H)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Stuff\n            ],\n            colSpan: 3\n        }\n    ];\n    const filteredCharts = selectedCategory && selectedCategory !== \"All\" ? charts.filter((chart)=>chart.categories.includes(selectedCategory)) : charts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        className: \"html\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: \"min-h-screen\",\n            children: [\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fadeInTextBG\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fadeInText\",\n                        children: \"Smart Cities\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Header__WEBPACK_IMPORTED_MODULE_3__.TopBar, {}, void 0, false, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Sidebar__WEBPACK_IMPORTED_MODULE_11__.Sidebar, {\n                            categories: [\n                                \"All\",\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather,\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Parking,\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Stuff\n                            ],\n                            onCategorySelect: handleCategorySelect\n                        }, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"graphContainer flex justify-center\",\n                            children: filteredCharts.length > 0 ? filteredCharts.map((chart, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:col-span-\".concat(chart.colSpan),\n                                    children: chart.component\n                                }, index, false, {\n                                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Select a category to view the charts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Footer__WEBPACK_IMPORTED_MODULE_12__.Footer, {}, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Void, \"B4W4zXBJ+/8wMrQCKlZhCj40P20=\");\n_c = Void;\nvar _c;\n$RefreshReg$(_c, \"Void\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2UsT0FBTztnQ0FBRWYsOERBQVVBLENBQUNrQixPQUFPO2dDQUFFbEIsOERBQVVBLENBQUNtQixLQUFLOzZCQUFDOzRCQUFFVSxrQkFBa0JwQjs7Ozs7O3NDQUMxRyw4REFBQ3FCOzRCQUFRTCxXQUFVO3NDQUNoQkwsZUFBZVcsTUFBTSxHQUFHLElBQ3ZCWCxlQUFlWSxHQUFHLENBQUMsQ0FBQ1YsT0FBT1csc0JBQ3pCLDhEQUFDTjtvQ0FBZ0JGLFdBQVcsZUFBNkIsT0FBZEgsTUFBTUwsT0FBTzs4Q0FDckRLLE1BQU1WLFNBQVM7bUNBRFJxQjs7OzswREFLWiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7O3NDQUdQLDhEQUFDbkMsaUVBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBM0R3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlLnRzeFxuXG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tICcuL0NvbXBvbmVudHMvTW9sZWN1bGVzL0hlYWRlcic7XG5pbXBvcnQgeyBTaW5nbGVMaW5lQ2hydCB9IGZyb20gJy4vQ29tcG9uZW50cy9BdG9tcy9TaW5nbGVMaW5lQ2hydCc7XG5pbXBvcnQgeyBNdWx0aUxpbmVDaHJ0IH0gZnJvbSAnLi9Db21wb25lbnRzL0F0b21zL011bHRpTGluZUNocnQnO1xuaW1wb3J0IHsgUmFkYXJDaHJ0IH0gZnJvbSAnLi9Db21wb25lbnRzL0F0b21zL1JhZGFyQ2hydCc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuL0NvbXBvbmVudHMvQXRvbXMvTWFwJztcbmltcG9ydCB7IEJhckNocnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQXRvbXMvQmFyQ2hydCc7XG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5pbXBvcnQgeyBQaWVDaHJ0IH0gZnJvbSAnLi9Db21wb25lbnRzL0F0b21zL1BpZUNocnQnO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4vQ29tcG9uZW50cy9Nb2xlY3VsZXMvU2lkZWJhcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL0NvbXBvbmVudHMvTW9sZWN1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSAnLi8uLi9Db25zdGFudHMvY2F0ZWdvcmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvaWQoKSB7XG4gIGNvbnN0IFtzaG93VGV4dCwgc2V0U2hvd1RleHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlPENhdGVnb3JpZXMgfCAnQWxsJyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dUZXh0KGZhbHNlKTtcbiAgICB9LCAyNTAwKTsgLy8gRHVyYXRpb24gbXVzdCBtYXRjaCB0aGUgQ1NTIGFuaW1hdGlvbiBkdXJhdGlvblxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeVNlbGVjdCA9IChjYXRlZ29yeTogQ2F0ZWdvcmllcyB8ICdBbGwnKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgY2hhcnRzID0gW1xuICAgIHsgY29tcG9uZW50OiA8UGllQ2hydCB0aXRsZT0nQWlyJyBzdWJ0aXRsZT0nKCUpJyBjYXRlZ29yeT17W0NhdGVnb3JpZXMuV2VhdGhlcl19IC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5XZWF0aGVyXSwgY29sU3BhbjogMiB9LFxuICAgIHsgY29tcG9uZW50OiA8TXVsdGlMaW5lQ2hydCB0aXRsZT0nQWlyIFBvbGx1dGlvbicgc3VidGl0bGU9JyglKScgLz4sIGNhdGVnb3JpZXM6IFtDYXRlZ29yaWVzLldlYXRoZXJdLCBjb2xTcGFuOiAzIH0sXG4gICAgeyBjb21wb25lbnQ6IDxTaW5nbGVMaW5lQ2hydCB0aXRsZT0nSHVtaWRpdHknIHN1YnRpdGxlPScoJSknIC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5XZWF0aGVyXSwgY29sU3BhbjogMiB9LFxuICAgIHsgY29tcG9uZW50OiA8UmFkYXJDaHJ0IHRpdGxlPSdSYWRhcicgc3VidGl0bGU9JyglKScgLz4sIGNhdGVnb3JpZXM6IFtDYXRlZ29yaWVzLldlYXRoZXJdLCBjb2xTcGFuOiAxIH0sXG4gICAgeyBjb21wb25lbnQ6IDxCYXJDaHJ0IHRpdGxlPSdUZW1wZXJhdHVyZScgc3VidGl0bGU9JyjCsEMpJyAvPiwgY2F0ZWdvcmllczogW0NhdGVnb3JpZXMuV2VhdGhlcl0sIGNvbFNwYW46IDIgfSxcbiAgICB7IGNvbXBvbmVudDogPE1hcCAvPiwgY2F0ZWdvcmllczogW0NhdGVnb3JpZXMuV2VhdGhlcl0sIGNvbFNwYW46IDUgfSxcbiAgICB7IGNvbXBvbmVudDogPE11bHRpTGluZUNocnQgdGl0bGU9J0NPMiBDb25jZW50cmF0aW9uJyBzdWJ0aXRsZT0nKCUpJyAvPiwgY2F0ZWdvcmllczogW0NhdGVnb3JpZXMuUGFya2luZ10sIGNvbFNwYW46IDIgfSxcbiAgICB7IGNvbXBvbmVudDogPE11bHRpTGluZUNocnQgdGl0bGU9J1dpbmQgU3BlZWQnIHN1YnRpdGxlPScoS00vSCknIC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5TdHVmZl0sIGNvbFNwYW46IDMgfSxcbiAgXTtcblxuICBjb25zdCBmaWx0ZXJlZENoYXJ0cyA9IHNlbGVjdGVkQ2F0ZWdvcnkgJiYgc2VsZWN0ZWRDYXRlZ29yeSAhPT0gJ0FsbCdcbiAgICA/IGNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gY2hhcnQuY2F0ZWdvcmllcy5pbmNsdWRlcyhzZWxlY3RlZENhdGVnb3J5KSlcbiAgICA6IGNoYXJ0cztcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGNsYXNzTmFtZT0naHRtbCc+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgICAge3Nob3dUZXh0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGVJblRleHRCR1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZhZGVJblRleHRcIj5TbWFydCBDaXRpZXM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8VG9wQmFyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiPlxuICAgICAgICAgIDxTaWRlYmFyIGNhdGVnb3JpZXM9e1snQWxsJywgQ2F0ZWdvcmllcy5XZWF0aGVyLCBDYXRlZ29yaWVzLlBhcmtpbmcsIENhdGVnb3JpZXMuU3R1ZmZdfSBvbkNhdGVnb3J5U2VsZWN0PXtoYW5kbGVDYXRlZ29yeVNlbGVjdH0gLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmFwaENvbnRhaW5lciBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDaGFydHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgZmlsdGVyZWRDaGFydHMubWFwKChjaGFydCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17YG1kOmNvbC1zcGFuLSR7Y2hhcnQuY29sU3Bhbn1gfT5cbiAgICAgICAgICAgICAgICAgIHtjaGFydC5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5TZWxlY3QgYSBjYXRlZ29yeSB0byB2aWV3IHRoZSBjaGFydHM8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG9wQmFyIiwiU2luZ2xlTGluZUNocnQiLCJNdWx0aUxpbmVDaHJ0IiwiUmFkYXJDaHJ0IiwiTWFwIiwiQmFyQ2hydCIsIlBpZUNocnQiLCJTaWRlYmFyIiwiRm9vdGVyIiwiQ2F0ZWdvcmllcyIsIlZvaWQiLCJzaG93VGV4dCIsInNldFNob3dUZXh0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVDYXRlZ29yeVNlbGVjdCIsImNhdGVnb3J5IiwiY2hhcnRzIiwiY29tcG9uZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsIldlYXRoZXIiLCJjYXRlZ29yaWVzIiwiY29sU3BhbiIsIlBhcmtpbmciLCJTdHVmZiIsImZpbHRlcmVkQ2hhcnRzIiwiZmlsdGVyIiwiY2hhcnQiLCJpbmNsdWRlcyIsImh0bWwiLCJjbGFzc05hbWUiLCJib2R5IiwiZGl2IiwiaDEiLCJvbkNhdGVnb3J5U2VsZWN0Iiwic2VjdGlvbiIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
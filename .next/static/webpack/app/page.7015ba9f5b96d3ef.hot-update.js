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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cf44f8dd4448\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNmNDRmOGRkNDQ0OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Void; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Components_Molecules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Molecules/Header */ \"(app-pages-browser)/./src/app/Components/Molecules/Header.tsx\");\n/* harmony import */ var _Components_Atoms_SingleLineChrt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Atoms/SingleLineChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/SingleLineChrt.tsx\");\n/* harmony import */ var _Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Atoms/MultiLineChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/MultiLineChrt.tsx\");\n/* harmony import */ var _Components_Atoms_RadarChrt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Atoms/RadarChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/RadarChrt.tsx\");\n/* harmony import */ var _Components_Atoms_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Atoms/Map */ \"(app-pages-browser)/./src/app/Components/Atoms/Map.tsx\");\n/* harmony import */ var _Components_Atoms_BarChrt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Atoms/BarChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/BarChrt.tsx\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var _Components_Atoms_PieChrt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Atoms/PieChrt */ \"(app-pages-browser)/./src/app/Components/Atoms/PieChrt.tsx\");\n/* harmony import */ var _Components_Molecules_Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Molecules/Sidebar */ \"(app-pages-browser)/./src/app/Components/Molecules/Sidebar.tsx\");\n/* harmony import */ var _Components_Molecules_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/Molecules/Footer */ \"(app-pages-browser)/./src/app/Components/Molecules/Footer.tsx\");\n/* harmony import */ var _Constants_categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../Constants/categories */ \"(app-pages-browser)/./src/Constants/categories.ts\");\n// src/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Void() {\n    _s();\n    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setShowText(false);\n        }, 2500); // Duration must match the CSS animation duration\n        return ()=>clearTimeout(timer);\n    }, []);\n    const handleCategorySelect = (category)=>{\n        setSelectedCategory(category);\n    };\n    const charts = [\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_PieChrt__WEBPACK_IMPORTED_MODULE_10__.PieChrt, {\n                title: \"Air\",\n                subtitle: \"(%)\",\n                category: [\n                    _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"Air Pollution\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_SingleLineChrt__WEBPACK_IMPORTED_MODULE_4__.SingleLineChrt, {\n                title: \"Humidity\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_RadarChrt__WEBPACK_IMPORTED_MODULE_6__.RadarChrt, {\n                title: \"Radar\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 1\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_BarChrt__WEBPACK_IMPORTED_MODULE_8__.BarChrt, {\n                title: \"Temperature\",\n                subtitle: \"(\\xb0C)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_Map__WEBPACK_IMPORTED_MODULE_7__.Map, {}, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Stuff\n            ],\n            colSpan: 3\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"CO2 Concentration\",\n                subtitle: \"(%)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Parking\n            ],\n            colSpan: 2\n        },\n        {\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Atoms_MultiLineChrt__WEBPACK_IMPORTED_MODULE_5__.MultiLineChrt, {\n                title: \"Wind Speed\",\n                subtitle: \"(KM/H)\"\n            }, void 0, false, {\n                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 18\n            }, this),\n            categories: [\n                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Stuff\n            ],\n            colSpan: 3\n        }\n    ];\n    const filteredCharts = selectedCategory && selectedCategory !== \"All\" ? charts.filter((chart)=>chart.categories.includes(selectedCategory)) : charts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        className: \"html\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: \"min-h-screen\",\n            children: [\n                showText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fadeInTextBG\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"fadeInText\",\n                        children: \"Smart Cities\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Header__WEBPACK_IMPORTED_MODULE_3__.TopBar, {}, void 0, false, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Sidebar__WEBPACK_IMPORTED_MODULE_11__.Sidebar, {\n                            categories: [\n                                \"All\",\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Weather,\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Parking,\n                                _Constants_categories__WEBPACK_IMPORTED_MODULE_13__.Categories.Stuff\n                            ],\n                            onCategorySelect: handleCategorySelect\n                        }, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"graphContainer flex justify-center\",\n                            children: filteredCharts.length > 0 ? filteredCharts.map((chart, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-\".concat(chart.colSpan),\n                                    children: chart.component\n                                }, index, false, {\n                                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Select a category to view the charts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Molecules_Footer__WEBPACK_IMPORTED_MODULE_12__.Footer, {}, void 0, false, {\n                            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nlsmllr/Documents/SCFE/src/app/page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Void, \"B4W4zXBJ+/8wMrQCKlZhCj40P20=\");\n_c = Void;\nvar _c;\n$RefreshReg$(_c, \"Void\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNlLE9BQU87Z0NBQUVmLDhEQUFVQSxDQUFDbUIsT0FBTztnQ0FBRW5CLDhEQUFVQSxDQUFDa0IsS0FBSzs2QkFBQzs0QkFBRVcsa0JBQWtCcEI7Ozs7OztzQ0FDMUcsOERBQUNxQjs0QkFBUUwsV0FBVTtzQ0FDaEJMLGVBQWVXLE1BQU0sR0FBRyxJQUN2QlgsZUFBZVksR0FBRyxDQUFDLENBQUNWLE9BQU9XLHNCQUN6Qiw4REFBQ047b0NBQWdCRixXQUFXLFlBQTBCLE9BQWRILE1BQU1MLE9BQU87OENBQ2xESyxNQUFNVixTQUFTO21DQURScUI7Ozs7MERBS1osOERBQUNDOzBDQUFFOzs7Ozs7Ozs7OztzQ0FHUCw4REFBQ25DLGlFQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQTNEd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZS50c3hcblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJztcblxuaW1wb3J0IHsgVG9wQmFyIH0gZnJvbSAnLi9Db21wb25lbnRzL01vbGVjdWxlcy9IZWFkZXInO1xuaW1wb3J0IHsgU2luZ2xlTGluZUNocnQgfSBmcm9tICcuL0NvbXBvbmVudHMvQXRvbXMvU2luZ2xlTGluZUNocnQnO1xuaW1wb3J0IHsgTXVsdGlMaW5lQ2hydCB9IGZyb20gJy4vQ29tcG9uZW50cy9BdG9tcy9NdWx0aUxpbmVDaHJ0JztcbmltcG9ydCB7IFJhZGFyQ2hydCB9IGZyb20gJy4vQ29tcG9uZW50cy9BdG9tcy9SYWRhckNocnQnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9Db21wb25lbnRzL0F0b21zL01hcCc7XG5pbXBvcnQgeyBCYXJDaHJ0IH0gZnJvbSAnLi9Db21wb25lbnRzL0F0b21zL0JhckNocnQnO1xuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0IHsgUGllQ2hydCB9IGZyb20gJy4vQ29tcG9uZW50cy9BdG9tcy9QaWVDaHJ0JztcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICcuL0NvbXBvbmVudHMvTW9sZWN1bGVzL1NpZGViYXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9Db21wb25lbnRzL01vbGVjdWxlcy9Gb290ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vLi4vQ29uc3RhbnRzL2NhdGVnb3JpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb2lkKCkge1xuICBjb25zdCBbc2hvd1RleHQsIHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxDYXRlZ29yaWVzIHwgJ0FsbCcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93VGV4dChmYWxzZSk7XG4gICAgfSwgMjUwMCk7IC8vIER1cmF0aW9uIG11c3QgbWF0Y2ggdGhlIENTUyBhbmltYXRpb24gZHVyYXRpb25cblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlTZWxlY3QgPSAoY2F0ZWdvcnk6IENhdGVnb3JpZXMgfCAnQWxsJykgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGNoYXJ0cyA9IFtcbiAgICB7IGNvbXBvbmVudDogPFBpZUNocnQgdGl0bGU9J0Fpcicgc3VidGl0bGU9JyglKScgY2F0ZWdvcnk9e1tDYXRlZ29yaWVzLldlYXRoZXJdfSAvPiwgY2F0ZWdvcmllczogW0NhdGVnb3JpZXMuV2VhdGhlcl0sIGNvbFNwYW46IDIgfSxcbiAgICB7IGNvbXBvbmVudDogPE11bHRpTGluZUNocnQgdGl0bGU9J0FpciBQb2xsdXRpb24nIHN1YnRpdGxlPScoJSknIC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5XZWF0aGVyXSwgY29sU3BhbjogMiB9LFxuICAgIHsgY29tcG9uZW50OiA8U2luZ2xlTGluZUNocnQgdGl0bGU9J0h1bWlkaXR5JyBzdWJ0aXRsZT0nKCUpJyAvPiwgY2F0ZWdvcmllczogW0NhdGVnb3JpZXMuV2VhdGhlcl0sIGNvbFNwYW46IDIgfSxcbiAgICB7IGNvbXBvbmVudDogPFJhZGFyQ2hydCB0aXRsZT0nUmFkYXInIHN1YnRpdGxlPScoJSknIC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5XZWF0aGVyXSwgY29sU3BhbjogMSB9LFxuICAgIHsgY29tcG9uZW50OiA8QmFyQ2hydCB0aXRsZT0nVGVtcGVyYXR1cmUnIHN1YnRpdGxlPScowrBDKScgLz4sIGNhdGVnb3JpZXM6IFtDYXRlZ29yaWVzLldlYXRoZXJdLCBjb2xTcGFuOiAyIH0sXG4gICAgeyBjb21wb25lbnQ6IDxNYXAgLz4sIGNhdGVnb3JpZXM6IFtDYXRlZ29yaWVzLlN0dWZmXSwgY29sU3BhbjogMyB9LFxuICAgIHsgY29tcG9uZW50OiA8TXVsdGlMaW5lQ2hydCB0aXRsZT0nQ08yIENvbmNlbnRyYXRpb24nIHN1YnRpdGxlPScoJSknIC8+LCBjYXRlZ29yaWVzOiBbQ2F0ZWdvcmllcy5QYXJraW5nXSwgY29sU3BhbjogMiB9LFxuICAgIHsgY29tcG9uZW50OiA8TXVsdGlMaW5lQ2hydCB0aXRsZT0nV2luZCBTcGVlZCcgc3VidGl0bGU9JyhLTS9IKScgLz4sIGNhdGVnb3JpZXM6IFtDYXRlZ29yaWVzLlN0dWZmXSwgY29sU3BhbjogMyB9LFxuICBdO1xuXG4gIGNvbnN0IGZpbHRlcmVkQ2hhcnRzID0gc2VsZWN0ZWRDYXRlZ29yeSAmJiBzZWxlY3RlZENhdGVnb3J5ICE9PSAnQWxsJ1xuICAgID8gY2hhcnRzLmZpbHRlcihjaGFydCA9PiBjaGFydC5jYXRlZ29yaWVzLmluY2x1ZGVzKHNlbGVjdGVkQ2F0ZWdvcnkpKVxuICAgIDogY2hhcnRzO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgY2xhc3NOYW1lPSdodG1sJz5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICB7c2hvd1RleHQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFkZUluVGV4dEJHXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmFkZUluVGV4dFwiPlNtYXJ0IENpdGllczwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxUb3BCYXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwXCI+XG4gICAgICAgICAgPFNpZGViYXIgY2F0ZWdvcmllcz17WydBbGwnLCBDYXRlZ29yaWVzLldlYXRoZXIsIENhdGVnb3JpZXMuUGFya2luZywgQ2F0ZWdvcmllcy5TdHVmZl19IG9uQ2F0ZWdvcnlTZWxlY3Q9e2hhbmRsZUNhdGVnb3J5U2VsZWN0fSAvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyYXBoQ29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZENoYXJ0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBmaWx0ZXJlZENoYXJ0cy5tYXAoKGNoYXJ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgY29sLXNwYW4tJHtjaGFydC5jb2xTcGFufWB9PlxuICAgICAgICAgICAgICAgICAge2NoYXJ0LmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBhIGNhdGVnb3J5IHRvIHZpZXcgdGhlIGNoYXJ0czwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb3BCYXIiLCJTaW5nbGVMaW5lQ2hydCIsIk11bHRpTGluZUNocnQiLCJSYWRhckNocnQiLCJNYXAiLCJCYXJDaHJ0IiwiUGllQ2hydCIsIlNpZGViYXIiLCJGb290ZXIiLCJDYXRlZ29yaWVzIiwiVm9pZCIsInNob3dUZXh0Iiwic2V0U2hvd1RleHQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUNhdGVnb3J5U2VsZWN0IiwiY2F0ZWdvcnkiLCJjaGFydHMiLCJjb21wb25lbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiV2VhdGhlciIsImNhdGVnb3JpZXMiLCJjb2xTcGFuIiwiU3R1ZmYiLCJQYXJraW5nIiwiZmlsdGVyZWRDaGFydHMiLCJmaWx0ZXIiLCJjaGFydCIsImluY2x1ZGVzIiwiaHRtbCIsImNsYXNzTmFtZSIsImJvZHkiLCJkaXYiLCJoMSIsIm9uQ2F0ZWdvcnlTZWxlY3QiLCJzZWN0aW9uIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./src/app/search/page.js":
/*!********************************!*\
  !*** ./src/app/search/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_HeaderFilterSearchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeaderFilterSearchPage */ \"(app-pages-browser)/./src/components/HeaderFilterSearchPage.js\");\n/* harmony import */ var _shared_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/Input/Input */ \"(app-pages-browser)/./src/shared/Input/Input.js\");\n/* harmony import */ var _shared_Button_ButtonCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/Button/ButtonCircle */ \"(app-pages-browser)/./src/shared/Button/ButtonCircle.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProductCard */ \"(app-pages-browser)/./src/components/ProductCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PageSearch = ()=>{\n    _s();\n    const [productData, setProductData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nextUrl, setNextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Track next page URL\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Prevent duplicate calls\n    // Fetch products from API\n    const getProduct = async function() {\n        let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"https://api.velonna.co/ecom/product/list/?limit=12\";\n        if (isFetching || loading) return; // Prevent multiple fetches\n        setIsFetching(true);\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(url);\n            setProductData((prevData)=>{\n                // Deduplicate products by ID\n                const newProducts = res.data.results.filter((newItem)=>!prevData.some((prevItem)=>prevItem.id === newItem.id));\n                return [\n                    ...prevData,\n                    ...newProducts\n                ];\n            });\n            setNextUrl(res.data.next); // Update next URL\n        } catch (error) {\n            console.error(\"Error fetching products:\", error);\n        } finally{\n            setIsFetching(false);\n            setLoading(false);\n        }\n    };\n    // Debounced scroll handler\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (isFetching || !nextUrl) return;\n        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;\n        if (scrollHeight - scrollTop <= clientHeight + 100) {\n            getProduct(nextUrl);\n        }\n    }, [\n        nextUrl,\n        isFetching\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (productData.length === 0) {\n            getProduct();\n        }\n    }, [\n        produ\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        handleScroll\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nc-PageSearch\",\n        \"data-nc-id\": \"PageSearch\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 \"\n            }, void 0, false, {\n                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"relative w-full \",\n                        method: \"post\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"search-input\",\n                            className: \"text-neutral-500 dark:text-neutral-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Input_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"shadow-lg border-0 dark:border\",\n                                    id: \"search-input\",\n                                    type: \"search\",\n                                    placeholder: \"Type your keywords\",\n                                    sizeClass: \"pl-14 py-5 pr-5 md:pl-16\",\n                                    rounded: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Button_ButtonCircle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"absolute right-2.5 top-1/2 transform -translate-y-1/2\",\n                                    size: \" w-11 h-11\",\n                                    type: \"submit\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"las la-arrow-right text-xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"h-5 w-5\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"1.5\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M22 22L20 20\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"1.5\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderFilterSearchPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10\",\n                            children: productData.length !== 0 ? productData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    data: item\n                                }, item.id || index, false, {\n                                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 19\n                                }, undefined)) : \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading more products...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                            lineNumber: 128,\n                            columnNumber: 23\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/app/search/page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PageSearch, \"sN1pva/zdffzTKMsnL29r8IwhFs=\");\n_c = PageSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageSearch);\nvar _c;\n$RefreshReg$(_c, \"PageSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFZ0U7QUFDdEM7QUFDK0M7QUFDaEM7QUFDZTtBQUNMO0FBRW5ELE1BQU1TLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxPQUFPLHNCQUFzQjtJQUNwRSxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDLFFBQVEsMEJBQTBCO0lBRS9FLDBCQUEwQjtJQUMxQixNQUFNZ0IsYUFBYTtZQUFPQyx1RUFBTTtRQUM5QixJQUFJSCxjQUFjRixTQUFTLFFBQVEsMkJBQTJCO1FBQzlERyxjQUFjO1FBQ2RGLFdBQVc7UUFFWCxJQUFJO1lBQ0YsTUFBTUssTUFBTSxNQUFNaEIsNkNBQUtBLENBQUNpQixHQUFHLENBQUNGO1lBQzVCUixlQUFlLENBQUNXO2dCQUNkLDZCQUE2QjtnQkFDN0IsTUFBTUMsY0FBY0gsSUFBSUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FDekMsQ0FBQ0MsVUFBWSxDQUFDTCxTQUFTTSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsRUFBRSxLQUFLSCxRQUFRRyxFQUFFO2dCQUV0RSxPQUFPO3VCQUFJUjt1QkFBYUM7aUJBQVk7WUFDdEM7WUFDQVYsV0FBV08sSUFBSUksSUFBSSxDQUFDTyxJQUFJLEdBQUcsa0JBQWtCO1FBQy9DLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxTQUFVO1lBQ1JmLGNBQWM7WUFDZEYsV0FBVztRQUNiO0lBQ0Y7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTW1CLGVBQWUvQixrREFBV0EsQ0FBQztRQUMvQixJQUFJYSxjQUFjLENBQUNKLFNBQVM7UUFFNUIsTUFBTSxFQUFFdUIsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRSxHQUFHQyxTQUFTQyxlQUFlO1FBQzFFLElBQUlGLGVBQWVGLGFBQWFDLGVBQWUsS0FBSztZQUNsRGxCLFdBQVdOO1FBQ2I7SUFDRixHQUFHO1FBQUNBO1FBQVNJO0tBQVc7SUFFeEJmLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsWUFBWThCLE1BQU0sS0FBSyxHQUFHO1lBQzVCdEI7UUFDRjtJQUNGLEdBQUc7UUFBQ3VCO0tBQU07SUFFVnhDLGdEQUFTQSxDQUFDO1FBQ1J5QyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVVDtRQUNsQyxPQUFPLElBQU1RLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVWO0lBQ3BELEdBQUc7UUFBQ0E7S0FBYztJQUVsQixxQkFDRSw4REFBQ1c7UUFBSUMsV0FBWTtRQUFnQkMsY0FBVzs7MEJBQzFDLDhEQUFDRjtnQkFDQ0MsV0FBWTs7Ozs7OzBCQUVkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQU9GLFdBQVU7OEJBQ2hCLDRFQUFDRzt3QkFBS0gsV0FBVTt3QkFBbUJJLFFBQU87a0NBQ3hDLDRFQUFDQzs0QkFDQ0MsU0FBUTs0QkFDUk4sV0FBVTs7OENBRVYsOERBQUN4QywyREFBS0E7b0NBQ0p3QyxXQUFVO29DQUNWaEIsSUFBRztvQ0FDSHVCLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLFdBQVU7b0NBQ1ZDLFNBQVE7Ozs7Ozs4Q0FFViw4REFBQ2pELG1FQUFZQTtvQ0FDWHVDLFdBQVU7b0NBQ1ZXLE1BQUs7b0NBQ0xKLE1BQUs7OENBRUwsNEVBQUNLO3dDQUFFWixXQUFVOzs7Ozs7Ozs7Ozs4Q0FFZiw4REFBQ2E7b0NBQUtiLFdBQVU7OENBQ2QsNEVBQUNjO3dDQUNDZCxXQUFVO3dDQUNWZSxTQUFRO3dDQUNSQyxNQUFLO3dDQUNMQyxPQUFNOzswREFFTiw4REFBQ0M7Z0RBQ0NDLEdBQUU7Z0RBQ0ZDLFFBQU87Z0RBQ1BDLGFBQVk7Z0RBQ1pDLGVBQWM7Z0RBQ2RDLGdCQUFlOzs7Ozs7MERBRWpCLDhEQUFDTDtnREFDQ0MsR0FBRTtnREFDRkMsUUFBTztnREFDUEMsYUFBWTtnREFDWkMsZUFBYztnREFDZEMsZ0JBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVM3Qiw4REFBQ3hCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDd0I7O3NDQUNDLDhEQUFDakUsMEVBQXNCQTs7Ozs7c0NBRXZCLDhEQUFDd0M7NEJBQUlDLFdBQVU7c0NBQ1pwQyxZQUFZOEIsTUFBTSxLQUFLLElBQ3BCOUIsWUFBWTZELEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDckIsOERBQUNqRSwrREFBV0E7b0NBQUNnQixNQUFNZ0Q7bUNBQVdBLEtBQUsxQyxFQUFFLElBQUkyQzs7OztpREFFM0M7Ozs7Ozt3QkFHTDNELHlCQUFXLDhEQUFDNEQ7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBM0hNakU7S0FBQUE7QUE2SE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcz82YWI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXJGaWx0ZXJTZWFyY2hQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyRmlsdGVyU2VhcmNoUGFnZVwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAL3NoYXJlZC9JbnB1dC9JbnB1dFwiO1xuaW1wb3J0IEJ1dHRvbkNpcmNsZSBmcm9tIFwiQC9zaGFyZWQvQnV0dG9uL0J1dHRvbkNpcmNsZVwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcblxuY29uc3QgUGFnZVNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXh0VXJsLCBzZXROZXh0VXJsXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBUcmFjayBuZXh0IHBhZ2UgVVJMXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBQcmV2ZW50IGR1cGxpY2F0ZSBjYWxsc1xuXG4gIC8vIEZldGNoIHByb2R1Y3RzIGZyb20gQVBJXG4gIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAodXJsID0gXCJodHRwczovL2FwaS52ZWxvbm5hLmNvL2Vjb20vcHJvZHVjdC9saXN0Lz9saW1pdD0xMlwiKSA9PiB7XG4gICAgaWYgKGlzRmV0Y2hpbmcgfHwgbG9hZGluZykgcmV0dXJuOyAvLyBQcmV2ZW50IG11bHRpcGxlIGZldGNoZXNcbiAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICBzZXRQcm9kdWN0RGF0YSgocHJldkRhdGEpID0+IHtcbiAgICAgICAgLy8gRGVkdXBsaWNhdGUgcHJvZHVjdHMgYnkgSURcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdHMgPSByZXMuZGF0YS5yZXN1bHRzLmZpbHRlcihcbiAgICAgICAgICAobmV3SXRlbSkgPT4gIXByZXZEYXRhLnNvbWUoKHByZXZJdGVtKSA9PiBwcmV2SXRlbS5pZCA9PT0gbmV3SXRlbS5pZClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2RGF0YSwgLi4ubmV3UHJvZHVjdHNdO1xuICAgICAgfSk7XG4gICAgICBzZXROZXh0VXJsKHJlcy5kYXRhLm5leHQpOyAvLyBVcGRhdGUgbmV4dCBVUkxcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2R1Y3RzOlwiLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlYm91bmNlZCBzY3JvbGwgaGFuZGxlclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlzRmV0Y2hpbmcgfHwgIW5leHRVcmwpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCB9ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGlmIChzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgPD0gY2xpZW50SGVpZ2h0ICsgMTAwKSB7XG4gICAgICBnZXRQcm9kdWN0KG5leHRVcmwpO1xuICAgIH1cbiAgfSwgW25leHRVcmwsIGlzRmV0Y2hpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIGdldFByb2R1Y3QoKTtcbiAgICB9XG4gIH0sIFtwcm9kdV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW2hhbmRsZVNjcm9sbCxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbmMtUGFnZVNlYXJjaGB9IGRhdGEtbmMtaWQ9XCJQYWdlU2VhcmNoXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG5jLUhlYWRCYWNrZ3JvdW5kQ29tbW9uIGgtMjQgMnhsOmgtMjggdG9wLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGJnLXByaW1hcnktNTAgZGFyazpiZy1uZXV0cmFsLTgwMC8yMCBgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gLW10LTEwIGZsZXggZmxleC1jb2wgbGc6LW10LTdcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNTAwIGRhcms6dGV4dC1uZXV0cmFsLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBib3JkZXItMCBkYXJrOmJvcmRlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICBzaXplQ2xhc3M9XCJwbC0xNCBweS01IHByLTUgbWQ6cGwtMTZcIlxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uQ2lyY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMi41IHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzJcIlxuICAgICAgICAgICAgICAgIHNpemU9XCIgdy0xMSBoLTExXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxhcyBsYS1hcnJvdy1yaWdodCB0ZXh0LXhsXCI+PC9pPlxuICAgICAgICAgICAgICA8L0J1dHRvbkNpcmNsZT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC01IHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdGV4dC0yeGwgbWQ6bGVmdC02XCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEuNSAyMUMxNi43NDY3IDIxIDIxIDE2Ljc0NjcgMjEgMTEuNUMyMSA2LjI1MzI5IDE2Ljc0NjcgMiAxMS41IDJDNi4yNTMyOSAyIDIgNi4yNTMyOSAyIDExLjVDMiAxNi43NDY3IDYuMjUzMjkgMjEgMTEuNSAyMVpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjIgMjJMMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTE2IGxnOnBiLTI4IGxnOnB0LTIwIHNwYWNlLXktMTYgbGc6c3BhY2UteS0yOFwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8SGVhZGVyRmlsdGVyU2VhcmNoUGFnZSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC14LTggZ2FwLXktMTAgbXQtOCBsZzptdC0xMFwiPlxuICAgICAgICAgICAge3Byb2R1Y3REYXRhLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICA/IHByb2R1Y3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBkYXRhPXtpdGVtfSBrZXk9e2l0ZW0uaWQgfHwgaW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOiBcIkxvYWRpbmcuLi5cIn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcgbW9yZSBwcm9kdWN0cy4uLjwvcD59XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlYXJjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsIkhlYWRlckZpbHRlclNlYXJjaFBhZ2UiLCJJbnB1dCIsIkJ1dHRvbkNpcmNsZSIsIlByb2R1Y3RDYXJkIiwiUGFnZVNlYXJjaCIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdERhdGEiLCJuZXh0VXJsIiwic2V0TmV4dFVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJnZXRQcm9kdWN0IiwidXJsIiwicmVzIiwiZ2V0IiwicHJldkRhdGEiLCJuZXdQcm9kdWN0cyIsImRhdGEiLCJyZXN1bHRzIiwiZmlsdGVyIiwibmV3SXRlbSIsInNvbWUiLCJwcmV2SXRlbSIsImlkIiwibmV4dCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGVuZ3RoIiwicHJvZHUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtbmMtaWQiLCJoZWFkZXIiLCJmb3JtIiwibWV0aG9kIiwibGFiZWwiLCJodG1sRm9yIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2l6ZUNsYXNzIiwicm91bmRlZCIsInNpemUiLCJpIiwic3BhbiIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwibWFpbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/page.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6a14403cbfb1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDg5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjZhMTQ0MDNjYmZiMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/MainNav2Logged.js":
/*!*************************************************!*\
  !*** ./src/components/Header/MainNav2Logged.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/Logo/Logo */ \"(app-pages-browser)/./src/shared/Logo/Logo.js\");\n/* harmony import */ var _shared_MenuBar_MenuBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/MenuBar/MenuBar */ \"(app-pages-browser)/./src/shared/MenuBar/MenuBar.js\");\n/* harmony import */ var _AvatarDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarDropdown */ \"(app-pages-browser)/./src/components/Header/AvatarDropdown.js\");\n/* harmony import */ var _shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/Navigation/Navigation */ \"(app-pages-browser)/./src/shared/Navigation/Navigation.js\");\n/* harmony import */ var _CartDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartDropdown */ \"(app-pages-browser)/./src/components/Header/CartDropdown.js\");\n/* harmony import */ var _barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=XMarkIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive */ \"(app-pages-browser)/./node_modules/react-responsive/dist/esm/index.js\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/authContext */ \"(app-pages-browser)/./src/context/authContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst MainNav2Logged = ()=>{\n    _s();\n    const inputRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    const [showSearchForm, setShowSearchForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { user } = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_8__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        user\n    ]);\n    const isBigScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)({\n        query: \"(min-width: 900px)\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setShowContent(false);\n        const timer = setTimeout(()=>{\n            setShowContent(true);\n        }, 100);\n        return ()=>clearTimeout(timer);\n    }, [\n        isBigScreen\n    ]);\n    // navbar main -----------------------------------------------------------------------------------------\n    const renderMagnifyingGlassIcon = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: 22,\n            height: 22,\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z\",\n                    stroke: \"currentColor\",\n                    strokeWidth: \"1.5\",\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\"\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M22 22L20 20\",\n                    stroke: \"currentColor\",\n                    strokeWidth: \"1.5\",\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\"\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderSearchForm = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex-1 py-4 h-20 text-slate-900 dark:text-slate-100\",\n            onSubmit: (e)=>{\n                var _inputRef_current;\n                e.preventDefault();\n                router.push(\"/search?s=\");\n                (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.blur();\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded\",\n                    children: [\n                        renderMagnifyingGlassIcon(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: inputRef,\n                            type: \"text\",\n                            placeholder: \"Type and preddss enter\",\n                            className: \"border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base\",\n                            autoFocus: true\n                        }, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>setShowSearchForm(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    hidden: true,\n                    value: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined);\n    };\n    const renderContent = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-30 flex justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:flex-1 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"flex-shrink-0 w-32\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-[2] hidden lg:flex justify-center mx-4\",\n                    children: showSearchForm ? renderSearchForm() : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                        lineNumber: 105,\n                        columnNumber: 50\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100\",\n                    children: [\n                        !showSearchForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center\",\n                            onClick: ()=>setShowSearchForm(!showSearchForm),\n                            children: renderMagnifyingGlassIcon()\n                        }, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined),\n                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AvatarDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                            lineNumber: 117,\n                            columnNumber: 19\n                        }, undefined) : \"\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center lg:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_MenuBar_MenuBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700\",\n        style: {},\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container \",\n            children: renderContent()\n        }, void 0, false, {\n            fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/components/Header/MainNav2Logged.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainNav2Logged, \"4oEe+kkQRxR486PEA/NUr8hLyTA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_authContext__WEBPACK_IMPORTED_MODULE_8__.useAuth,\n        react_responsive__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery\n    ];\n});\n_c = MainNav2Logged;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav2Logged);\nvar _c;\n$RefreshReg$(_c, \"MainNav2Logged\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9NYWluTmF2MkxvZ2dlZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWtFO0FBQzVCO0FBQ1M7QUFDRDtBQUNVO0FBQ2Q7QUFDYztBQUNaO0FBQ0s7QUFDRDtBQUloRCxNQUFNYyxpQkFBaUI7O0lBQ3JCLE1BQU1DLHlCQUFXZCxnREFBU0E7SUFDMUIsTUFBTSxDQUFDZSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWdCLFNBQVNULDBEQUFTQTtJQUN2QixNQUFNLEVBQUNVLElBQUksRUFBQyxHQUFHUiw2REFBT0E7SUFDdEJWLGdEQUFTQSxDQUFDLEtBRVYsR0FBRTtRQUFDa0I7S0FBSztJQUVQLE1BQU1DLGNBQWNWLCtEQUFhQSxDQUFDO1FBQ2hDVyxPQUFPO0lBQ1Q7SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1JnQixlQUFlO1FBRWYsTUFBTUssUUFBUUMsV0FBVztZQUN2Qk4sZUFBZTtRQUNqQixHQUFHO1FBRUgsT0FBTyxJQUFNTyxhQUFhRjtJQUM1QixHQUFHO1FBQUNGO0tBQVk7SUFFbEIsd0dBQXdHO0lBRXhHLE1BQU1LLDRCQUE0QjtRQUNoQyxxQkFDRSw4REFBQ0M7WUFDQ0MsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFNBQVE7WUFDUkMsTUFBSztZQUNMQyxPQUFNOzs4QkFFTiw4REFBQ0M7b0JBQ0NDLEdBQUU7b0JBQ0ZDLFFBQU87b0JBQ1BDLGFBQVk7b0JBQ1pDLGVBQWM7b0JBQ2RDLGdCQUFlOzs7Ozs7OEJBRWpCLDhEQUFDTDtvQkFDQ0MsR0FBRTtvQkFDRkMsUUFBTztvQkFDUEMsYUFBWTtvQkFDWkMsZUFBYztvQkFDZEMsZ0JBQWU7Ozs7Ozs7Ozs7OztJQUl2QjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QixxQkFDRSw4REFBQ0M7WUFDQ0MsV0FBVTtZQUNWQyxVQUFVLENBQUNDO29CQUdUN0I7Z0JBRkE2QixFQUFFQyxjQUFjO2dCQUNoQnpCLE9BQU8wQixJQUFJLENBQUM7aUJBQ1ovQixvQkFBQUEsU0FBU2dDLE9BQU8sY0FBaEJoQyx3Q0FBQUEsa0JBQWtCaUMsSUFBSTtZQUN4Qjs7OEJBRUEsOERBQUNDO29CQUFJUCxXQUFVOzt3QkFDWmY7c0NBQ0QsOERBQUN1Qjs0QkFDQ0MsS0FBS3BDOzRCQUNMcUMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlgsV0FBVTs0QkFDVlksU0FBUzs7Ozs7O3NDQUVYLDhEQUFDQzs0QkFBT0gsTUFBSzs0QkFBU0ksU0FBUyxJQUFNdkMsa0JBQWtCO3NDQUNyRCw0RUFBQ1Asb0dBQVNBO2dDQUFDZ0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pCLDhEQUFDUTtvQkFBTUUsTUFBSztvQkFBU0ssTUFBTTtvQkFBQ0MsT0FBTTs7Ozs7Ozs7Ozs7O0lBR3hDO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCLHFCQUNFLDhEQUFDVjtZQUFJUCxXQUFVOzs4QkFDYiw4REFBQ087b0JBQUlQLFdBQVU7OEJBQ2IsNEVBQUNyQyx5REFBSUE7d0JBQUNxQyxXQUFVOzs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNPO29CQUFJUCxXQUFVOzhCQUNaMUIsaUJBQWlCd0IsbUNBQXFCLDhEQUFDaEMscUVBQVVBOzs7Ozs7Ozs7OzhCQUdwRCw4REFBQ3lDO29CQUFJUCxXQUFVOzt3QkFDWixDQUFDMUIsZ0NBQ0EsOERBQUN1Qzs0QkFDQ2IsV0FBVTs0QkFDVmMsU0FBUyxJQUFNdkMsa0JBQWtCLENBQUNEO3NDQUVqQ1c7Ozs7Ozt3QkFHSE4scUJBQU0sOERBQUNkLHVEQUFjQTs7Ozt3Q0FBSTtzQ0FDM0IsOERBQUNFLHFEQUFZQTs7Ozs7Ozs7Ozs7OEJBRWYsOERBQUN3QztvQkFBSVAsV0FBVTs4QkFDYiw0RUFBQ3BDLCtEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztJQUloQjtJQUVBLHFCQUNFLDhEQUFDMkM7UUFDQ1AsV0FBVTtRQUNWa0IsT0FBTyxDQUNQO2tCQUVBLDRFQUFDWDtZQUFJUCxXQUFVO3NCQUFjaUI7Ozs7Ozs7Ozs7O0FBR25DO0dBeEhNN0M7O1FBSVdILHNEQUFTQTtRQUNSRSx5REFBT0E7UUFLREQsMkRBQWFBOzs7S0FWL0JFO0FBMEhOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9NYWluTmF2MkxvZ2dlZC5qcz9hNDBiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvc2hhcmVkL0xvZ28vTG9nb1wiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIkAvc2hhcmVkL01lbnVCYXIvTWVudUJhclwiO1xuaW1wb3J0IEF2YXRhckRyb3Bkb3duIGZyb20gXCIuL0F2YXRhckRyb3Bkb3duXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiQC9zaGFyZWQvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQ2FydERyb3Bkb3duIGZyb20gXCIuL0NhcnREcm9wZG93blwiO1xuaW1wb3J0IHsgWE1hcmtJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvY29udGV4dC9hdXRoQ29udGV4dFwiO1xuXG5cblxuY29uc3QgTWFpbk5hdjJMb2dnZWQgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gY3JlYXRlUmVmKCk7XG4gIGNvbnN0IFtzaG93U2VhcmNoRm9ybSwgc2V0U2hvd1NlYXJjaEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHt1c2VyfSA9IHVzZUF1dGgoKVxuICAgdXNlRWZmZWN0KCgpPT57XG5cbiAgIH0sW3VzZXJdKVxuXG4gICAgY29uc3QgaXNCaWdTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBcIihtaW4td2lkdGg6IDkwMHB4KVwiLFxuICAgIH0pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0U2hvd0NvbnRlbnQoZmFsc2UpO1xuXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH0sIFtpc0JpZ1NjcmVlbl0pO1xuXG4gIC8vIG5hdmJhciBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3QgcmVuZGVyTWFnbmlmeWluZ0dsYXNzSWNvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2Z1xuICAgICAgICB3aWR0aD17MjJ9XG4gICAgICAgIGhlaWdodD17MjJ9XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMTEuNSAyMUMxNi43NDY3IDIxIDIxIDE2Ljc0NjcgMjEgMTEuNUMyMSA2LjI1MzI5IDE2Ljc0NjcgMiAxMS41IDJDNi4yNTMyOSAyIDIgNi4yNTMyOSAyIDExLjVDMiAxNi43NDY3IDYuMjUzMjkgMjEgMTEuNSAyMVpcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0yMiAyMkwyMCAyMFwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTQgaC0yMCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtc2xhdGUtMTAwXCJcbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NlYXJjaD9zPVwiKTtcbiAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50Py5ibHVyKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgZGFyazpiZy1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xLjUgcHgtNSBoLWZ1bGwgcm91bmRlZFwiPlxuICAgICAgICAgIHtyZW5kZXJNYWduaWZ5aW5nR2xhc3NJY29uKCl9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGFuZCBwcmVkZHNzIGVudGVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ub25lIGJnLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgdy1mdWxsIHRleHQtYmFzZVwiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWFyY2hGb3JtKGZhbHNlKX0+XG4gICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4gdmFsdWU9XCJcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMwIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleC0xIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExvZ28gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTMyXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LVsyXSBoaWRkZW4gbGc6ZmxleCBqdXN0aWZ5LWNlbnRlciBteC00XCI+XG4gICAgICAgICAge3Nob3dTZWFyY2hGb3JtID8gcmVuZGVyU2VhcmNoRm9ybSgpIDogPE5hdmlnYXRpb24gLz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICB7IXNob3dTZWFyY2hGb3JtICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggdy0xMCBoLTEwIHNtOnctMTIgc206aC0xMiByb3VuZGVkLWZ1bGwgdGV4dC1zbGF0ZS03MDAgZGFyazp0ZXh0LXNsYXRlLTMwMCBob3ZlcjpiZy1zbGF0ZS0xMDAgZGFyazpob3ZlcjpiZy1zbGF0ZS04MDAgZm9jdXM6b3V0bGluZS1ub25lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWFyY2hGb3JtKCFzaG93U2VhcmNoRm9ybSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyZW5kZXJNYWduaWZ5aW5nR2xhc3NJY29uKCl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgICB7dXNlcj8gPEF2YXRhckRyb3Bkb3duIC8+OlwiXCJ9XG4gICAgICAgICAgPENhcnREcm9wZG93biAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBsZzpoaWRkZW5cIj5cbiAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJuYy1NYWluTmF2MkxvZ2dlZCByZWxhdGl2ZSB6LTEwIGJnLXdoaXRlIGRhcms6YmctbmV1dHJhbC05MDAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXYyTG9nZ2VkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUmVmIiwiRkMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ28iLCJNZW51QmFyIiwiQXZhdGFyRHJvcGRvd24iLCJOYXZpZ2F0aW9uIiwiQ2FydERyb3Bkb3duIiwiWE1hcmtJY29uIiwidXNlUm91dGVyIiwidXNlTWVkaWFRdWVyeSIsInVzZUF1dGgiLCJNYWluTmF2MkxvZ2dlZCIsImlucHV0UmVmIiwic2hvd1NlYXJjaEZvcm0iLCJzZXRTaG93U2VhcmNoRm9ybSIsInNob3dDb250ZW50Iiwic2V0U2hvd0NvbnRlbnQiLCJyb3V0ZXIiLCJ1c2VyIiwiaXNCaWdTY3JlZW4iLCJxdWVyeSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlbmRlck1hZ25pZnlpbmdHbGFzc0ljb24iLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwicmVuZGVyU2VhcmNoRm9ybSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjdXJyZW50IiwiYmx1ciIsImRpdiIsImlucHV0IiwicmVmIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIiwiYnV0dG9uIiwib25DbGljayIsImhpZGRlbiIsInZhbHVlIiwicmVuZGVyQ29udGVudCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/MainNav2Logged.js\n"));

/***/ })

});
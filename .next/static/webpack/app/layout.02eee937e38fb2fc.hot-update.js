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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"da84b03f76db\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDg5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImRhODRiMDNmNzZkYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/context/authContext.js":
/*!************************************!*\
  !*** ./src/context/authContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/axios */ \"(app-pages-browser)/./src/axios.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n// Create the context\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Create a provider component\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [is_auth, setIs_auth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const login = async (values)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://api.velonna.co/login/\", {\n                username: values.username,\n                password: values.password\n            }, {\n                headers: {\n                    accept: \"application/json\",\n                    \"Content-Type\": \"application/json\",\n                    \"X-CSRFToken\": \"ULx41so9FZF04FaONS6tTQfcAGaGBG9FHESSxWUcHDN14DF5JFAyIRXd7bggbrWJ\"\n                }\n            });\n            if (res.status === 200) {\n                const { access, refresh } = res.data;\n                localStorage.setItem(\"username\", values.username);\n                // Store tokens in localStorage\n                localStorage.setItem(\"accessToken\", access);\n                localStorage.setItem(\"refreshToken\", refresh);\n                // Decode or fetch user details (assuming the token contains user data)\n                setIs_auth(true);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Login successful!\");\n                // Redirect to homepage\n                router.push(\"/\");\n            }\n        } catch (error) {\n            setIs_auth(false);\n            setUser(null);\n            console.error(\"Login error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Login failed. Please check your credentials.\");\n            throw error;\n        }\n    };\n    const logout = ()=>{\n        // Clear tokens and user state\n        localStorage.removeItem(\"accessToken\");\n        localStorage.removeItem(\"refreshToken\");\n        localStorage.removeItem(\"username\");\n        setIs_auth(false);\n        setUser(null);\n        router.push(\"/login\"); // Redirect to login page\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Logged out successfully.\");\n    };\n    const getUserInfo = async (username)=>{\n        try {\n            const response = await _axios__WEBPACK_IMPORTED_MODULE_4__.axiosInstance.get(\"/user/\".concat(username, \"/\"));\n            return response.data;\n        } catch (error) {\n            console.error(\"Error fetching user info:\", error);\n            throw error;\n        }\n    };\n    // Load user data on mount (if tokens exist)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        const accessToken = localStorage.getItem(\"accessToken\");\n        if (accessToken) {\n            // Mock: Set user state if token exists (You can fetch user details with the token if needed)\n            const usernameData =  true ? localStorage.getItem(\"username\") : 0;\n            const userData = await getUserInfo(usernameData);\n            setUser(userData);\n            console.log(userData);\n            setIs_auth(true);\n        } else {\n            setIs_auth(false);\n            setUser(null);\n        }\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            is_auth,\n            login,\n            logout,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/lavanyasharma/Documents/GitHub/velonna-Website/src/context/authContext.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"RA0jXAd2Hz+VK+XQwWz1PBpQ454=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\n// Custom hook to use the AuthContext\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4RTtBQUNwRDtBQUNtQjtBQUNUO0FBQ0k7QUFFeEMscUJBQXFCO0FBQ3JCLE1BQU1TLDRCQUFjUixvREFBYUE7QUFFakMsOEJBQThCO0FBQ3ZCLE1BQU1TLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN4QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWlCLFNBQVNkLDBEQUFTQTtJQUl4QixNQUFNZSxRQUFRLE9BQU9DO1FBQ25CLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1sQiw2Q0FBS0EsQ0FBQ21CLElBQUksQ0FDMUIsaUNBQ0E7Z0JBQ0VSLFVBQVVNLE9BQU9OLFFBQVE7Z0JBQ3pCUyxVQUFVSCxPQUFPRyxRQUFRO1lBQzNCLEdBQ0E7Z0JBQ0VDLFNBQVM7b0JBQ1BDLFFBQVE7b0JBQ1IsZ0JBQWdCO29CQUNoQixlQUFlO2dCQUNqQjtZQUNGO1lBR0YsSUFBSUosSUFBSUssTUFBTSxLQUFLLEtBQUs7Z0JBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtnQkFDcENDLGFBQWFDLE9BQU8sQ0FBQyxZQUFXWCxPQUFPTixRQUFRO2dCQUMvQywrQkFBK0I7Z0JBQy9CZ0IsYUFBYUMsT0FBTyxDQUFDLGVBQWVKO2dCQUNwQ0csYUFBYUMsT0FBTyxDQUFDLGdCQUFnQkg7Z0JBRXJDLHVFQUF1RTtnQkFDdkVqQixXQUFXO2dCQUVYTix1REFBS0EsQ0FBQzJCLE9BQU8sQ0FBQztnQkFFZCx1QkFBdUI7Z0JBQ3ZCZCxPQUFPZSxJQUFJLENBQUM7WUFDZDtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNadkIsV0FBVztZQUNYRSxRQUFRO1lBQ1ZzQixRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtZQUM5QjdCLHVEQUFLQSxDQUFDNkIsS0FBSyxDQUFDO1lBQ1osTUFBTUE7UUFDUjtJQUNGO0lBRUEsTUFBTUUsU0FBUztRQUNiLDhCQUE4QjtRQUM5Qk4sYUFBYU8sVUFBVSxDQUFDO1FBQ3hCUCxhQUFhTyxVQUFVLENBQUM7UUFDeEJQLGFBQWFPLFVBQVUsQ0FBQztRQUN4QjFCLFdBQVc7UUFDWEUsUUFBUTtRQUVSSyxPQUFPZSxJQUFJLENBQUMsV0FBVyx5QkFBeUI7UUFDaEQ1Qix1REFBS0EsQ0FBQzJCLE9BQU8sQ0FBQztJQUNoQjtJQUVBLE1BQU1NLGNBQWMsT0FBT3hCO1FBQ3pCLElBQUk7WUFDRixNQUFNeUIsV0FBVyxNQUFNakMsaURBQWFBLENBQUNrQyxHQUFHLENBQUMsU0FBa0IsT0FBVDFCLFVBQVM7WUFDM0QsT0FBT3lCLFNBQVNWLElBQUk7UUFDdEIsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1lBQzNDLE1BQU1BO1FBQ1I7SUFDRjtJQUdBLDRDQUE0QztJQUM1Q2hDLGdEQUFTQSxDQUFFO1FBQ1QsTUFBTXVDLGNBQWNYLGFBQWFZLE9BQU8sQ0FBQztRQUN6QyxJQUFJRCxhQUFhO1lBQ2YsNkZBQTZGO1lBQzdGLE1BQU1FLGVBQWUsS0FBNkIsR0FBR2IsYUFBYVksT0FBTyxDQUFDLGNBQWMsQ0FBSTtZQUMxRixNQUFNRSxXQUFXLE1BQU1OLFlBQVlLO1lBQ25DOUIsUUFBUStCO1lBQ1JULFFBQVFVLEdBQUcsQ0FBQ0Q7WUFDWmpDLFdBQVc7UUFDZixPQUNLO1lBQ0RBLFdBQVc7WUFDWEUsUUFBUTtRQUVaO1FBQ0FJLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1YsWUFBWXVDLFFBQVE7UUFBQ0MsT0FBTztZQUFFckM7WUFBU1M7WUFBT2lCO1lBQVFwQjtRQUFRO2tCQUM1RFA7Ozs7OztBQUdQLEVBQUU7R0FsR1dEOztRQU1JSixzREFBU0E7OztLQU5iSTtBQW9HYixxQ0FBcUM7QUFDOUIsTUFBTXdDLFVBQVU7O0lBQ3JCLE9BQU9oRCxpREFBVUEsQ0FBQ087QUFDcEIsRUFBRTtJQUZXeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aENvbnRleHQuanM/NGYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBheGlvc0luc3RhbmNlIH0gZnJvbSAnQC9heGlvcyc7XG5cbi8vIENyZWF0ZSB0aGUgY29udGV4dFxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIENyZWF0ZSBhIHByb3ZpZGVyIGNvbXBvbmVudFxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbaXNfYXV0aCxzZXRJc19hdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHBzOi8vYXBpLnZlbG9ubmEuY28vbG9naW4vJyxcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMudXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLUNTUkZUb2tlbic6ICdVTHg0MXNvOUZaRjA0RmFPTlM2dFRRZmNBR2FHQkc5RkhFU1N4V1VjSEROMTRERjVKRkF5SVJYZDdiZ2dicldKJyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgeyBhY2Nlc3MsIHJlZnJlc2ggfSA9IHJlcy5kYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsdmFsdWVzLnVzZXJuYW1lKVxuICAgICAgICAvLyBTdG9yZSB0b2tlbnMgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsIGFjY2Vzcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZWZyZXNoKTtcblxuICAgICAgICAvLyBEZWNvZGUgb3IgZmV0Y2ggdXNlciBkZXRhaWxzIChhc3N1bWluZyB0aGUgdG9rZW4gY29udGFpbnMgdXNlciBkYXRhKVxuICAgICAgICBzZXRJc19hdXRoKHRydWUpXG5cbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkxvZ2luIHN1Y2Nlc3NmdWwhXCIpO1xuXG4gICAgICAgIC8vIFJlZGlyZWN0IHRvIGhvbWVwYWdlXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0SXNfYXV0aChmYWxzZSlcbiAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoJ0xvZ2luIGZhaWxlZC4gUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMuJyk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIC8vIENsZWFyIHRva2VucyBhbmQgdXNlciBzdGF0ZVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZyZXNoVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKVxuICAgIHNldElzX2F1dGgoZmFsc2UpO1xuICAgIHNldFVzZXIobnVsbClcbiAgICBcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcbiAgICB0b2FzdC5zdWNjZXNzKFwiTG9nZ2VkIG91dCBzdWNjZXNzZnVsbHkuXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYC91c2VyLyR7dXNlcm5hbWV9L2ApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgaW5mbzonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG4gIFxuXG4gIC8vIExvYWQgdXNlciBkYXRhIG9uIG1vdW50IChpZiB0b2tlbnMgZXhpc3QpXG4gIHVzZUVmZmVjdCggYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gICAgaWYgKGFjY2Vzc1Rva2VuKSB7XG4gICAgICAvLyBNb2NrOiBTZXQgdXNlciBzdGF0ZSBpZiB0b2tlbiBleGlzdHMgKFlvdSBjYW4gZmV0Y2ggdXNlciBkZXRhaWxzIHdpdGggdGhlIHRva2VuIGlmIG5lZWRlZClcbiAgICAgIGNvbnN0IHVzZXJuYW1lRGF0YSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpIDogbnVsbDtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRVc2VySW5mbyh1c2VybmFtZURhdGEpXG4gICAgICAgIHNldFVzZXIodXNlckRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgICBzZXRJc19hdXRoKHRydWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRJc19hdXRoKGZhbHNlKVxuICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgIFxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzX2F1dGgsIGxvZ2luLCBsb2dvdXQsIGxvYWRpbmcgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIEN1c3RvbSBob29rIHRvIHVzZSB0aGUgQXV0aENvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwidG9hc3QiLCJheGlvc0luc3RhbmNlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzX2F1dGgiLCJzZXRJc19hdXRoIiwidXNlciIsInNldFVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJsb2dpbiIsInZhbHVlcyIsInJlcyIsInBvc3QiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJzdGF0dXMiLCJhY2Nlc3MiLCJyZWZyZXNoIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdWNjZXNzIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJnZXRVc2VySW5mbyIsInJlc3BvbnNlIiwiZ2V0IiwiYWNjZXNzVG9rZW4iLCJnZXRJdGVtIiwidXNlcm5hbWVEYXRhIiwidXNlckRhdGEiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/authContext.js\n"));

/***/ })

});
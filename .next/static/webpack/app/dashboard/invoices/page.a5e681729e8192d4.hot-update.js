"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/search.tsx":
/*!***************************!*\
  !*** ./app/ui/search.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-debounce */ \"(app-pages-browser)/./node_modules/use-debounce/dist/index.module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Search(param) {\n    let { placeholder } = param;\n    var _searchParams_get;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const { replace } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSearch = (0,use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback)((term)=>{\n        console.log(\"Searching... \".concat(term));\n        const params = new URLSearchParams(searchParams);\n        if (term) {\n            params.set(\"query\", term);\n        } else {\n            params.delete(\"query\");\n        }\n        replace(\"\".concat(pathname, \"?\").concat(params.toString()));\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-1 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IVOITAGENCE-1\\\\Desktop\\\\next_js\\\\learn_next_js\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                placeholder: placeholder,\n                onChange: (e)=>{\n                    handleSearch(e.target.value);\n                },\n                defaultValue: (_searchParams_get = searchParams.get(\"query\")) === null || _searchParams_get === void 0 ? void 0 : _searchParams_get.toString()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IVOITAGENCE-1\\\\Desktop\\\\next_js\\\\learn_next_js\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IVOITAGENCE-1\\\\Desktop\\\\next_js\\\\learn_next_js\\\\app\\\\ui\\\\search.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IVOITAGENCE-1\\\\Desktop\\\\next_js\\\\learn_next_js\\\\app\\\\ui\\\\search.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"vCAeG7Dxg1cijEEWRCJvC0O/qwo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        use_debounce__WEBPACK_IMPORTED_MODULE_2__.useDebouncedCallback\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtFO0FBQ1E7QUFDdEI7QUFFckMsU0FBU0ssT0FBTyxLQUF3QztRQUF4QyxFQUFFQyxXQUFXLEVBQTJCLEdBQXhDO1FBMEJUQzs7SUF6QnBCLE1BQU1BLGVBQWVOLGdFQUFlQTtJQUNwQyxNQUFNTyxXQUFXTiw0REFBV0E7SUFDNUIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR04sMERBQVNBO0lBRTdCLE1BQU1PLGVBQWVOLGtFQUFvQkEsQ0FBQyxDQUFDTztRQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLGdCQUFxQixPQUFMRjtRQUM1QixNQUFNRyxTQUFTLElBQUlDLGdCQUFnQlI7UUFDbkMsSUFBSUksTUFBTTtZQUNSRyxPQUFPRSxHQUFHLENBQUMsU0FBU0w7UUFDdEIsT0FBTztZQUNMRyxPQUFPRyxNQUFNLENBQUM7UUFDaEI7UUFDQVIsUUFBUSxHQUFlSyxPQUFaTixVQUFTLEtBQXFCLE9BQWxCTSxPQUFPSSxRQUFRO0lBQ3hDLEdBQUc7SUFDSCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFTRixXQUFVOzBCQUFVOzs7Ozs7MEJBRzVDLDhEQUFDRztnQkFDQ0gsV0FBVTtnQkFDVmQsYUFBYUE7Z0JBQ2JrQixVQUFVLENBQUNDO29CQUNUZixhQUFhZSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQzdCO2dCQUNBQyxZQUFZLEdBQUVyQixvQkFBQUEsYUFBYXNCLEdBQUcsQ0FBQyxzQkFBakJ0Qix3Q0FBQUEsa0JBQTJCVyxRQUFROzs7Ozs7MEJBRW5ELDhEQUFDbEIsNkdBQW1CQTtnQkFBQ29CLFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQztHQS9Cd0JmOztRQUNESiw0REFBZUE7UUFDbkJDLHdEQUFXQTtRQUNSQyxzREFBU0E7UUFFUkMsOERBQW9CQTs7O0tBTG5CQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvc2VhcmNoLnRzeD8xYTE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IE1hZ25pZnlpbmdHbGFzc0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMsIHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJ3VzZS1kZWJvdW5jZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBwbGFjZWhvbGRlciB9OiB7IHBsYWNlaG9sZGVyOiBzdHJpbmcgfSkge1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCB7IHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSB1c2VEZWJvdW5jZWRDYWxsYmFjaygodGVybSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFNlYXJjaGluZy4uLiAke3Rlcm19YCk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XHJcbiAgICBpZiAodGVybSkge1xyXG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHRlcm0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyYW1zLmRlbGV0ZSgncXVlcnknKTtcclxuICAgIH1cclxuICAgIHJlcGxhY2UoYCR7cGF0aG5hbWV9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XHJcbiAgfSwgMzAwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtMSBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgIFNlYXJjaFxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktWzlweF0gcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoUGFyYW1zLmdldCgncXVlcnknKT8udG9TdHJpbmcoKX1cclxuICAgICAgLz5cclxuICAgICAgPE1hZ25pZnlpbmdHbGFzc0ljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwIHBlZXItZm9jdXM6dGV4dC1ncmF5LTkwMFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNYWduaWZ5aW5nR2xhc3NJY29uIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJ1c2VEZWJvdW5jZWRDYWxsYmFjayIsIlNlYXJjaCIsInBsYWNlaG9sZGVyIiwic2VhcmNoUGFyYW1zIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaGFuZGxlU2VhcmNoIiwidGVybSIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJkZWxldGUiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/search.tsx\n"));

/***/ })

});
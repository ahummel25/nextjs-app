module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/JobsList.tsx":
/*!*********************************!*\
  !*** ./components/JobsList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/andrewhummel/git-projects/nextjs-app/components/JobsList.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // this interface defines the shape of the data returned by the jobs query.\n\nconst List = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.ul``;\nconst ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.li`\n  margin-bottom: .5rem;\n`;\n\nconst JobList = ({\n  jobs\n}) => {\n  const listItems = jobs.map(job => {\n    return __jsx(ListItem, {\n      key: job.id,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, job.title, \" by \", job.company.name, \" [\", __jsx(\"a\", {\n      href: job.applyUrl,\n      target: \"_blank\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 44\n      }\n    }, \"Apply\"), \"]\");\n  });\n  return __jsx(List, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, listItems);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYnNMaXN0LnRzeD83MTIwIl0sIm5hbWVzIjpbIkxpc3QiLCJzdHlsZWQiLCJ1bCIsIkxpc3RJdGVtIiwibGkiLCJKb2JMaXN0Iiwiam9icyIsImxpc3RJdGVtcyIsIm1hcCIsImpvYiIsImlkIiwidGl0bGUiLCJjb21wYW55IiwibmFtZSIsImFwcGx5VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTs7QUFjQSxNQUFNQSxJQUFJLEdBQUdDLHNEQUFNLENBQUNDLEVBQUcsRUFBdkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLHNEQUFNLENBQUNHLEVBQUc7O0NBQTNCOztBQUlBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFzQjtBQUNwQyxRQUFNQyxTQUFTLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFVQyxHQUFELElBQVM7QUFDbEMsV0FDRSxNQUFDLFFBQUQ7QUFBVSxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxHQUFHLENBQUNFLEtBRFAsVUFDa0JGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxJQUQ5QixRQUNxQztBQUFHLFVBQUksRUFBRUosR0FBRyxDQUFDSyxRQUFiO0FBQXVCLFlBQU0sRUFBQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHJDLE1BREY7QUFLRCxHQU5pQixDQUFsQjtBQVFBLFNBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsU0FESCxDQURGO0FBS0QsQ0FkRDs7QUFnQmVGLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Kb2JzTGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBkYXRhIHJldHVybmVkIGJ5IHRoZSBqb2JzIHF1ZXJ5LlxuZXhwb3J0IGludGVyZmFjZSBJSm9iIHtcbiAgaWQ6IHN0cmluZztcbiAgYXBwbHlVcmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29tcGFueToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgam9iczogSUpvYltdO1xufVxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYGBcbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbmBcblxuY29uc3QgSm9iTGlzdCA9ICh7IGpvYnMgfTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtcyA9IGpvYnMubWFwKChqb2IpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtIGtleT17am9iLmlkfT5cbiAgICAgICAge2pvYi50aXRsZX0gYnkge2pvYi5jb21wYW55Lm5hbWV9IFs8YSBocmVmPXtqb2IuYXBwbHlVcmx9IHRhcmdldD1cIl9ibGFua1wiPkFwcGx5PC9hPl1cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKVxuICB9KVxuICBcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIHtsaXN0SXRlbXN9XG4gICAgPC9MaXN0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/JobsList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_JobsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/JobsList */ \"./components/JobsList.tsx\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/andrewhummel/git-projects/nextjs-app/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Index = () => {\n  var _jobs$data;\n\n  // our query that defines the attributes we want to get.\n  const JOBS_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_3__[\"gql\"]`\n    query {\n      jobs {\n        id\n        title\n        applyUrl\n        company {\n          name\n        }\n      }\n    }\n  `; // the hook that calls the query.\n\n  const jobs = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(JOBS_QUERY);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"GraphQL Job Board\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"A list of open GraphQL jobs.\"), __jsx(_components_JobsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    jobs: (jobs === null || jobs === void 0 ? void 0 : (_jobs$data = jobs.data) === null || _jobs$data === void 0 ? void 0 : _jobs$data.jobs) || [],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsIkpPQlNfUVVFUlkiLCJncWwiLCJqb2JzIiwidXNlUXVlcnkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFBQTs7QUFDbEI7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLGdEQUFJOzs7Ozs7Ozs7OztHQUF2QixDQUZrQixDQWVsQjs7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLG9FQUFRLENBQUNILFVBQUQsQ0FBckI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FGRixFQUdFLE1BQUMsNERBQUQ7QUFBUyxRQUFJLEVBQUUsQ0FBQUUsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwwQkFBQUEsSUFBSSxDQUFFRSxJQUFOLDBEQUFZRixJQUFaLEtBQW9CLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0QsQ0F6QkQ7O0FBMkJlSCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEpvYkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvSm9ic0xpc3RcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCJcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIC8vIG91ciBxdWVyeSB0aGF0IGRlZmluZXMgdGhlIGF0dHJpYnV0ZXMgd2Ugd2FudCB0byBnZXQuXG4gIGNvbnN0IEpPQlNfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgam9icyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGFwcGx5VXJsXG4gICAgICAgIGNvbXBhbnkge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIC8vIHRoZSBob29rIHRoYXQgY2FsbHMgdGhlIHF1ZXJ5LlxuICBjb25zdCBqb2JzID0gdXNlUXVlcnkoSk9CU19RVUVSWSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+R3JhcGhRTCBKb2IgQm9hcmQ8L2gxPlxuICAgICAgPHA+QSBsaXN0IG9mIG9wZW4gR3JhcGhRTCBqb2JzLjwvcD5cbiAgICAgIDxKb2JMaXN0IGpvYnM9e2pvYnM/LmRhdGE/LmpvYnMgfHwgW119IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
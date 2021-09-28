/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fullscreen.js":
/*!******************************!*\
  !*** ./src/js/fullscreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFullscreen\": () => (/* binding */ toggleFullscreen)\n/* harmony export */ });\nfunction toggleFullscreen(apiEndpoint) {\n  var fullscreenClass = 'opui-app-is-fullscreen';\n  var isFullscreen = document.body.classList.contains(fullscreenClass); // Check if class exists in list\n\n  if (!isFullscreen) {\n    document.body.classList.add(fullscreenClass);\n  } else {\n    document.body.classList.remove(fullscreenClass);\n  } // Send toggle request to API backend if needed\n\n\n  if (apiEndpoint) {\n    fetch(apiEndpoint).then(function (response) {// console.log(\"Toggled fullscreen\");\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZnVsbHNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDO0FBQzFDLE1BQUlDLGVBQWUsR0FBRyx3QkFBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQ0wsZUFBakMsQ0FBdEIsQ0FGMEMsQ0FJMUM7O0FBQ0EsTUFBSSxDQUFFQyxZQUFOLEVBQW9CO0FBQ2hCQyxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEJOLGVBQTVCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hFLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQlAsZUFBL0I7QUFDSCxHQVR5QyxDQVcxQzs7O0FBQ0EsTUFBSUQsV0FBSixFQUFpQjtBQUNiUyxJQUFBQSxLQUFLLENBQUNULFdBQUQsQ0FBTCxDQUNLVSxJQURMLENBQ1UsVUFBU0MsUUFBVCxFQUFtQixDQUNyQjtBQUNILEtBSEw7QUFJSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3B0aW1pemVwcmVzcy11aS8uL3NyYy9qcy9mdWxsc2NyZWVuLmpzP2E0ODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oYXBpRW5kcG9pbnQpIHtcbiAgICBsZXQgZnVsbHNjcmVlbkNsYXNzID0gJ29wdWktYXBwLWlzLWZ1bGxzY3JlZW4nO1xuICAgIGxldCBpc0Z1bGxzY3JlZW4gICAgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhmdWxsc2NyZWVuQ2xhc3MpO1xuXG4gICAgLy8gQ2hlY2sgaWYgY2xhc3MgZXhpc3RzIGluIGxpc3RcbiAgICBpZiAoISBpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0b2dnbGUgcmVxdWVzdCB0byBBUEkgYmFja2VuZCBpZiBuZWVkZWRcbiAgICBpZiAoYXBpRW5kcG9pbnQpIHtcbiAgICAgICAgZmV0Y2goYXBpRW5kcG9pbnQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG9nZ2xlZCBmdWxsc2NyZWVuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInRvZ2dsZUZ1bGxzY3JlZW4iLCJhcGlFbmRwb2ludCIsImZ1bGxzY3JlZW5DbGFzcyIsImlzRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fullscreen.js\n");

/***/ }),

/***/ "./src/tests/tests.js":
/*!****************************!*\
  !*** ./src/tests/tests.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/fullscreen */ \"./src/js/fullscreen.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Add fullscreen toggle event\n  document.querySelector('.opui-fullscreen-btn').addEventListener('click', function (event) {\n    event.preventDefault();\n    (0,_js_fullscreen__WEBPACK_IMPORTED_MODULE_0__.toggleFullscreen)('https://jsonplaceholder.typicode.com/posts/1');\n  }, false);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdHMvdGVzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JEO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixzQkFBdkIsRUFBK0NELGdCQUEvQyxDQUFnRSxPQUFoRSxFQUF5RSxVQUFVRSxLQUFWLEVBQWlCO0FBQ3RGQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQUwsSUFBQUEsZ0VBQWdCLENBQUMsOENBQUQsQ0FBaEI7QUFDSCxHQUhELEVBR0csS0FISDtBQUlILENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpbWl6ZXByZXNzLXVpLy4vc3JjL3Rlc3RzL3Rlc3RzLmpzP2RjOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b2dnbGVGdWxsc2NyZWVufSBmcm9tIFwiLi4vanMvZnVsbHNjcmVlblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBBZGQgZnVsbHNjcmVlbiB0b2dnbGUgZXZlbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B1aS1mdWxsc2NyZWVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xJyk7XG4gICAgfSwgZmFsc2UpO1xufSk7XG4iXSwibmFtZXMiOlsidG9nZ2xlRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tests/tests.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tests/tests.js");
/******/ 	
/******/ })()
;
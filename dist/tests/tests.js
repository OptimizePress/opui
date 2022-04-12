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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFullscreen\": () => (/* binding */ toggleFullscreen)\n/* harmony export */ });\nfunction toggleFullscreen(apiEndpoint) {\n  var fullscreenClass = 'opui-app-is-fullscreen';\n  var isFullscreen = document.body.classList.contains(fullscreenClass); // Check if class exists in list\n\n  if (!isFullscreen) {\n    document.body.classList.add(fullscreenClass);\n    isFullscreen = true;\n  } else {\n    document.body.classList.remove(fullscreenClass);\n    isFullscreen = false;\n  } // Send toggle request to API backend if needed\n\n\n  if (apiEndpoint) {\n    fetch(apiEndpoint, {\n      method: 'POST',\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        'Cache-Control': 'no-cache'\n      },\n      body: new URLSearchParams({\n        action: 'op3toggleFullScreen',\n        nonce: OpsScriptData.nonce,\n        isFullScreen: isFullscreen ? 1 : 0\n      })\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZnVsbHNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDO0FBQzFDLE1BQUlDLGVBQWUsR0FBRyx3QkFBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQ0wsZUFBakMsQ0FBbkIsQ0FGMEMsQ0FJMUM7O0FBQ0EsTUFBSSxDQUFDQyxZQUFMLEVBQW1CO0FBQ2ZDLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxHQUF4QixDQUE0Qk4sZUFBNUI7QUFDQUMsSUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDSCxHQUhELE1BR087QUFDSEMsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCUCxlQUEvQjtBQUNBQyxJQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNILEdBWHlDLENBYTFDOzs7QUFDQSxNQUFJRixXQUFKLEVBQWlCO0FBQ2JTLElBQUFBLEtBQUssQ0FBQ1QsV0FBRCxFQUFjO0FBQ2ZVLE1BQUFBLE1BQU0sRUFBRSxNQURPO0FBRWZDLE1BQUFBLFdBQVcsRUFBRSxhQUZFO0FBR2ZDLE1BQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQixtQ0FEWDtBQUVMLHlCQUFpQjtBQUZaLE9BSE07QUFPZlIsTUFBQUEsSUFBSSxFQUFFLElBQUlTLGVBQUosQ0FBb0I7QUFDdEJDLFFBQUFBLE1BQU0sRUFBRSxxQkFEYztBQUV0QkMsUUFBQUEsS0FBSyxFQUFFQyxhQUFhLENBQUNELEtBRkM7QUFHdEJFLFFBQUFBLFlBQVksRUFBRWYsWUFBWSxHQUFHLENBQUgsR0FBTztBQUhYLE9BQXBCO0FBUFMsS0FBZCxDQUFMLFVBYU8sVUFBQ2dCLEtBQUQsRUFBVztBQUNkQyxNQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNILEtBZkQ7QUFnQkg7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29wdGltaXplcHJlc3MtdWkvLi9zcmMvanMvZnVsbHNjcmVlbi5qcz80ZTU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKGFwaUVuZHBvaW50KSB7XG4gICAgbGV0IGZ1bGxzY3JlZW5DbGFzcyA9ICdvcHVpLWFwcC1pcy1mdWxsc2NyZWVuJztcbiAgICBsZXQgaXNGdWxsc2NyZWVuID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoZnVsbHNjcmVlbkNsYXNzKTtcblxuICAgIC8vIENoZWNrIGlmIGNsYXNzIGV4aXN0cyBpbiBsaXN0XG4gICAgaWYgKCFpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgICAgIGlzRnVsbHNjcmVlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdG9nZ2xlIHJlcXVlc3QgdG8gQVBJIGJhY2tlbmQgaWYgbmVlZGVkXG4gICAgaWYgKGFwaUVuZHBvaW50KSB7XG4gICAgICAgIGZldGNoKGFwaUVuZHBvaW50LCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnb3AzdG9nZ2xlRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgbm9uY2U6IE9wc1NjcmlwdERhdGEubm9uY2UsXG4gICAgICAgICAgICAgICAgaXNGdWxsU2NyZWVuOiBpc0Z1bGxzY3JlZW4gPyAxIDogMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInRvZ2dsZUZ1bGxzY3JlZW4iLCJhcGlFbmRwb2ludCIsImZ1bGxzY3JlZW5DbGFzcyIsImlzRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhY3Rpb24iLCJub25jZSIsIk9wc1NjcmlwdERhdGEiLCJpc0Z1bGxTY3JlZW4iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fullscreen.js\n");

/***/ }),

/***/ "./src/tests/tests.js":
/*!****************************!*\
  !*** ./src/tests/tests.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/fullscreen */ \"./src/js/fullscreen.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Add fullscreen toggle event\n  document.querySelector('.opui-fullscreen-btn').addEventListener('click', function (event) {\n    event.preventDefault();\n    (0,_js_fullscreen__WEBPACK_IMPORTED_MODULE_0__.toggleFullscreen)('https://jsonplaceholder.typicode.com/posts/1');\n  }, false);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdHMvdGVzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JEO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixzQkFBdkIsRUFBK0NELGdCQUEvQyxDQUFnRSxPQUFoRSxFQUF5RSxVQUFVRSxLQUFWLEVBQWlCO0FBQ3RGQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQUwsSUFBQUEsZ0VBQWdCLENBQUMsOENBQUQsQ0FBaEI7QUFDSCxHQUhELEVBR0csS0FISDtBQUlILENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpbWl6ZXByZXNzLXVpLy4vc3JjL3Rlc3RzL3Rlc3RzLmpzP2NlOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b2dnbGVGdWxsc2NyZWVufSBmcm9tIFwiLi4vanMvZnVsbHNjcmVlblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBBZGQgZnVsbHNjcmVlbiB0b2dnbGUgZXZlbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B1aS1mdWxsc2NyZWVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xJyk7XG4gICAgfSwgZmFsc2UpO1xufSk7XG4iXSwibmFtZXMiOlsidG9nZ2xlRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tests/tests.js\n");

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
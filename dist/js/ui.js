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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFullscreen\": () => (/* binding */ toggleFullscreen)\n/* harmony export */ });\nfunction toggleFullscreen(apiEndpoint) {\n  var fullscreenClass = 'opui-app-is-fullscreen';\n  var isFullscreen = document.body.classList.contains(fullscreenClass); // Check if class exists in list\n\n  if (!isFullscreen) {\n    document.body.classList.add(fullscreenClass);\n  } else {\n    document.body.classList.remove(fullscreenClass);\n  } // Send toggle request to API backend if needed\n\n\n  if (apiEndpoint) {\n    fetch(apiEndpoint).then(function (response) {// console.log(\"Toggled fullscreen\");\n    });\n  }\n} // Old functionality (need to add request to API)\n// let $body = jQuery('body')\n// $body.toggleClass('ops_isFullScreen')\n//\n// const params = new URLSearchParams()\n// params.append('action', 'op3toggleFullScreen')\n// params.append('isFullScreen', $body.hasClass('ops_isFullScreen'))\n//\n// this.$http.post(this.$store.state.settings.ajax_url, params)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZnVsbHNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDO0FBQzFDLE1BQUlDLGVBQWUsR0FBRyx3QkFBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQ0wsZUFBakMsQ0FBdEIsQ0FGMEMsQ0FJMUM7O0FBQ0EsTUFBSSxDQUFFQyxZQUFOLEVBQW9CO0FBQ2hCQyxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEJOLGVBQTVCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hFLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQlAsZUFBL0I7QUFDSCxHQVR5QyxDQVcxQzs7O0FBQ0EsTUFBSUQsV0FBSixFQUFpQjtBQUNiUyxJQUFBQSxLQUFLLENBQUNULFdBQUQsQ0FBTCxDQUNLVSxJQURMLENBQ1UsVUFBU0MsUUFBVCxFQUFtQixDQUNyQjtBQUNILEtBSEw7QUFJSDtBQUNKLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3B0aW1pemVwcmVzcy11aS8uL3NyYy9qcy9mdWxsc2NyZWVuLmpzP2E0ODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oYXBpRW5kcG9pbnQpIHtcbiAgICBsZXQgZnVsbHNjcmVlbkNsYXNzID0gJ29wdWktYXBwLWlzLWZ1bGxzY3JlZW4nO1xuICAgIGxldCBpc0Z1bGxzY3JlZW4gICAgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhmdWxsc2NyZWVuQ2xhc3MpO1xuXG4gICAgLy8gQ2hlY2sgaWYgY2xhc3MgZXhpc3RzIGluIGxpc3RcbiAgICBpZiAoISBpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0b2dnbGUgcmVxdWVzdCB0byBBUEkgYmFja2VuZCBpZiBuZWVkZWRcbiAgICBpZiAoYXBpRW5kcG9pbnQpIHtcbiAgICAgICAgZmV0Y2goYXBpRW5kcG9pbnQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG9nZ2xlZCBmdWxsc2NyZWVuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyBPbGQgZnVuY3Rpb25hbGl0eSAobmVlZCB0byBhZGQgcmVxdWVzdCB0byBBUEkpXG4vLyBsZXQgJGJvZHkgPSBqUXVlcnkoJ2JvZHknKVxuLy8gJGJvZHkudG9nZ2xlQ2xhc3MoJ29wc19pc0Z1bGxTY3JlZW4nKVxuLy9cbi8vIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuLy8gcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ29wM3RvZ2dsZUZ1bGxTY3JlZW4nKVxuLy8gcGFyYW1zLmFwcGVuZCgnaXNGdWxsU2NyZWVuJywgJGJvZHkuaGFzQ2xhc3MoJ29wc19pc0Z1bGxTY3JlZW4nKSlcbi8vXG4vLyB0aGlzLiRodHRwLnBvc3QodGhpcy4kc3RvcmUuc3RhdGUuc2V0dGluZ3MuYWpheF91cmwsIHBhcmFtcylcbiJdLCJuYW1lcyI6WyJ0b2dnbGVGdWxsc2NyZWVuIiwiYXBpRW5kcG9pbnQiLCJmdWxsc2NyZWVuQ2xhc3MiLCJpc0Z1bGxzY3JlZW4iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/fullscreen.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreen */ \"./src/js/fullscreen.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Loaded OPUI scripts\", _fullscreen__WEBPACK_IMPORTED_MODULE_0__.toggleFullscreen);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0oseURBQW5DO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL29wdGltaXplcHJlc3MtdWkvLi9zcmMvanMvdWkuanM/YWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RvZ2dsZUZ1bGxzY3JlZW59IGZyb20gJy4vZnVsbHNjcmVlbidcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgT1BVSSBzY3JpcHRzXCIsIHRvZ2dsZUZ1bGxzY3JlZW4pO1xufSk7XG4iXSwibmFtZXMiOlsidG9nZ2xlRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

/***/ }),

/***/ "./src/scss/ui.scss":
/*!**************************!*\
  !*** ./src/scss/ui.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy91aS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wdGltaXplcHJlc3MtdWkvLi9zcmMvc2Nzcy91aS5zY3NzPzhjMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/ui.scss\n");

/***/ }),

/***/ "./src/scss/ui-reboot.scss":
/*!*********************************!*\
  !*** ./src/scss/ui-reboot.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy91aS1yZWJvb3Quc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpbWl6ZXByZXNzLXVpLy4vc3JjL3Njc3MvdWktcmVib290LnNjc3M/ODM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/ui-reboot.scss\n");

/***/ }),

/***/ "./src/scss/ui-grid.scss":
/*!*******************************!*\
  !*** ./src/scss/ui-grid.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy91aS1ncmlkLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3B0aW1pemVwcmVzcy11aS8uL3NyYy9zY3NzL3VpLWdyaWQuc2Nzcz80YjZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/ui-grid.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/ui": 0,
/******/ 			"css/grid": 0,
/******/ 			"css/reboot": 0,
/******/ 			"css/ui": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoptimizepress_ui"] = self["webpackChunkoptimizepress_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/js/ui.js")))
/******/ 	__webpack_require__.O(undefined, ["css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui-reboot.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui-grid.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
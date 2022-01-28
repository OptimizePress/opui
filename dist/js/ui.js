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

/***/ "./src/js/check-switch.js":
/*!********************************!*\
  !*** ./src/js/check-switch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkSwitch\": () => (/* binding */ checkSwitch)\n/* harmony export */ });\nfunction checkSwitch() {\n  console.log(\"Not yet implemented.\");\n}\n/*\n_this.$couponsList.on('change', '.ops-onoffswitch-checkbox', (e) => {\n            e.preventDefault();\n\n            let $this = $(e.currentTarget);\n            let $listCoupon = $this.closest('.opc-coupons-list-coupon');\n\n            let responsePromise = OPC_Coupon.enable(\n                $listCoupon.data('coupon-id'),\n                $listCoupon.data('coupon-enable-nonce'),\n                $this.prop('checked')\n            );\n            responsePromise.then((response) => {\n                if (response.success) {\n                    $this.prop('checked', response.data.coupon.active);\n                } else {\n                    _this['showError']('Response Error', response.data.message);\n                }\n            }, (rejected) => {\n                $this.prop('checked', false);\n                if (rejected.responseJSON) {\n                    _this['showError']('Error', rejected.responseJSON.data.message);\n                } else {\n                    _this['showError']('No Response', rejected);\n                }\n            });\n        });\n *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2hlY2stc3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxXQUFULEdBQXVCO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNIO0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHRpbWl6ZXByZXNzLXVpLy4vc3JjL2pzL2NoZWNrLXN3aXRjaC5qcz9mODRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjaGVja1N3aXRjaCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpO1xufVxuXG5cbi8qXG5fdGhpcy4kY291cG9uc0xpc3Qub24oJ2NoYW5nZScsICcub3BzLW9ub2Zmc3dpdGNoLWNoZWNrYm94JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0ICRsaXN0Q291cG9uID0gJHRoaXMuY2xvc2VzdCgnLm9wYy1jb3Vwb25zLWxpc3QtY291cG9uJyk7XG5cbiAgICAgICAgICAgIGxldCByZXNwb25zZVByb21pc2UgPSBPUENfQ291cG9uLmVuYWJsZShcbiAgICAgICAgICAgICAgICAkbGlzdENvdXBvbi5kYXRhKCdjb3Vwb24taWQnKSxcbiAgICAgICAgICAgICAgICAkbGlzdENvdXBvbi5kYXRhKCdjb3Vwb24tZW5hYmxlLW5vbmNlJyksXG4gICAgICAgICAgICAgICAgJHRoaXMucHJvcCgnY2hlY2tlZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucHJvcCgnY2hlY2tlZCcsIHJlc3BvbnNlLmRhdGEuY291cG9uLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXNbJ3Nob3dFcnJvciddKCdSZXNwb25zZSBFcnJvcicsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKHJlamVjdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgJHRoaXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVqZWN0ZWQucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzWydzaG93RXJyb3InXSgnRXJyb3InLCByZWplY3RlZC5yZXNwb25zZUpTT04uZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpc1snc2hvd0Vycm9yJ10oJ05vIFJlc3BvbnNlJywgcmVqZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAqL1xuIl0sIm5hbWVzIjpbImNoZWNrU3dpdGNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/check-switch.js\n");

/***/ }),

/***/ "./src/js/fullscreen.js":
/*!******************************!*\
  !*** ./src/js/fullscreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFullscreen\": () => (/* binding */ toggleFullscreen)\n/* harmony export */ });\nfunction toggleFullscreen(apiEndpoint) {\n  var fullscreenClass = 'opui-app-is-fullscreen';\n  var isFullscreen = document.body.classList.contains(fullscreenClass); // Check if class exists in list\n\n  if (!isFullscreen) {\n    document.body.classList.add(fullscreenClass);\n    isFullscreen = true;\n  } else {\n    document.body.classList.remove(fullscreenClass);\n    isFullscreen = false;\n  } // Send toggle request to API backend if needed\n\n\n  if (apiEndpoint) {\n    fetch(apiEndpoint, {\n      method: 'POST',\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        'Cache-Control': 'no-cache'\n      },\n      body: new URLSearchParams({\n        action: 'op3toggleFullScreen',\n        nonce: OpsScriptData.nonce,\n        isFullScreen: isFullscreen ? 1 : 0\n      })\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZnVsbHNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDO0FBQzFDLE1BQUlDLGVBQWUsR0FBRyx3QkFBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQ0wsZUFBakMsQ0FBbkIsQ0FGMEMsQ0FJMUM7O0FBQ0EsTUFBSSxDQUFDQyxZQUFMLEVBQW1CO0FBQ2ZDLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxHQUF4QixDQUE0Qk4sZUFBNUI7QUFDQUMsSUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDSCxHQUhELE1BR087QUFDSEMsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCUCxlQUEvQjtBQUNBQyxJQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNILEdBWHlDLENBYTFDOzs7QUFDQSxNQUFJRixXQUFKLEVBQWlCO0FBQ2JTLElBQUFBLEtBQUssQ0FBQ1QsV0FBRCxFQUFjO0FBQ2ZVLE1BQUFBLE1BQU0sRUFBRSxNQURPO0FBRWZDLE1BQUFBLFdBQVcsRUFBRSxhQUZFO0FBR2ZDLE1BQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQixtQ0FEWDtBQUVMLHlCQUFpQjtBQUZaLE9BSE07QUFPZlIsTUFBQUEsSUFBSSxFQUFFLElBQUlTLGVBQUosQ0FBb0I7QUFDdEJDLFFBQUFBLE1BQU0sRUFBRSxxQkFEYztBQUV0QkMsUUFBQUEsS0FBSyxFQUFFQyxhQUFhLENBQUNELEtBRkM7QUFHdEJFLFFBQUFBLFlBQVksRUFBRWYsWUFBWSxHQUFHLENBQUgsR0FBTztBQUhYLE9BQXBCO0FBUFMsS0FBZCxDQUFMLFVBYU8sVUFBQ2dCLEtBQUQsRUFBVztBQUNkQyxNQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNILEtBZkQ7QUFnQkg7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL29wdGltaXplcHJlc3MtdWkvLi9zcmMvanMvZnVsbHNjcmVlbi5qcz9hNDg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKGFwaUVuZHBvaW50KSB7XG4gICAgbGV0IGZ1bGxzY3JlZW5DbGFzcyA9ICdvcHVpLWFwcC1pcy1mdWxsc2NyZWVuJztcbiAgICBsZXQgaXNGdWxsc2NyZWVuID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoZnVsbHNjcmVlbkNsYXNzKTtcblxuICAgIC8vIENoZWNrIGlmIGNsYXNzIGV4aXN0cyBpbiBsaXN0XG4gICAgaWYgKCFpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgICAgIGlzRnVsbHNjcmVlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGZ1bGxzY3JlZW5DbGFzcyk7XG4gICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdG9nZ2xlIHJlcXVlc3QgdG8gQVBJIGJhY2tlbmQgaWYgbmVlZGVkXG4gICAgaWYgKGFwaUVuZHBvaW50KSB7XG4gICAgICAgIGZldGNoKGFwaUVuZHBvaW50LCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnb3AzdG9nZ2xlRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgbm9uY2U6IE9wc1NjcmlwdERhdGEubm9uY2UsXG4gICAgICAgICAgICAgICAgaXNGdWxsU2NyZWVuOiBpc0Z1bGxzY3JlZW4gPyAxIDogMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInRvZ2dsZUZ1bGxzY3JlZW4iLCJhcGlFbmRwb2ludCIsImZ1bGxzY3JlZW5DbGFzcyIsImlzRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhY3Rpb24iLCJub25jZSIsIk9wc1NjcmlwdERhdGEiLCJpc0Z1bGxTY3JlZW4iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fullscreen.js\n");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreen */ \"./src/js/fullscreen.js\");\n/* harmony import */ var _check_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-switch */ \"./src/js/check-switch.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Loaded OPUI scripts\", _fullscreen__WEBPACK_IMPORTED_MODULE_0__.toggleFullscreen, _check_switch__WEBPACK_IMPORTED_MODULE_1__.checkSwitch);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdWkuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0wseURBQW5DLEVBQXFEQyxzREFBckQ7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3B0aW1pemVwcmVzcy11aS8uL3NyYy9qcy91aS5qcz9hYWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZ2dsZUZ1bGxzY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nXG5pbXBvcnQgeyBjaGVja1N3aXRjaCB9IGZyb20gJy4vY2hlY2stc3dpdGNoJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBPUFVJIHNjcmlwdHNcIiwgdG9nZ2xlRnVsbHNjcmVlbiwgY2hlY2tTd2l0Y2gpO1xufSk7XG4iXSwibmFtZXMiOlsidG9nZ2xlRnVsbHNjcmVlbiIsImNoZWNrU3dpdGNoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ui.js\n");

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

/***/ }),

/***/ "./src/tests/scss/tests.scss":
/*!***********************************!*\
  !*** ./src/tests/scss/tests.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdHMvc2Nzcy90ZXN0cy5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wdGltaXplcHJlc3MtdWkvLi9zcmMvdGVzdHMvc2Nzcy90ZXN0cy5zY3NzPzEyOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tests/scss/tests.scss\n");

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
/******/ 			"tests/tests": 0,
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
/******/ 	__webpack_require__.O(undefined, ["tests/tests","css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/js/ui.js")))
/******/ 	__webpack_require__.O(undefined, ["tests/tests","css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui.scss")))
/******/ 	__webpack_require__.O(undefined, ["tests/tests","css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui-reboot.scss")))
/******/ 	__webpack_require__.O(undefined, ["tests/tests","css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/scss/ui-grid.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tests/tests","css/grid","css/reboot","css/ui"], () => (__webpack_require__("./src/tests/scss/tests.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
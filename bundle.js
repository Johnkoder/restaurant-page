/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n\r\nfunction contact() {\r\n    const section = document.createElement('section');\r\n    section.className = 'page-contact';\r\n    section.innerHTML = `\r\n        <h1>Contact Us</h1>\r\n        <div>\r\n            <p>John Doe</p>\r\n            <div>9999-999-999</div>\r\n        </div>\r\n    `;\r\n    return section;\r\n}\n\n//# sourceURL=webpack://src/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n\r\nfunction home() {\r\n    const section = document.createElement('section');\r\n    section.className = 'page-home';\r\n    section.innerHTML = `\r\n        <h1>Savory Street</h1>\r\n        <p>\r\n            “At Savory Street, we believe food is more than just a meal — it’s a moment to savor. Our chefs prepare each dish with love, using only the freshest ingredients. Whether you’re stopping by for a quick lunch or celebrating a special occasion, we’re here to make every visit memorable.\r\n        </p>\r\n\r\n        <div>\r\n            <h2>Location</h2>\r\n            <p>123 True Drive, BrieVille, Dune</p>\r\n        </div>\r\n    `;\r\n    return section;\r\n}\n\n//# sourceURL=webpack://src/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst homeBtn = document.getElementById('home-btn');\r\nconst menuBtn = document.getElementById('menu-btn');\r\nconst contactBtn = document.getElementById('contact-btn');\r\n// remove all children of content div and append section\r\nfunction replaceHTML(section) {\r\n    content.replaceChildren();  \r\n    content.append(section);\r\n}\r\n// Button event listeners\r\nhomeBtn.addEventListener('click', ()=> replaceHTML((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()));\r\nmenuBtn.addEventListener('click', ()=> replaceHTML((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\r\ncontactBtn.addEventListener('click', ()=> replaceHTML((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()));\r\n// Initial Display\r\ncontent.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://src/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n\r\nfunction menu() {\r\n    const section = document.createElement('section');\r\n    section.className = 'page-menu';\r\n    section.innerHTML = `\r\n        <h1>Menu</h1>\r\n        <div class=\"menu-container\">\r\n            <div class=\"menu-item\">\r\n                <h3>Name</h3>\r\n                <p>Description</p>\r\n            </div>\r\n        </div>\r\n    `;\r\n    return section;\r\n}\n\n//# sourceURL=webpack://src/./src/menu.js?\n}");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/sass/main.scss":
/*!***********************************!*\
  !*** ./assets/src/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/javascript/components/skip-link.js":
/*!*******************************************************!*\
  !*** ./assets/src/javascript/components/skip-link.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SkipLink {
    static selector() {
        return '[data-skip-link]';
    }
    constructor(node) {
        this.skipLink = node;
        this.main = document.querySelector('main');
        if (this.skipLink && this.main) {
            this.skipLink.addEventListener('click', () => this.handleClick());
        }
    }
    handleClick() {
        this.main.setAttribute('tabindex', -1);
        this.main.addEventListener('blur', () => this.handleBlur());
        this.main.addEventListener('focusout', () => this.handleBlur());
        this.main.focus();
    }
    handleBlur() {
        this.main.removeAttribute('tabindex');
        this.main.removeEventListener('blur', this.handleBlur);
        this.main.removeEventListener('focusout', this.handleBlur);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipLink);


/***/ }),

/***/ "./assets/src/javascript/components/storage.js":
/*!*****************************************************!*\
  !*** ./assets/src/javascript/components/storage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storage)
/* harmony export */ });
function storage() {
    const formInputs = document.querySelectorAll('[data-form]');
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');
    const editButton = document.getElementById('edit');
    const userData = [];
    // Retrieve from localStorage or create new
    const storeLabel = 'NSHCS-TMS-store';
    const store = JSON.parse(localStorage.getItem(storeLabel)) || [];
    // Define input data shape
    class FormInput {
        constructor(id, dataName, type, value) {
            this.id = id;
            this.dataName = dataName;
            this.type = type;
            this.value = value;
        }
    }
    // Create object from user input
    function buildData() {
        // Scrape all form inputs with data-form="[foo]"
        formInputs.forEach((item, i) => {
            const element = document.querySelector(`[data-form='${item.dataset.form}']`);
            const inputObject = new FormInput(i, element.dataset.form, element.type, element.value);
            userData.push(inputObject);
        });
        return userData;
    }
    // Update local storage with new content
    function saveInitialData(redirect) {
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));
        // Navigate to edit page
        if (redirect) {
            window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/edit.html'));
        }
    }
    // Populate data in DOM if it already exists in localStorage
    function populateData() {
        if (store) {
            store.forEach((item) => {
                const targetElement = document.querySelector(`[data-form='${item.dataName}']`);
                targetElement.value = item.value;
            });
        }
    }
    function clearData() {
        localStorage.removeItem(storeLabel);
        window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/index.html'));
    }
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            saveInitialData(true);
        });
    }
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            clearData();
        });
    }
    if (editButton) {
        editButton.addEventListener('click', () => {
            window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/index.html'));
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        populateData();
    });
}
storage();


/***/ }),

/***/ "./assets/src/javascript/polyfills/closest-polyfill.js":
/*!*************************************************************!*\
  !*** ./assets/src/javascript/polyfills/closest-polyfill.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closestPolyfill)
/* harmony export */ });
function closestPolyfill() {
    /* eslint-disable */
    // Closest polyfill see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            let el = this;
            do {
                if (el.matches(s))
                    return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
}


/***/ }),

/***/ "./assets/src/javascript/polyfills/foreach-polyfill.js":
/*!*************************************************************!*\
  !*** ./assets/src/javascript/polyfills/foreach-polyfill.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ foreachPolyfill)
/* harmony export */ });
function foreachPolyfill() {
    // forEach polyfill see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./assets/src/javascript/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_skip_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/skip-link */ "./assets/src/javascript/components/skip-link.js");
/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/storage */ "./assets/src/javascript/components/storage.js");
/* harmony import */ var _polyfills_foreach_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills/foreach-polyfill */ "./assets/src/javascript/polyfills/foreach-polyfill.js");
/* harmony import */ var _polyfills_closest_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfills/closest-polyfill */ "./assets/src/javascript/polyfills/closest-polyfill.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/main.scss */ "./assets/src/sass/main.scss");


// IE11 polyfills



(0,_polyfills_foreach_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_polyfills_closest_polyfill__WEBPACK_IMPORTED_MODULE_3__["default"])();
function initComponent(ComponentClass) {
    const items = document.querySelectorAll(ComponentClass.selector());
    items.forEach((item) => new ComponentClass(item));
}
document.addEventListener('DOMContentLoaded', () => {
    /* eslint-disable no-new */
    initComponent(_components_skip_link__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxNQUFNLFFBQVE7SUFDVixNQUFNLENBQUMsUUFBUTtRQUNYLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QlQsU0FBUyxPQUFPO0lBQzNCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFcEIsMkNBQTJDO0lBQzNDLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVqRSwwQkFBMEI7SUFDMUIsTUFBTSxTQUFTO1FBQ1gsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLO1lBQ2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztLQUNKO0lBRUQsZ0NBQWdDO0lBQ2hDLFNBQVMsU0FBUztRQUNkLGdEQUFnRDtRQUNoRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ2xDLGVBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FDdkMsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHLElBQUksU0FBUyxDQUM3QixDQUFDLEVBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ3BCLE9BQU8sQ0FBQyxJQUFJLEVBQ1osT0FBTyxDQUFDLEtBQUssQ0FDaEIsQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLFNBQVMsZUFBZSxDQUFDLFFBQVE7UUFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUQsd0JBQXdCO1FBQ3hCLElBQUksUUFBUSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQzlELENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsU0FBUyxZQUFZO1FBQ2pCLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN4QyxlQUFlLElBQUksQ0FBQyxRQUFRLElBQUksQ0FDbkMsQ0FBQztnQkFFRixhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxTQUFTLFNBQVM7UUFDZCxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksVUFBVSxFQUFFO1FBQ1osVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDdEMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFFRCxJQUFJLFdBQVcsRUFBRTtRQUNiLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFFRCxJQUFJLFVBQVUsRUFBRTtRQUNaLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUMvRCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7UUFDL0MsWUFBWSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BHSyxTQUFTLGVBQWU7SUFDbkMsb0JBQW9CO0lBQ3BCLGlHQUFpRztJQUNqRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO0tBQy9DO0lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUNuQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFZCxHQUFHO2dCQUNDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDMUMsUUFBUSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztLQUNMO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJjLFNBQVMsZUFBZTtJQUNuQyxrR0FBa0c7SUFDbEcsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7UUFDaEQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7S0FDeEQ7QUFDTCxDQUFDOzs7Ozs7O1VDTEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDaEI7QUFFOUIsaUJBQWlCO0FBQzBDO0FBQ0E7QUFFaEM7QUFFM0IsdUVBQWUsRUFBRSxDQUFDO0FBQ2xCLHVFQUFlLEVBQUUsQ0FBQztBQUVsQixTQUFTLGFBQWEsQ0FBQyxjQUFjO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLDJCQUEyQjtJQUMzQixhQUFhLENBQUMsNkRBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvLi9hc3NldHMvc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9za2lwLWxpbmsuanMiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvLi9hc3NldHMvc3JjL2phdmFzY3JpcHQvcG9seWZpbGxzL2Nsb3Nlc3QtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L3BvbHlmaWxscy9mb3JlYWNoLXBvbHlmaWxsLmpzIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05IU0NELVRNUy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIFNraXBMaW5rIHtcbiAgICBzdGF0aWMgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtc2tpcC1saW5rXSc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLnNraXBMaW5rID0gbm9kZTtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgICAgIGlmICh0aGlzLnNraXBMaW5rICYmIHRoaXMubWFpbikge1xuICAgICAgICAgICAgdGhpcy5za2lwTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5tYWluLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG4gICAgICAgIHRoaXMubWFpbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCkpO1xuICAgICAgICB0aGlzLm1haW4uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKSk7XG4gICAgICAgIHRoaXMubWFpbi5mb2N1cygpO1xuICAgIH1cblxuICAgIGhhbmRsZUJsdXIoKSB7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyKTtcbiAgICAgICAgdGhpcy5tYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5oYW5kbGVCbHVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraXBMaW5rO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZSgpIHtcbiAgICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9ybV0nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdCcpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gW107XG5cbiAgICAvLyBSZXRyaWV2ZSBmcm9tIGxvY2FsU3RvcmFnZSBvciBjcmVhdGUgbmV3XG4gICAgY29uc3Qgc3RvcmVMYWJlbCA9ICdOU0hDUy1UTVMtc3RvcmUnO1xuICAgIGNvbnN0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUxhYmVsKSkgfHwgW107XG5cbiAgICAvLyBEZWZpbmUgaW5wdXQgZGF0YSBzaGFwZVxuICAgIGNsYXNzIEZvcm1JbnB1dCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBkYXRhTmFtZSwgdHlwZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMuZGF0YU5hbWUgPSBkYXRhTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgb2JqZWN0IGZyb20gdXNlciBpbnB1dFxuICAgIGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgICAgLy8gU2NyYXBlIGFsbCBmb3JtIGlucHV0cyB3aXRoIGRhdGEtZm9ybT1cIltmb29dXCJcbiAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZm9ybT0nJHtpdGVtLmRhdGFzZXQuZm9ybX0nXWAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dE9iamVjdCA9IG5ldyBGb3JtSW5wdXQoXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZm9ybSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LnR5cGUsXG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHVzZXJEYXRhLnB1c2goaW5wdXRPYmplY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBuZXcgY29udGVudFxuICAgIGZ1bmN0aW9uIHNhdmVJbml0aWFsRGF0YShyZWRpcmVjdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUxhYmVsLCBKU09OLnN0cmluZ2lmeShidWlsZERhdGEoKSkpO1xuXG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIGVkaXQgcGFnZVxuICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sICcvZWRpdC5odG1sJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUG9wdWxhdGUgZGF0YSBpbiBET00gaWYgaXQgYWxyZWFkeSBleGlzdHMgaW4gbG9jYWxTdG9yYWdlXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVEYXRhKCkge1xuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYFtkYXRhLWZvcm09JyR7aXRlbS5kYXRhTmFtZX0nXWAsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckRhdGEoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JlTGFiZWwpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgJy9pbmRleC5odG1sJyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVCdXR0b24pIHtcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNhdmVJbml0aWFsRGF0YSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFyQnV0dG9uKSB7XG4gICAgICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlZGl0QnV0dG9uKSB7XG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCAnL2luZGV4Lmh0bWwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlRGF0YSgpO1xuICAgIH0pO1xufVxuXG5zdG9yYWdlKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZXN0UG9seWZpbGwoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBDbG9zZXN0IHBvbHlmaWxsIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbG9zZXN0I1BvbHlmaWxsXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMocykpIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcmVhY2hQb2x5ZmlsbCgpIHtcbiAgICAvLyBmb3JFYWNoIHBvbHlmaWxsIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNQb2x5ZmlsbFxuICAgIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2tpcExpbmsgZnJvbSAnLi9jb21wb25lbnRzL3NraXAtbGluayc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yYWdlJztcblxuLy8gSUUxMSBwb2x5ZmlsbHNcbmltcG9ydCBmb3JlYWNoUG9seWZpbGwgZnJvbSAnLi9wb2x5ZmlsbHMvZm9yZWFjaC1wb2x5ZmlsbCc7XG5pbXBvcnQgY2xvc2VzdFBvbHlmaWxsIGZyb20gJy4vcG9seWZpbGxzL2Nsb3Nlc3QtcG9seWZpbGwnO1xuXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJztcblxuZm9yZWFjaFBvbHlmaWxsKCk7XG5jbG9zZXN0UG9seWZpbGwoKTtcblxuZnVuY3Rpb24gaW5pdENvbXBvbmVudChDb21wb25lbnRDbGFzcykge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChDb21wb25lbnRDbGFzcy5zZWxlY3RvcigpKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBuZXcgQ29tcG9uZW50Q2xhc3MoaXRlbSkpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuICAgIGluaXRDb21wb25lbnQoU2tpcExpbmspO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
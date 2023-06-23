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
    const saveButton = document.querySelectorAll('[data-save]');
    const cancelButton = document.querySelector('[data-cancel]');
    const editButton = document.querySelectorAll('[data-edit]');
    const clearButton = document.getElementById('clear');
    const nameHeading = document.querySelector('[data-name-heading]');
    const statusContainer = document.querySelector('[data-status-container');
    const mode = document
        .querySelector('[data-mode]')
        .getAttribute('data-mode');
    const userData = [];
    const storeLabel = 'NSHCS-TMS-store';
    const store = JSON.parse(localStorage.getItem(storeLabel)) || [];
    /* eslint-disable no-useless-escape */
    // Define item shape
    class FormInput {
        constructor(id, dataName, status, preferred, type, value, checked) {
            this.id = id;
            this.dataName = dataName;
            this.status = status;
            this.preferred = preferred;
            this.type = type;
            this.value = value;
            this.checked = checked;
        }
    }
    // Create object from user input
    function buildData() {
        // Scrape all form inputs with data-form="[foo]"
        formInputs.forEach((item, i) => {
            const element = document.querySelector(`[data-form='${item.dataset.form}']`);
            const inputObject = new FormInput(i, element.dataset.form, element.dataset.status, element.dataset.preferred, element.type, element.value, element.checked);
            userData.push(inputObject);
        });
        return userData;
    }
    // Update local storage with new content
    function saveInitialData(redirect) {
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));
        // Navigate to view page once saved
        if (redirect) {
            window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/details-view.html'));
        }
    }
    // Hacky function to fix hacky storage of dates
    // Generates a short or long human readable date
    function stringsToDates() {
        // This contains either two or three spans, each containing part of the date
        const element = document.querySelectorAll('[data-date]');
        element.forEach((item) => {
            const dateType = item.childElementCount === 3 ? 'full' : 'reduced';
            const hyphenatedDate = item.textContent.replace(/\s+/g, '-');
            const cleanDate = hyphenatedDate.replace(/(^\-+|\-+$)/gm, '');
            const longDateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            const shortDateOptions = { year: 'numeric', month: 'long' };
            item.innerHTML = new Date(cleanDate).toLocaleDateString('en-GB', dateType === 'full' ? longDateOptions : shortDateOptions);
            // If anything goes wrong, just delete it!
            if (item.innerHTML === 'Invalid Date') {
                item.parentNode.remove();
            }
        });
    }
    // Find any empty nodes and remove the block entirely
    function removeEmptyFields() {
        document.querySelectorAll('[data-form]').forEach((item) => {
            if (item.getAttribute('data-no-hide') === 'true') {
                // console.log(item);
            }
            else if (item.textContent.length === 0) {
                item.parentNode.remove();
            }
        });
    }
    // Populate data in DOM if it already exists in localStorage
    function populateData() {
        if (store) {
            store.forEach((item) => {
                // Build status tags
                if (item.status && item.checked) {
                    const tag = document.createElement('div');
                    tag.textContent = item.value;
                    tag.classList.add('tag', 'tag--green');
                    statusContainer.appendChild(tag);
                }
                const targetElement = document.querySelector(`[data-form='${item.dataName}']`);
                if (targetElement) {
                    // Set page title (user's name)
                    if (item.dataName === 'name') {
                        nameHeading.textContent = item.value;
                        targetElement.checked = item.checked;
                    }
                    if (mode === 'edit') {
                        targetElement.value = item.value;
                        // Special treatment for radio/checkboxes
                        if (item.type === 'radio' || item.type === 'checkbox') {
                            if (item.checked) {
                                targetElement.checked = true;
                            }
                        }
                    }
                    else {
                        targetElement.textContent = item.value;
                        // More special treatment for these fields in view mode
                        if (item.type === 'email' && item.value) {
                            targetElement.innerHTML = `<a href=mailto:${item.value}>${item.value}</a>`;
                        }
                        if (item.type === 'checkbox') {
                            targetElement.textContent = item.checked
                                ? 'Yes'
                                : 'No';
                        }
                        if (item.type === 'radio') {
                            targetElement.textContent = '';
                            if (item.checked) {
                                if (item.preferred) {
                                    targetElement.innerHTML = `<div
                                            class="tag tag--light-blue tag--width-auto"
                                        >Preferred</div>`;
                                }
                                else {
                                    targetElement.textContent = item.value;
                                }
                            }
                        }
                    }
                }
            });
        }
        if (mode === 'view') {
            // Generate nicer-looking dates for UT
            stringsToDates();
            // Strip empties
            removeEmptyFields();
        }
    }
    if (saveButton) {
        saveButton.forEach((item) => {
            item.addEventListener('click', () => {
                saveInitialData(true);
            });
        });
    }
    if (editButton) {
        editButton.forEach((item) => {
            item.addEventListener('click', () => {
                window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/index.html'));
            });
        });
    }
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            populateData();
            window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, '/details-view.html'));
        });
    }
    // Dev helper
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            localStorage.removeItem(storeLabel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2NzcyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvLi9hc3NldHMvc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9za2lwLWxpbmsuanMiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvLi9hc3NldHMvc3JjL2phdmFzY3JpcHQvcG9seWZpbGxzL2Nsb3Nlc3QtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L3BvbHlmaWxscy9mb3JlYWNoLXBvbHlmaWxsLmpzIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL05IU0NELVRNUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05IU0NELVRNUy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIFNraXBMaW5rIHtcbiAgICBzdGF0aWMgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtc2tpcC1saW5rXSc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLnNraXBMaW5rID0gbm9kZTtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgICAgIGlmICh0aGlzLnNraXBMaW5rICYmIHRoaXMubWFpbikge1xuICAgICAgICAgICAgdGhpcy5za2lwTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5tYWluLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG4gICAgICAgIHRoaXMubWFpbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCkpO1xuICAgICAgICB0aGlzLm1haW4uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKSk7XG4gICAgICAgIHRoaXMubWFpbi5mb2N1cygpO1xuICAgIH1cblxuICAgIGhhbmRsZUJsdXIoKSB7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyKTtcbiAgICAgICAgdGhpcy5tYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5oYW5kbGVCbHVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraXBMaW5rO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZSgpIHtcbiAgICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9ybV0nKTtcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2F2ZV0nKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYW5jZWxdJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVkaXRdJyk7XG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICBjb25zdCBuYW1lSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWUtaGVhZGluZ10nKTtcbiAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdGF0dXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9kZSA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RlXScpXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kZScpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gW107XG4gICAgY29uc3Qgc3RvcmVMYWJlbCA9ICdOU0hDUy1UTVMtc3RvcmUnO1xuICAgIGNvbnN0IHN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZUxhYmVsKSkgfHwgW107XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuXG4gICAgLy8gRGVmaW5lIGl0ZW0gc2hhcGVcbiAgICBjbGFzcyBGb3JtSW5wdXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZGF0YU5hbWUsIHN0YXR1cywgcHJlZmVycmVkLCB0eXBlLCB2YWx1ZSwgY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAgICAgdGhpcy5kYXRhTmFtZSA9IGRhdGFOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnByZWZlcnJlZCA9IHByZWZlcnJlZDtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG9iamVjdCBmcm9tIHVzZXIgaW5wdXRcbiAgICBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICAgIC8vIFNjcmFwZSBhbGwgZm9ybSBpbnB1dHMgd2l0aCBkYXRhLWZvcm09XCJbZm9vXVwiXG4gICAgICAgIGZvcm1JbnB1dHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWZvcm09JyR7aXRlbS5kYXRhc2V0LmZvcm19J11gLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaW5wdXRPYmplY3QgPSBuZXcgRm9ybUlucHV0KFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZvcm0sXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnN0YXR1cyxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQucHJlZmVycmVkLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQudHlwZSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHVzZXJEYXRhLnB1c2goaW5wdXRPYmplY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBuZXcgY29udGVudFxuICAgIGZ1bmN0aW9uIHNhdmVJbml0aWFsRGF0YShyZWRpcmVjdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZUxhYmVsLCBKU09OLnN0cmluZ2lmeShidWlsZERhdGEoKSkpO1xuXG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHZpZXcgcGFnZSBvbmNlIHNhdmVkXG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgJy92aWV3Lmh0bWwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYWNreSBmdW5jdGlvbiB0byBmaXggaGFja3kgc3RvcmFnZSBvZiBkYXRlc1xuICAgIC8vIEdlbmVyYXRlcyBhIHNob3J0IG9yIGxvbmcgaHVtYW4gcmVhZGFibGUgZGF0ZVxuICAgIGZ1bmN0aW9uIHN0cmluZ3NUb0RhdGVzKCkge1xuICAgICAgICAvLyBUaGlzIGNvbnRhaW5zIGVpdGhlciB0d28gb3IgdGhyZWUgc3BhbnMsIGVhY2ggY29udGFpbmluZyBwYXJ0IG9mIHRoZSBkYXRlXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYXRlXScpO1xuXG4gICAgICAgIGVsZW1lbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVR5cGUgPSBpdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSAzID8gJ2Z1bGwnIDogJ3JlZHVjZWQnO1xuICAgICAgICAgICAgY29uc3QgaHlwaGVuYXRlZERhdGUgPSBpdGVtLnRleHRDb250ZW50LnJlcGxhY2UoL1xccysvZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuRGF0ZSA9IGh5cGhlbmF0ZWREYXRlLnJlcGxhY2UoLyheXFwtK3xcXC0rJCkvZ20sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGxvbmdEYXRlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzaG9ydERhdGVPcHRpb25zID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfTtcblxuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBuZXcgRGF0ZShjbGVhbkRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICAgICAgICAnZW4tR0InLFxuICAgICAgICAgICAgICAgIGRhdGVUeXBlID09PSAnZnVsbCcgPyBsb25nRGF0ZU9wdGlvbnMgOiBzaG9ydERhdGVPcHRpb25zLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSWYgYW55dGhpbmcgZ29lcyB3cm9uZywganVzdCBkZWxldGUgaXQhXG4gICAgICAgICAgICBpZiAoaXRlbS5pbm5lckhUTUwgPT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFueSBlbXB0eSBub2RlcyBhbmQgcmVtb3ZlIHRoZSBibG9jayBlbnRpcmVseVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5RmllbGRzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3JtXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uby1oaWRlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUG9wdWxhdGUgZGF0YSBpbiBET00gaWYgaXQgYWxyZWFkeSBleGlzdHMgaW4gbG9jYWxTdG9yYWdlXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVEYXRhKCkge1xuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgIHN0b3JlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBzdGF0dXMgdGFnc1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0YXR1cyAmJiBpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhZy50ZXh0Q29udGVudCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnLCAndGFnLS1ncmVlbicpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYFtkYXRhLWZvcm09JyR7aXRlbS5kYXRhTmFtZX0nXWAsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBwYWdlIHRpdGxlICh1c2VyJ3MgbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YU5hbWUgPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5jaGVja2VkID0gaXRlbS5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC52YWx1ZSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgdHJlYXRtZW50IGZvciByYWRpby9jaGVja2JveGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nIHx8IGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9yZSBzcGVjaWFsIHRyZWF0bWVudCBmb3IgdGhlc2UgZmllbGRzIGluIHZpZXcgbW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2VtYWlsJyAmJiBpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj1tYWlsdG86JHtpdGVtLnZhbHVlfT4ke2l0ZW0udmFsdWV9PC9hPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ1llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnTm8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJlZmVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFnIHRhZy0tbGlnaHQtYmx1ZSB0YWctLXdpZHRoLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5QcmVmZXJyZWQ8L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RlID09PSAndmlldycpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG5pY2VyLWxvb2tpbmcgZGF0ZXMgZm9yIFVUXG4gICAgICAgICAgICBzdHJpbmdzVG9EYXRlcygpO1xuXG4gICAgICAgICAgICAvLyBTdHJpcCBlbXB0aWVzXG4gICAgICAgICAgICByZW1vdmVFbXB0eUZpZWxkcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNhdmVCdXR0b24pIHtcbiAgICAgICAgc2F2ZUJ1dHRvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNhdmVJbml0aWFsRGF0YSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZWRpdEJ1dHRvbikge1xuICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgL1xcL1teXFwvXSokLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcvaW5kZXguaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBvcHVsYXRlRGF0YSgpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCAnL3ZpZXcuaHRtbCcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGV2IGhlbHBlclxuICAgIGlmIChjbGVhckJ1dHRvbikge1xuICAgICAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JlTGFiZWwpO1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCAnL2luZGV4Lmh0bWwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlRGF0YSgpO1xuICAgIH0pO1xufVxuXG5zdG9yYWdlKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZXN0UG9seWZpbGwoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBDbG9zZXN0IHBvbHlmaWxsIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbG9zZXN0I1BvbHlmaWxsXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMocykpIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcmVhY2hQb2x5ZmlsbCgpIHtcbiAgICAvLyBmb3JFYWNoIHBvbHlmaWxsIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNQb2x5ZmlsbFxuICAgIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2tpcExpbmsgZnJvbSAnLi9jb21wb25lbnRzL3NraXAtbGluayc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yYWdlJztcblxuLy8gSUUxMSBwb2x5ZmlsbHNcbmltcG9ydCBmb3JlYWNoUG9seWZpbGwgZnJvbSAnLi9wb2x5ZmlsbHMvZm9yZWFjaC1wb2x5ZmlsbCc7XG5pbXBvcnQgY2xvc2VzdFBvbHlmaWxsIGZyb20gJy4vcG9seWZpbGxzL2Nsb3Nlc3QtcG9seWZpbGwnO1xuXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJztcblxuZm9yZWFjaFBvbHlmaWxsKCk7XG5jbG9zZXN0UG9seWZpbGwoKTtcblxuZnVuY3Rpb24gaW5pdENvbXBvbmVudChDb21wb25lbnRDbGFzcykge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChDb21wb25lbnRDbGFzcy5zZWxlY3RvcigpKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBuZXcgQ29tcG9uZW50Q2xhc3MoaXRlbSkpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuICAgIGluaXRDb21wb25lbnQoU2tpcExpbmspO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
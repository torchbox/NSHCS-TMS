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
    const detailsStoreLabel = 'detailsStore';
    const progressStoreLabel = 'progressStore';
    const supportStoreLabel = 'supportStore';
    const stores = [
        JSON.parse(localStorage.getItem(detailsStoreLabel)) || [
            {
                id: 0,
                dataName: 'status-active-ft',
                status: 'true',
                type: 'checkbox',
                value: 'Active - FT',
                checked: false,
            },
            {
                id: 1,
                dataName: 'status-parental-leave',
                status: 'true',
                type: 'checkbox',
                value: 'Parental leave',
                checked: false,
            },
            {
                id: 2,
                dataName: 'status-left',
                status: 'true',
                type: 'checkbox',
                value: 'Left',
                checked: false,
            },
            {
                id: 3,
                dataName: 'status-active-pt',
                status: 'true',
                type: 'checkbox',
                value: 'Active - PT',
                checked: false,
            },
            {
                id: 4,
                dataName: 'status-sickness',
                status: 'true',
                type: 'checkbox',
                value: 'Sickness',
                checked: false,
            },
            {
                id: 5,
                dataName: 'status-failed',
                status: 'true',
                type: 'checkbox',
                value: 'Failed',
                checked: false,
            },
            {
                id: 6,
                dataName: 'status-passed',
                status: 'true',
                type: 'checkbox',
                value: 'Passed',
                checked: false,
            },
            {
                id: 7,
                dataName: 'status-defer-suspend',
                status: 'true',
                type: 'checkbox',
                value: 'Defer / Suspend',
                checked: false,
            },
            {
                id: 8,
                dataName: 'status-withdrawn',
                status: 'true',
                type: 'checkbox',
                value: 'Withdrawn',
                checked: false,
            },
            {
                id: 9,
                dataName: 'status-preregistration',
                status: 'true',
                type: 'checkbox',
                value: 'Preregistration',
                checked: false,
            },
            {
                id: 10,
                dataName: 'status-resit',
                status: 'true',
                type: 'checkbox',
                value: 'Resit',
                checked: false,
            },
            {
                id: 11,
                dataName: 'status-deceased',
                status: 'true',
                type: 'checkbox',
                value: 'Deceased',
                checked: false,
            },
            {
                id: 12,
                dataName: 'status-career-break',
                status: 'true',
                type: 'checkbox',
                value: 'Career break',
                checked: false,
            },
            {
                id: 13,
                dataName: 'status-dismissed',
                status: 'true',
                type: 'checkbox',
                value: 'Dismissed',
                checked: false,
            },
            {
                id: 14,
                dataName: 'status-covid19-interruption',
                status: 'true',
                type: 'checkbox',
                value: 'COVID19 interruption',
                checked: false,
            },
            {
                id: 15,
                dataName: 'name',
                type: 'text',
                value: 'Victoria Thomas',
                checked: false,
            },
            {
                id: 16,
                dataName: 'dob-day',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 17,
                dataName: 'dob-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 18,
                dataName: 'dob-year',
                type: 'text',
                value: '1995',
                checked: false,
            },
            {
                id: 19,
                dataName: 'address-1',
                type: 'text',
                value: '72 Guild Street',
                checked: false,
            },
            {
                id: 20,
                dataName: 'address-2',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 21,
                dataName: 'address-3',
                type: 'text',
                value: 'London',
                checked: false,
            },
            {
                id: 22,
                dataName: 'address-4',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 23,
                dataName: 'address-5',
                type: 'text',
                value: 'SE23 6FH',
                checked: false,
            },
            {
                id: 24,
                dataName: 'work-telephone',
                type: 'text',
                value: '0121 496 0316',
                checked: false,
            },
            {
                id: 25,
                dataName: 'personal-telephone',
                type: 'text',
                value: '07700 900452',
                checked: false,
            },
            {
                id: 26,
                dataName: 'work-email',
                type: 'email',
                value: 'v.thomas@nhsmail.net',
                checked: false,
            },
            {
                id: 27,
                dataName: 'preferred-1',
                preferred: 'true',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 28,
                dataName: 'academic-email',
                type: 'email',
                value: 'vthomas4@sheffhallam.ac.uk',
                checked: false,
            },
            {
                id: 29,
                dataName: 'preferred-2',
                preferred: 'true',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 30,
                dataName: 'personal-email',
                preferred: 'true',
                type: 'email',
                value: 'supervikstick@madeupmail.com',
                checked: false,
            },
            {
                id: 31,
                dataName: 'preferred-3',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 32,
                dataName: 'programme',
                type: 'select-one',
                value: 'HSST - Higher Specialist Scientist Training',
            },
            {
                id: 33,
                dataName: 'start-date-1',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 34,
                dataName: 'start-date-2',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 35,
                dataName: 'exit-date-1',
                type: 'text',
                value: '08',
                checked: false,
            },
            {
                id: 36,
                dataName: 'exit-date-2',
                type: 'text',
                value: '2025',
                checked: false,
            },
            {
                id: 37,
                dataName: 'entry-type',
                type: 'select-one',
                value: 'Direct',
            },
            {
                id: 38,
                dataName: 'funding-provider',
                type: 'select-one',
                value: 'Self',
            },
            {
                id: 39,
                dataName: 'specialism',
                type: 'select-one',
                value: 'Gastrointestinal Physiology',
            },
            {
                id: 40,
                dataName: 'hei',
                type: 'select-one',
                value: 'Sheffield Hallam University',
            },
            {
                id: 41,
                dataName: 'training-name',
                type: 'text',
                value: 'Ray Purchase',
                checked: false,
            },
            {
                id: 42,
                dataName: 'contracts-training-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 43,
                dataName: 'contracts-training-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 44,
                dataName: 'contracts-training-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 45,
                dataName: 'training-current',
                type: 'checkbox',
                value: 'off',
                checked: false,
            },
            {
                id: 46,
                dataName: 'contracts-training-to-day',
                type: 'text',
                value: '12',
                checked: false,
            },
            {
                id: 47,
                dataName: 'contracts-training-to-month',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 48,
                dataName: 'contracts-training-to-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 49,
                dataName: 'training-email',
                type: 'email',
                value: 'r.purchase@nhsmail.net',
                checked: false,
            },
            {
                id: 50,
                dataName: 'training-telephone',
                type: 'text',
                value: '0121 496 8754',
                checked: false,
            },
            {
                id: 51,
                dataName: 'training-head-of-department-name',
                type: 'text',
                value: 'Jasmine Morris',
                checked: false,
            },
            {
                id: 52,
                dataName: 'training-head-of-department-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 53,
                dataName: 'training-head-of-department-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 54,
                dataName: 'training-head-of-department-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 55,
                dataName: 'current',
                type: 'checkbox',
                value: 'off',
                checked: true,
            },
            {
                id: 56,
                dataName: 'training-head-of-department-to-day',
                type: 'text',
                value: '12',
                checked: false,
            },
            {
                id: 57,
                dataName: 'training-head-of-department-to-month',
                type: 'text',
                value: '03',
                checked: false,
            },
            {
                id: 58,
                dataName: 'training-head-of-department-to-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 59,
                dataName: 'training-head-of-department-email',
                type: 'email',
                value: 'j.morris@nhsmail.net',
                checked: false,
            },
            {
                id: 60,
                dataName: 'training-head-of-department-telephone',
                type: 'text',
                value: '0121 496 6235',
                checked: false,
            },
            {
                id: 61,
                dataName: 'training-trust',
                type: 'select-one',
                value: 'Sheffield Training Hospitals Trust',
            },
            {
                id: 62,
                dataName: 'training-hospital-site',
                type: 'select-one',
                value: 'Sheffield Hallam Hospital',
            },
            {
                id: 63,
                dataName: 'training-from-day',
                type: 'text',
                value: '21',
                checked: false,
            },
            {
                id: 64,
                dataName: 'training-from-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 65,
                dataName: 'training-from-year',
                type: 'text',
                value: '2020',
                checked: false,
            },
            {
                id: 66,
                dataName: 'training-to-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 67,
                dataName: 'training-to-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 68,
                dataName: 'training-to-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 69,
                dataName: 'qualification-type',
                type: 'select-one',
                value: 'Undergraduate',
            },
            {
                id: 70,
                dataName: 'institution',
                type: 'select-one',
                value: 'Nottingham Trent University',
            },
            {
                id: 71,
                dataName: 'subject',
                type: 'text',
                value: 'History',
                checked: false,
            },
            {
                id: 72,
                dataName: 'mark',
                type: 'select-one',
                value: '1st',
            },
            {
                id: 73,
                dataName: 'year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 74,
                dataName: 'verified-yes',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 75,
                dataName: 'verified-no',
                type: 'radio',
                value: 'No',
                checked: false,
            },
        ],
        JSON.parse(localStorage.getItem(progressStoreLabel)) || [
            {
                id: 0,
                dataName: 'expected-completion-day',
                type: 'text',
                value: '10',
                checked: false,
            },
            {
                id: 1,
                dataName: 'expected-completion-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 2,
                dataName: 'expected-completion-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 3,
                dataName: 'eec-reference-number',
                type: 'text',
                value: 'N/A',
                checked: false,
            },
            {
                id: 4,
                dataName: 'hcpc-sign-off-name',
                type: 'text',
                value: 'Gavin Peacock',
                checked: false,
            },
            {
                id: 5,
                dataName: 'hcpc-registration-number-1',
                type: 'text',
                value: '868751',
                checked: false,
            },
            {
                id: 6,
                dataName: 'assessment-date-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 7,
                dataName: 'assessment-date-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 8,
                dataName: 'assessment-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 9,
                dataName: 'assessment-type',
                type: 'text',
                value: 'IACC - First',
                checked: false,
            },
            {
                id: 10,
                dataName: 'assessment-comment',
                type: 'textarea',
                value: '',
            },
            {
                id: 11,
                dataName: 'assessment-result',
                type: 'select-one',
                value: 'Fail',
            },
            {
                id: 12,
                dataName: 'next-assessment-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 13,
                dataName: 'next-assessment-month',
                type: 'text',
                value: '09',
                checked: false,
            },
            {
                id: 14,
                dataName: 'next-assessment-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 15,
                dataName: 'reasonable-adjustments-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 16,
                dataName: 'reasonable-adjustments-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 17,
                dataName: 'qualification-complete-yes',
                type: 'radio',
                value: 'Yes',
                checked: true,
            },
            {
                id: 18,
                dataName: 'qualification-complete-no',
                type: 'radio',
                value: 'No',
                checked: false,
            },
            {
                id: 19,
                dataName: 'award-date-day',
                type: 'text',
                value: '20',
                checked: false,
            },
            {
                id: 20,
                dataName: 'award-date-month',
                type: 'text',
                value: '07',
                checked: false,
            },
            {
                id: 21,
                dataName: 'award-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 22,
                dataName: 'award-outcome',
                type: 'select-one',
                value: 'Merit',
            },
            {
                id: 23,
                dataName: 'extension-given-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 24,
                dataName: 'extension-given-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 25,
                dataName: 'programme-certification-obtained-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 26,
                dataName: 'programme-certification-obtained-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 27,
                dataName: 'certificate-issue-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 28,
                dataName: 'certificate-issue-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 29,
                dataName: 'certificate-issue-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 30,
                dataName: 'consent-to-share-with-ahcs-yes',
                type: 'radio',
                value: 'Yes',
                checked: false,
            },
            {
                id: 31,
                dataName: 'consent-to-share-with-ahcs-no',
                type: 'radio',
                value: 'No',
                checked: true,
            },
            {
                id: 32,
                dataName: 'post-training-email-preference',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 33,
                dataName: 'hcpc-registration-number-2',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 34,
                dataName: 'hcpc-registration-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 35,
                dataName: 'hcpc-registration-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 36,
                dataName: 'hcpc-registration-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 37,
                dataName: 'certification-method',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 38,
                dataName: 'chosen-pathway',
                type: 'select-one',
                value: 'Option one',
            },
            {
                id: 39,
                dataName: 'workplace-portfolio-completion-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 40,
                dataName: 'workplace-portfolio-completion-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 41,
                dataName: 'workplace-portfolio-completion-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 42,
                dataName: 'annual-review-of-progression-date-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 43,
                dataName: 'annual-review-of-progression-date-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 44,
                dataName: 'annual-review-of-progression-date-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 45,
                dataName: 'supervisor-sign-off-day',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 46,
                dataName: 'supervisor-sign-off-month',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 47,
                dataName: 'supervisor-sign-off-year',
                type: 'text',
                value: '',
                checked: false,
            },
            {
                id: 48,
                dataName: 'first-employment-after-training',
                type: 'select-one',
                value: 'Option one',
            },
        ],
        JSON.parse(localStorage.getItem(supportStoreLabel)) || [
            {
                id: 0,
                dataName: 'case-opened-day',
                type: 'text',
                value: '19',
                checked: false,
            },
            {
                id: 1,
                dataName: 'case-opened-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 2,
                dataName: 'case-opened-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 3,
                dataName: 'bereavement-issue',
                type: 'text',
                value: 'Bereavement',
                checked: false,
            },
            {
                id: 4,
                dataName: 'bereavement-description',
                type: 'textarea',
                value: "Victoria's mother died on 17 May 2022. The sudden loss of her mother has undoubtedly had a profound impact on Victoria's emotional well-being and overall ability to cope. The close relationship she shared with her mother and the circumstances surrounding the loss have created a significant grieving process for Victoria. The emotional distress and feelings of sadness, confusion, and emptiness resulting from her mother's passing have understandably affected her concentration, focus, and ability to engage fully in the training program. ",
            },
            {
                id: 5,
                dataName: 'support-status',
                type: 'select-one',
                value: 'Suspend',
            },
            {
                id: 6,
                dataName: 'case-1-date-day',
                type: 'text',
                value: '23',
                checked: false,
            },
            {
                id: 7,
                dataName: 'case-1-date-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 8,
                dataName: 'case-1-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 9,
                dataName: 'case-1-description',
                type: 'textarea',
                value: 'Still experiencing significant difficulty in her training due to a recent bereavement. Expressed feeling emotionally overwhelmed, making it hard for her to concentrate and absorb the training material. We should provide appropriate support and understanding to help Victoria navigate through this challenging time.',
            },
            {
                id: 10,
                dataName: 'case-2-date-day',
                type: 'text',
                value: '29',
                checked: false,
            },
            {
                id: 11,
                dataName: 'case-2-date-month',
                type: 'text',
                value: '05',
                checked: false,
            },
            {
                id: 12,
                dataName: 'case-2-date-year',
                type: 'text',
                value: '2022',
                checked: false,
            },
            {
                id: 13,
                dataName: 'case-2-description',
                type: 'textarea',
                value: 'Has expressed her need for personalised support due to her recent bereavement. Difficulty in maintaining focus, retaining information, and completing assignments. Given her circumstances, it is recommended that we explore additional measures to provide targeted assistance.',
            },
        ],
    ];
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
    function saveNewData(label) {
        const storeLabel = `${label}Store`;
        localStorage.setItem(storeLabel, JSON.stringify(buildData()));
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
        stores.forEach((store) => {
            store.forEach((item) => {
                // Set page title (user's name)
                if (item.dataName === 'name') {
                    nameHeading.textContent = item.value;
                }
                // Build status tags
                if (item.status && item.checked) {
                    const tag = document.createElement('div');
                    tag.textContent = item.value;
                    tag.classList.add('tag', 'tag--green');
                    statusContainer.appendChild(tag);
                }
                const targetElement = document.querySelector(`[data-form='${item.dataName}']`);
                if (targetElement) {
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
        });
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
                const label = item.getAttribute('data-save');
                saveNewData(label);
                // Navigate to view page once saved
                window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, `/${label}-view.html`));
            });
        });
    }
    if (editButton) {
        editButton.forEach((item) => {
            item.addEventListener('click', () => {
                const label = item.getAttribute('data-edit');
                window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, `/${label}-edit.html`));
            });
        });
    }
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            populateData();
            const label = cancelButton.getAttribute('data-cancel');
            window.location.replace(window.location.pathname.replace(/\/[^\/]*$/, `/${label}-view.html`));
        });
    }
    // Dev helper
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            localStorage.removeItem('detailsStore');
            localStorage.removeItem('progressStore');
            localStorage.removeItem('supportStore');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDO0tBQ3hEO0FBQ0wsQ0FBQzs7Ozs7OztVQ0xEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ2hCO0FBRTlCLGlCQUFpQjtBQUMwQztBQUNBO0FBRWhDO0FBRTNCLHVFQUFlLEVBQUUsQ0FBQztBQUNsQix1RUFBZSxFQUFFLENBQUM7QUFFbEIsU0FBUyxhQUFhLENBQUMsY0FBYztJQUNqQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQywyQkFBMkI7SUFDM0IsYUFBYSxDQUFDLDZEQUFRLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL05IU0NELVRNUy8uL2Fzc2V0cy9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvc2tpcC1saW5rLmpzIiwid2VicGFjazovL05IU0NELVRNUy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TLy4vYXNzZXRzL3NyYy9qYXZhc2NyaXB0L3BvbHlmaWxscy9jbG9zZXN0LXBvbHlmaWxsLmpzIiwid2VicGFjazovL05IU0NELVRNUy8uL2Fzc2V0cy9zcmMvamF2YXNjcmlwdC9wb2x5ZmlsbHMvZm9yZWFjaC1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTkhTQ0QtVE1TL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9OSFNDRC1UTVMvLi9hc3NldHMvc3JjL2phdmFzY3JpcHQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBTa2lwTGluayB7XG4gICAgc3RhdGljIHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXNraXAtbGlua10nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgdGhpcy5za2lwTGluayA9IG5vZGU7XG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgICAgICBpZiAodGhpcy5za2lwTGluayAmJiB0aGlzLm1haW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2tpcExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMubWFpbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgICB0aGlzLm1haW4uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRoaXMuaGFuZGxlQmx1cigpKTtcbiAgICAgICAgdGhpcy5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCkpO1xuICAgICAgICB0aGlzLm1haW4uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyKCkge1xuICAgICAgICB0aGlzLm1haW4ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB0aGlzLm1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1cik7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuaGFuZGxlQmx1cik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lwTGluaztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2UoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZvcm1dJyk7XG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNhdmVdJyk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2FuY2VsXScpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lZGl0XScpO1xuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG4gICAgY29uc3QgbmFtZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uYW1lLWhlYWRpbmddJyk7XG4gICAgY29uc3Qgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vZGUgPSBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kZV0nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IFtdO1xuICAgIGNvbnN0IGRldGFpbHNTdG9yZUxhYmVsID0gJ2RldGFpbHNTdG9yZSc7XG4gICAgY29uc3QgcHJvZ3Jlc3NTdG9yZUxhYmVsID0gJ3Byb2dyZXNzU3RvcmUnO1xuICAgIGNvbnN0IHN1cHBvcnRTdG9yZUxhYmVsID0gJ3N1cHBvcnRTdG9yZSc7XG4gICAgY29uc3Qgc3RvcmVzID0gW1xuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRldGFpbHNTdG9yZUxhYmVsKSkgfHwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLWFjdGl2ZS1mdCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0FjdGl2ZSAtIEZUJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtcGFyZW50YWwtbGVhdmUnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdQYXJlbnRhbCBsZWF2ZScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLWxlZnQnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdMZWZ0JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtYWN0aXZlLXB0JyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQWN0aXZlIC0gUFQnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3N0YXR1cy1zaWNrbmVzcycsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NpY2tuZXNzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtZmFpbGVkJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnRmFpbGVkJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtcGFzc2VkJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnUGFzc2VkJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtZGVmZXItc3VzcGVuZCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0RlZmVyIC8gU3VzcGVuZCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLXdpdGhkcmF3bicsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1dpdGhkcmF3bicsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLXByZXJlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1ByZXJlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3N0YXR1cy1yZXNpdCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1Jlc2l0JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLWRlY2Vhc2VkJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnRGVjZWFzZWQnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdGF0dXMtY2FyZWVyLWJyZWFrJyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnQ2FyZWVyIGJyZWFrJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhdHVzLWRpc21pc3NlZCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0Rpc21pc3NlZCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxNCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3N0YXR1cy1jb3ZpZDE5LWludGVycnVwdGlvbicsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0NPVklEMTkgaW50ZXJydXB0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnVmljdG9yaWEgVGhvbWFzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZG9iLWRheScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDMnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdkb2ItbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzA5JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZG9iLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzE5OTUnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhZGRyZXNzLTEnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzcyIEd1aWxkIFN0cmVldCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2FkZHJlc3MtMicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYWRkcmVzcy0zJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdMb25kb24nLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhZGRyZXNzLTQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2FkZHJlc3MtNScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU0UyMyA2RkgnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjQsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd3b3JrLXRlbGVwaG9uZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDEyMSA0OTYgMDMxNicsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyNSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3BlcnNvbmFsLXRlbGVwaG9uZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDc3MDAgOTAwNDUyJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDI2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnd29yay1lbWFpbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3YudGhvbWFzQG5oc21haWwubmV0JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDI3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncHJlZmVycmVkLTEnLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdZZXMnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyOCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2FjYWRlbWljLWVtYWlsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAndnRob21hczRAc2hlZmZoYWxsYW0uYWMudWsnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdwcmVmZXJyZWQtMicsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1llcycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzMCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3BlcnNvbmFsLWVtYWlsJyxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnc3VwZXJ2aWtzdGlja0BtYWRldXBtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzMSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3ByZWZlcnJlZC0zJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMyLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncHJvZ3JhbW1lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdIU1NUIC0gSGlnaGVyIFNwZWNpYWxpc3QgU2NpZW50aXN0IFRyYWluaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3RhcnQtZGF0ZS0xJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwOScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzNCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3N0YXJ0LWRhdGUtMicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAyMCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzNSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2V4aXQtZGF0ZS0xJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwOCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzNixcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2V4aXQtZGF0ZS0yJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDI1JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDM3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZW50cnktdHlwZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdC1vbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnRGlyZWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDM4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZnVuZGluZy1wcm92aWRlcicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdC1vbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2VsZicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzOSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3NwZWNpYWxpc20nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0dhc3Ryb2ludGVzdGluYWwgUGh5c2lvbG9neScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0MCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2hlaScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdC1vbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU2hlZmZpZWxkIEhhbGxhbSBVbml2ZXJzaXR5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctbmFtZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnUmF5IFB1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQyLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY29udHJhY3RzLXRyYWluaW5nLWZyb20tZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0MyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2NvbnRyYWN0cy10cmFpbmluZy1mcm9tLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwOScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0NCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2NvbnRyYWN0cy10cmFpbmluZy1mcm9tLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjAnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1jdXJyZW50JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQ2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY29udHJhY3RzLXRyYWluaW5nLXRvLWRheScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMTInLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDcsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjb250cmFjdHMtdHJhaW5pbmctdG8tbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzAzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQ4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY29udHJhY3RzLXRyYWluaW5nLXRvLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjInLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1lbWFpbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3IucHVyY2hhc2VAbmhzbWFpbC5uZXQnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNTAsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy10ZWxlcGhvbmUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzAxMjEgNDk2IDg3NTQnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNTEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1oZWFkLW9mLWRlcGFydG1lbnQtbmFtZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSmFzbWluZSBNb3JyaXMnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNTIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1oZWFkLW9mLWRlcGFydG1lbnQtZnJvbS1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIxJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDUzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctaGVhZC1vZi1kZXBhcnRtZW50LWZyb20tbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzA5JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDU0LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctaGVhZC1vZi1kZXBhcnRtZW50LWZyb20teWVhcicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAyMCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA1NSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2N1cnJlbnQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdvZmYnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA1NixcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3RyYWluaW5nLWhlYWQtb2YtZGVwYXJ0bWVudC10by1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzEyJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDU3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctaGVhZC1vZi1kZXBhcnRtZW50LXRvLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwMycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA1OCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3RyYWluaW5nLWhlYWQtb2YtZGVwYXJ0bWVudC10by15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDIyJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDU5LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctaGVhZC1vZi1kZXBhcnRtZW50LWVtYWlsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnai5tb3JyaXNAbmhzbWFpbC5uZXQnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjAsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1oZWFkLW9mLWRlcGFydG1lbnQtdGVsZXBob25lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwMTIxIDQ5NiA2MjM1JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDYxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctdHJ1c3QnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1NoZWZmaWVsZCBUcmFpbmluZyBIb3NwaXRhbHMgVHJ1c3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1ob3NwaXRhbC1zaXRlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTaGVmZmllbGQgSGFsbGFtIEhvc3BpdGFsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDYzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctZnJvbS1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIxJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDY0LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndHJhaW5pbmctZnJvbS1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDknLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy1mcm9tLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjAnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjYsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy10by1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA2NyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3RyYWluaW5nLXRvLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjgsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd0cmFpbmluZy10by15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNjksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdxdWFsaWZpY2F0aW9uLXR5cGUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1VuZGVyZ3JhZHVhdGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNzAsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdpbnN0aXR1dGlvbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdC1vbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTm90dGluZ2hhbSBUcmVudCBVbml2ZXJzaXR5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDcxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3ViamVjdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSGlzdG9yeScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3MixcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ21hcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzFzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3MyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3llYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3NCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3ZlcmlmaWVkLXllcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1llcycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDc1LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAndmVyaWZpZWQtbm8nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdObycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2dyZXNzU3RvcmVMYWJlbCkpIHx8IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2V4cGVjdGVkLWNvbXBsZXRpb24tZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcxMCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZXhwZWN0ZWQtY29tcGxldGlvbi1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDknLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2V4cGVjdGVkLWNvbXBsZXRpb24teWVhcicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAyMicsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnZWVjLXJlZmVyZW5jZS1udW1iZXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ04vQScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnaGNwYy1zaWduLW9mZi1uYW1lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdHYXZpbiBQZWFjb2NrJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdoY3BjLXJlZ2lzdHJhdGlvbi1udW1iZXItMScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnODY4NzUxJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhc3Nlc3NtZW50LWRhdGUtZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcxOScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXNzZXNzbWVudC1kYXRlLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcwOScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXNzZXNzbWVudC1kYXRlLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjInLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2Fzc2Vzc21lbnQtdHlwZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSUFDQyAtIEZpcnN0JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXNzZXNzbWVudC1jb21tZW50JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXNzZXNzbWVudC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0ZhaWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICduZXh0LWFzc2Vzc21lbnQtZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcxOScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ25leHQtYXNzZXNzbWVudC1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDknLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTQsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICduZXh0LWFzc2Vzc21lbnQteWVhcicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAyMicsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxNSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3JlYXNvbmFibGUtYWRqdXN0bWVudHMteWVzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncmVhc29uYWJsZS1hZGp1c3RtZW50cy1ubycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ05vJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdxdWFsaWZpY2F0aW9uLWNvbXBsZXRlLXllcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1llcycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncXVhbGlmaWNhdGlvbi1jb21wbGV0ZS1ubycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ05vJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDE5LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXdhcmQtZGF0ZS1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIwLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYXdhcmQtZGF0ZS1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhd2FyZC1kYXRlLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjInLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhd2FyZC1vdXRjb21lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdNZXJpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyMyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2V4dGVuc2lvbi1naXZlbi15ZXMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdZZXMnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMjQsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdleHRlbnNpb24tZ2l2ZW4tbm8nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdObycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDI1LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncHJvZ3JhbW1lLWNlcnRpZmljYXRpb24tb2J0YWluZWQteWVzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDI2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncHJvZ3JhbW1lLWNlcnRpZmljYXRpb24tb2J0YWluZWQtbm8nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdObycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDI3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY2VydGlmaWNhdGUtaXNzdWUtZGF0ZS1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyOCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2NlcnRpZmljYXRlLWlzc3VlLWRhdGUtbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyOSxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2NlcnRpZmljYXRlLWlzc3VlLWRhdGUteWVhcicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMwLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY29uc2VudC10by1zaGFyZS13aXRoLWFoY3MteWVzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMxLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY29uc2VudC10by1zaGFyZS13aXRoLWFoY3Mtbm8nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdObycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMyLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAncG9zdC10cmFpbmluZy1lbWFpbC1wcmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdPcHRpb24gb25lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnaGNwYy1yZWdpc3RyYXRpb24tbnVtYmVyLTInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzNCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2hjcGMtcmVnaXN0cmF0aW9uLWRhdGUtZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMzUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdoY3BjLXJlZ2lzdHJhdGlvbi1kYXRlLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMzYsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdoY3BjLXJlZ2lzdHJhdGlvbi1kYXRlLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzNyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2NlcnRpZmljYXRpb24tbWV0aG9kJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdPcHRpb24gb25lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDM4LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY2hvc2VuLXBhdGh3YXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3Qtb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ09wdGlvbiBvbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMzksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd3b3JrcGxhY2UtcG9ydGZvbGlvLWNvbXBsZXRpb24tZGF0ZS1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0MCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ3dvcmtwbGFjZS1wb3J0Zm9saW8tY29tcGxldGlvbi1kYXRlLW1vbnRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICd3b3JrcGxhY2UtcG9ydGZvbGlvLWNvbXBsZXRpb24tZGF0ZS15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhbm51YWwtcmV2aWV3LW9mLXByb2dyZXNzaW9uLWRhdGUtZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDMsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdhbm51YWwtcmV2aWV3LW9mLXByb2dyZXNzaW9uLWRhdGUtbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0NCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2FubnVhbC1yZXZpZXctb2YtcHJvZ3Jlc3Npb24tZGF0ZS15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdXBlcnZpc29yLXNpZ24tb2ZmLWRheScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQ2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3VwZXJ2aXNvci1zaWduLW9mZi1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQ3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnc3VwZXJ2aXNvci1zaWduLW9mZi15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogNDgsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdmaXJzdC1lbXBsb3ltZW50LWFmdGVyLXRyYWluaW5nJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VsZWN0LW9uZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdPcHRpb24gb25lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3VwcG9ydFN0b3JlTGFiZWwpKSB8fCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLW9wZW5lZC1kYXknLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzE5JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLW9wZW5lZC1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDUnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2Nhc2Utb3BlbmVkLXllYXInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzIwMjInLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2JlcmVhdmVtZW50LWlzc3VlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdCZXJlYXZlbWVudCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnYmVyZWF2ZW1lbnQtZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiVmljdG9yaWEncyBtb3RoZXIgZGllZCBvbiAxNyBNYXkgMjAyMi4gVGhlIHN1ZGRlbiBsb3NzIG9mIGhlciBtb3RoZXIgaGFzIHVuZG91YnRlZGx5IGhhZCBhIHByb2ZvdW5kIGltcGFjdCBvbiBWaWN0b3JpYSdzIGVtb3Rpb25hbCB3ZWxsLWJlaW5nIGFuZCBvdmVyYWxsIGFiaWxpdHkgdG8gY29wZS4gVGhlIGNsb3NlIHJlbGF0aW9uc2hpcCBzaGUgc2hhcmVkIHdpdGggaGVyIG1vdGhlciBhbmQgdGhlIGNpcmN1bXN0YW5jZXMgc3Vycm91bmRpbmcgdGhlIGxvc3MgaGF2ZSBjcmVhdGVkIGEgc2lnbmlmaWNhbnQgZ3JpZXZpbmcgcHJvY2VzcyBmb3IgVmljdG9yaWEuIFRoZSBlbW90aW9uYWwgZGlzdHJlc3MgYW5kIGZlZWxpbmdzIG9mIHNhZG5lc3MsIGNvbmZ1c2lvbiwgYW5kIGVtcHRpbmVzcyByZXN1bHRpbmcgZnJvbSBoZXIgbW90aGVyJ3MgcGFzc2luZyBoYXZlIHVuZGVyc3RhbmRhYmx5IGFmZmVjdGVkIGhlciBjb25jZW50cmF0aW9uLCBmb2N1cywgYW5kIGFiaWxpdHkgdG8gZW5nYWdlIGZ1bGx5IGluIHRoZSB0cmFpbmluZyBwcm9ncmFtLiBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdzdXBwb3J0LXN0YXR1cycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlbGVjdC1vbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU3VzcGVuZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY2FzZS0xLWRhdGUtZGF5JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMycsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY2FzZS0xLWRhdGUtbW9udGgnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzA1JyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLTEtZGF0ZS15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDIyJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLTEtZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTdGlsbCBleHBlcmllbmNpbmcgc2lnbmlmaWNhbnQgZGlmZmljdWx0eSBpbiBoZXIgdHJhaW5pbmcgZHVlIHRvIGEgcmVjZW50IGJlcmVhdmVtZW50LiBFeHByZXNzZWQgZmVlbGluZyBlbW90aW9uYWxseSBvdmVyd2hlbG1lZCwgbWFraW5nIGl0IGhhcmQgZm9yIGhlciB0byBjb25jZW50cmF0ZSBhbmQgYWJzb3JiIHRoZSB0cmFpbmluZyBtYXRlcmlhbC4gV2Ugc2hvdWxkIHByb3ZpZGUgYXBwcm9wcmlhdGUgc3VwcG9ydCBhbmQgdW5kZXJzdGFuZGluZyB0byBoZWxwIFZpY3RvcmlhIG5hdmlnYXRlIHRocm91Z2ggdGhpcyBjaGFsbGVuZ2luZyB0aW1lLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgICAgICBkYXRhTmFtZTogJ2Nhc2UtMi1kYXRlLWRheScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMjknLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLTItZGF0ZS1tb250aCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMDUnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICAgICAgZGF0YU5hbWU6ICdjYXNlLTItZGF0ZS15ZWFyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcyMDIyJyxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEzLFxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiAnY2FzZS0yLWRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSGFzIGV4cHJlc3NlZCBoZXIgbmVlZCBmb3IgcGVyc29uYWxpc2VkIHN1cHBvcnQgZHVlIHRvIGhlciByZWNlbnQgYmVyZWF2ZW1lbnQuIERpZmZpY3VsdHkgaW4gbWFpbnRhaW5pbmcgZm9jdXMsIHJldGFpbmluZyBpbmZvcm1hdGlvbiwgYW5kIGNvbXBsZXRpbmcgYXNzaWdubWVudHMuIEdpdmVuIGhlciBjaXJjdW1zdGFuY2VzLCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHdlIGV4cGxvcmUgYWRkaXRpb25hbCBtZWFzdXJlcyB0byBwcm92aWRlIHRhcmdldGVkIGFzc2lzdGFuY2UuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgXTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXG5cbiAgICAvLyBEZWZpbmUgaXRlbSBzaGFwZVxuICAgIGNsYXNzIEZvcm1JbnB1dCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBkYXRhTmFtZSwgc3RhdHVzLCBwcmVmZXJyZWQsIHR5cGUsIHZhbHVlLCBjaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLmRhdGFOYW1lID0gZGF0YU5hbWU7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMucHJlZmVycmVkID0gcHJlZmVycmVkO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgb2JqZWN0IGZyb20gdXNlciBpbnB1dFxuICAgIGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgICAgLy8gU2NyYXBlIGFsbCBmb3JtIGlucHV0cyB3aXRoIGRhdGEtZm9ybT1cIltmb29dXCJcbiAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZm9ybT0nJHtpdGVtLmRhdGFzZXQuZm9ybX0nXWAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dE9iamVjdCA9IG5ldyBGb3JtSW5wdXQoXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZm9ybSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3RhdHVzLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5wcmVmZXJyZWQsXG4gICAgICAgICAgICAgICAgZWxlbWVudC50eXBlLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdXNlckRhdGEucHVzaChpbnB1dE9iamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIG5ldyBjb250ZW50XG4gICAgZnVuY3Rpb24gc2F2ZU5ld0RhdGEobGFiZWwpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVMYWJlbCA9IGAke2xhYmVsfVN0b3JlYDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVMYWJlbCwgSlNPTi5zdHJpbmdpZnkoYnVpbGREYXRhKCkpKTtcbiAgICB9XG5cbiAgICAvLyBIYWNreSBmdW5jdGlvbiB0byBmaXggaGFja3kgc3RvcmFnZSBvZiBkYXRlc1xuICAgIC8vIEdlbmVyYXRlcyBhIHNob3J0IG9yIGxvbmcgaHVtYW4gcmVhZGFibGUgZGF0ZVxuICAgIGZ1bmN0aW9uIHN0cmluZ3NUb0RhdGVzKCkge1xuICAgICAgICAvLyBUaGlzIGNvbnRhaW5zIGVpdGhlciB0d28gb3IgdGhyZWUgc3BhbnMsIGVhY2ggY29udGFpbmluZyBwYXJ0IG9mIHRoZSBkYXRlXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kYXRlXScpO1xuXG4gICAgICAgIGVsZW1lbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVR5cGUgPSBpdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSAzID8gJ2Z1bGwnIDogJ3JlZHVjZWQnO1xuICAgICAgICAgICAgY29uc3QgaHlwaGVuYXRlZERhdGUgPSBpdGVtLnRleHRDb250ZW50LnJlcGxhY2UoL1xccysvZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuRGF0ZSA9IGh5cGhlbmF0ZWREYXRlLnJlcGxhY2UoLyheXFwtK3xcXC0rJCkvZ20sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGxvbmdEYXRlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzaG9ydERhdGVPcHRpb25zID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfTtcblxuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBuZXcgRGF0ZShjbGVhbkRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICAgICAgICAnZW4tR0InLFxuICAgICAgICAgICAgICAgIGRhdGVUeXBlID09PSAnZnVsbCcgPyBsb25nRGF0ZU9wdGlvbnMgOiBzaG9ydERhdGVPcHRpb25zLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSWYgYW55dGhpbmcgZ29lcyB3cm9uZywganVzdCBkZWxldGUgaXQhXG4gICAgICAgICAgICBpZiAoaXRlbS5pbm5lckhUTUwgPT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFueSBlbXB0eSBub2RlcyBhbmQgcmVtb3ZlIHRoZSBibG9jayBlbnRpcmVseVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5RmllbGRzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3JtXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uby1oaWRlJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUG9wdWxhdGUgZGF0YSBpbiBET00gaWYgaXQgYWxyZWFkeSBleGlzdHMgaW4gbG9jYWxTdG9yYWdlXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVEYXRhKCkge1xuICAgICAgICBzdG9yZXMuZm9yRWFjaCgoc3RvcmUpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgcGFnZSB0aXRsZSAodXNlcidzIG5hbWUpXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YU5hbWUgPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lSGVhZGluZy50ZXh0Q29udGVudCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgc3RhdHVzIHRhZ3NcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdGF0dXMgJiYgaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YWcudGV4dENvbnRlbnQgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJywgJ3RhZy0tZ3JlZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGBbZGF0YS1mb3JtPScke2l0ZW0uZGF0YU5hbWV9J11gLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnZhbHVlID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCB0cmVhdG1lbnQgZm9yIHJhZGlvL2NoZWNrYm94ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycgfHwgaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3JlIHNwZWNpYWwgdHJlYXRtZW50IGZvciB0aGVzZSBmaWVsZHMgaW4gdmlldyBtb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZW1haWwnICYmIGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPW1haWx0bzoke2l0ZW0udmFsdWV9PiR7aXRlbS52YWx1ZX08L2E+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnWWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdObyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmVmZXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWcgdGFnLS1saWdodC1ibHVlIHRhZy0td2lkdGgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlByZWZlcnJlZDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gJ3ZpZXcnKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBuaWNlci1sb29raW5nIGRhdGVzIGZvciBVVFxuICAgICAgICAgICAgc3RyaW5nc1RvRGF0ZXMoKTtcblxuICAgICAgICAgICAgLy8gU3RyaXAgZW1wdGllc1xuICAgICAgICAgICAgcmVtb3ZlRW1wdHlGaWVsZHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzYXZlQnV0dG9uKSB7XG4gICAgICAgIHNhdmVCdXR0b24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNhdmUnKTtcbiAgICAgICAgICAgICAgICBzYXZlTmV3RGF0YShsYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byB2aWV3IHBhZ2Ugb25jZSBzYXZlZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIC9cXC9bXlxcL10qJC8sXG4gICAgICAgICAgICAgICAgICAgICAgICBgLyR7bGFiZWx9LXZpZXcuaHRtbGAsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZWRpdEJ1dHRvbikge1xuICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0Jyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgL1xcL1teXFwvXSokLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGAvJHtsYWJlbH0tZWRpdC5odG1sYCxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjYW5jZWxCdXR0b24pIHtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdWxhdGVEYXRhKCk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNhbmNlbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FuY2VsJyk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFwvW15cXC9dKiQvLFxuICAgICAgICAgICAgICAgICAgICBgLyR7bGFiZWx9LXZpZXcuaHRtbGAsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldiBoZWxwZXJcbiAgICBpZiAoY2xlYXJCdXR0b24pIHtcbiAgICAgICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGV0YWlsc1N0b3JlJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZ3Jlc3NTdG9yZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1cHBvcnRTdG9yZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBwb3B1bGF0ZURhdGEoKTtcbiAgICB9KTtcbn1cblxuc3RvcmFnZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VzdFBvbHlmaWxsKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgLy8gQ2xvc2VzdCBwb2x5ZmlsbCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xvc2VzdCNQb2x5ZmlsbFxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcztcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSByZXR1cm4gZWw7XG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9IHdoaWxlIChlbCAhPT0gbnVsbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JlYWNoUG9seWZpbGwoKSB7XG4gICAgLy8gZm9yRWFjaCBwb2x5ZmlsbCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGVMaXN0L2ZvckVhY2gjUG9seWZpbGxcbiAgICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNraXBMaW5rIGZyb20gJy4vY29tcG9uZW50cy9za2lwLWxpbmsnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RvcmFnZSc7XG5cbi8vIElFMTEgcG9seWZpbGxzXG5pbXBvcnQgZm9yZWFjaFBvbHlmaWxsIGZyb20gJy4vcG9seWZpbGxzL2ZvcmVhY2gtcG9seWZpbGwnO1xuaW1wb3J0IGNsb3Nlc3RQb2x5ZmlsbCBmcm9tICcuL3BvbHlmaWxscy9jbG9zZXN0LXBvbHlmaWxsJztcblxuaW1wb3J0ICcuLi9zYXNzL21haW4uc2Nzcyc7XG5cbmZvcmVhY2hQb2x5ZmlsbCgpO1xuY2xvc2VzdFBvbHlmaWxsKCk7XG5cbmZ1bmN0aW9uIGluaXRDb21wb25lbnQoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29tcG9uZW50Q2xhc3Muc2VsZWN0b3IoKSk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gbmV3IENvbXBvbmVudENsYXNzKGl0ZW0pKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgICBpbml0Q29tcG9uZW50KFNraXBMaW5rKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
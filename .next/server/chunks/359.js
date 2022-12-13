"use strict";
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ DashProvider),
/* harmony export */   "X": () => (/* binding */ useDash)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DashContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// context which will keep state of user whether it is logged in or not and if user has edit access.
function DashProvider({ children  }) {
    const { 0: name , 1: SetName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("None");
    const { 0: email , 1: SetEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("None");
    const { 0: validity , 1: SetValidity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const { 0: isAuthenticated , 1: setIsAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: batch , 1: SetBatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // const [EditAccess, setEditAccess] = useState(false);
    // const [name, SetName] = useState("none");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashContext.Provider, {
        value: {
            name,
            SetName,
            email,
            SetEmail,
            setIsAuthenticated,
            isAuthenticated,
            SetValidity,
            validity,
            batch,
            SetBatch
        },
        children: children
    });
}
const useDash = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DashContext);



/***/ })

};
;
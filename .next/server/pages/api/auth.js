"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 31:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fetch = __webpack_require__(31);
const info = __webpack_require__(402);
async function handler(req, resp) {
    // fetching user credentials
    const credentials = req.body["credentials"];
    const dataparam = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Email": `${credentials.username}`,
            "Password": `${credentials.password}`
        })
    };
    // sending credentials to backend server for authentication
    var res = fetch("https://kenkaneki124.pythonanywhere.com/forms/userLogin/", dataparam);
    var data;
    var statusCode = await res.then(async (res)=>{
        data = await res.json();
        if (res.status == 401) return 401;
        return 200;
    });
    if (statusCode == 401) resp.status(401).send(false);
    else resp.json(data);
};


/***/ }),

/***/ 402:
/***/ ((module) => {

module.exports = JSON.parse('{"login":{"credentials":{"data":{"userName":"aonealtair+qa40@gmail.com","password":"Autotest@123"},"provider":"solidthinking"},"appliance_login_end_point":"/api/auth/login"},"appliance_id_api":{"endpoint":"/search/search?isLegacy=false"},"token":"jt4D79tfA5IsthFbBfrB"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(880));
module.exports = __webpack_exports__;

})();
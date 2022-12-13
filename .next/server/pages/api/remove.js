"use strict";
(() => {
var exports = {};
exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, resp) {
    const key = req.headers["key"];
    const token = req.body["token"];
    const dataparam = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "key": key
        },
        body: JSON.stringify({
            "token": token
        })
    };
    // send request to backend server for deleting entry from the table
    var res = fetch(`http://${process.env.DASHBOARD_BACKEND_SERVICE_HOST}:${process.env.DASHBOARD_BACKEND_SERVICE_PORT}/remove`, dataparam);
    if (await res.then((res)=>{
        return res.status;
    }) == 200) {
        resp.status(200).send(true);
    } else {
        resp.status(401).send(false);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(257));
module.exports = __webpack_exports__;

})();
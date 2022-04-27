"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolCV = exports.isRut = void 0;
const rolChecker_1 = require("./rolChecker");
const rolDigitGe_1 = require("./rolDigitGe");
function isRut(rol) {
    //social number verification
    return (0, rolChecker_1.rolChecker)(rol);
}
exports.isRut = isRut;
exports.rolCV = rolDigitGe_1.rolDigitGen;

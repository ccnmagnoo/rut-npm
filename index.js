"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRut = void 0;
function isRut(rol) {
    //social number verification
    const rolChecker = (rol) => {
        //undefinded solution
        if (rol === undefined)
            return false;
        rol = rol === null || rol === void 0 ? void 0 : rol.replace('‐', '-');
        rol = rol === null || rol === void 0 ? void 0 : rol.split('.').join('');
        const re = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
        if (rol === '11111111-1')
            return false;
        if (!re.test(rol)) {
            return false;
        }
        else {
            const rolSplited = rol.split('-');
            let rolDigit = rolSplited[1];
            const rolBody = rolSplited[0];
            if (rolDigit === 'K') {
                rolDigit = 'k';
            }
            return rolDigitGen(+rolBody) === rolDigit;
        }
    };
    const rolDigitGen = (rol) => {
        //generador de verificador de código calculado
        let M = 0, S = 1;
        for (; rol; rol = Math.floor(rol / 10)) {
            S = (S + (rol % 10) * (9 - (M++ % 6))) % 11;
        }
        return S ? (S - 1).toString() : 'k';
    };
    return rolChecker(rol);
}
exports.isRut = isRut;

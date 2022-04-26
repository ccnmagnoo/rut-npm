"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRut = void 0;
function isRut(rol) {
    //social number verification
    const rolChecker = (rol) => {
        //undefinded solution
        if (rol === undefined)
            return { result: false, error: 'fake number' };
        rol = rol === null || rol === void 0 ? void 0 : rol.replace('‐', '-');
        rol = rol === null || rol === void 0 ? void 0 : rol.split('.').join('');
        const re = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
        if (rol === '11111111-1')
            return { result: false, error: 'fake number' };
        if (!re.test(rol)) {
            return { result: false, error: 'wrong id' };
        }
        else {
            const rolSplited = rol.split('-');
            let rolDigit = rolSplited[1];
            const rolBody = rolSplited[0];
            if (rolDigit === 'K') {
                rolDigit = 'k';
            }
            //validation
            return rolDigitGen(+rolBody) === rolDigit
                ? { result: true, error: undefined }
                : { result: false, error: 'wrong last digit' };
        }
    };
    const rolDigitGen = (rol) => {
        //calculated last digit
        let M = 0, S = 1;
        for (; rol; rol = Math.floor(rol / 10)) {
            S = (S + (rol % 10) * (9 - (M++ % 6))) % 11;
        }
        return S ? (S - 1).toString() : 'k';
    };
    return rolChecker(rol);
}
exports.isRut = isRut;

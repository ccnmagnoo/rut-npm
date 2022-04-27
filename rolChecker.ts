import { rolDigitGen } from './rolDigitGe';

export const rolChecker = (rol?: string): { result: boolean; error?: string } => {
  //undefinded solution
  if (rol === undefined) return { result: false, error: 'fake number' };

  rol = rol?.replace('‐', '-');
  rol = rol?.split('.').join('');
  const re: RegExp = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;

  if (rol === '11111111-1') return { result: false, error: 'fake number' };

  if (!re.test(rol)) {
    return { result: false, error: 'wrong id' };
  } else {
    const rolSplited = rol.split('-');
    let rolDigit: string = rolSplited[1];
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

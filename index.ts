import { rolChecker } from './rolChecker';
import { rolDigitGen } from './rolDigitGe';
export function isRut(rol: string): { result: boolean; error?: string } {
  //social number verification
  return rolChecker(rol);
}

export const rolCV = rolDigitGen;

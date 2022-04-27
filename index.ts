import { rolChecker } from './functions/rolChecker';
import { rolDigitGen } from './functions/rolDigitGen';
export function isRut(rol: string): { result: boolean; error?: string } {
  //social number verification
  return rolChecker(rol);
}

export const genCV = rolDigitGen;

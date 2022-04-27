export const rolDigitGen = (rol: number): string => {
  //calculated last digit
  let M = 0,
    S = 1;

  for (; rol; rol = Math.floor(rol / 10)) {
    S = (S + (rol % 10) * (9 - (M++ % 6))) % 11;
  }

  return S ? (S - 1).toString() : 'k';
};

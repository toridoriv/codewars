export const duplicateEncode = (text: string): string =>
  text
    .toUpperCase()
    .split('')
    .map((char, _, arr) =>
      arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')'
    )
    .join('');

export const noSpace = (text: string): string =>
  text
    .split(' ')
    .filter(char => char !== ' ')
    .join('');

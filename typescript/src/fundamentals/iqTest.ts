export const iqTest = (text: string): number => {
  const arrText = text.split(' ');
  const even = arrText.filter((val: string) => parseInt(val, 10) % 2 === 0);
  const uneven = arrText.filter((val: string) => parseInt(val, 10) % 2 !== 0);
  return even.length > uneven.length
    ? arrText.indexOf(uneven[0]) + 1
    : arrText.indexOf(even[0]) + 1;
};

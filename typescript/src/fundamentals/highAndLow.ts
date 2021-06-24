export const highAndLow = (input: string): string => {
  const arrInput = input.split(' ').map(char => parseInt(char, 10));
  return `${Math.max(...arrInput)} ${Math.min(...arrInput)}`;
};

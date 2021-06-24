export const divisors = (
  x: number,
  counter: number = 0,
  current: number = x
): number => {
  const total = x % current === 0 ? counter + 1 : counter;
  return current === 1 ? total : divisors(x, total, current - 1);
};

divisors(4);

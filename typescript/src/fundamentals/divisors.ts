export const divisors = (
  x: number,
  counter: number = 0,
  current: number = x
): number =>
  current === 0
    ? counter
    : divisors(x, x % current === 0 ? counter + 1 : counter, current - 1);

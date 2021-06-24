import { iqTest } from './../../src/fundamentals/iqTest';

describe('iqTest', () => {
  it('should return 3 when input is "2 4 7 8 10"', () => {
    expect(iqTest('2 4 7 8 10')).toEqual(3);
  });

  it('should return 1 when input is "1 2 2"', () => {
    expect(iqTest('1 2 2')).toEqual(1);
  });
  it('should return 3 when input is "1 1 2"', () => {
    expect(iqTest('1 1 2')).toEqual(3);
  });
});

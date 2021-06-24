import { highAndLow } from '../../src/fundamentals/highAndLow';

describe('highAndLow', () => {
  it('should return "5 1" when input is "1 2 3 4 5"', () => {
    expect(highAndLow('1 2 3 4 5')).toEqual('5 1');
  });
  it('should return "5 -3" when input is "1 2 -3 4 5"', () => {
    expect(highAndLow('1 2 -3 4 5')).toEqual('5 -3');
  });
  it('should return "9 -5" when input is "1 9 3 4 -5"', () => {
    expect(highAndLow('1 9 3 4 -5')).toEqual('9 -5');
  });
});

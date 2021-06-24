import { divisors } from './../../src/fundamentals/divisors';

describe('divisors', function() {
  it('Testing for 1', () => expect(divisors(1)).toEqual(1));
  it('Testing for 10', () => expect(divisors(10)).toEqual(4));
  it('Testing for 11', () => expect(divisors(11)).toEqual(2));
  it('Testing for 54', () => expect(divisors(54)).toEqual(8));
  it('Testing for 64', () => expect(divisors(64)).toEqual(7));
});

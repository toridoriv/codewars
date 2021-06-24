import { removeChar } from './../../src/fundamentals/removeChar';

describe('removeChar', () => {
  it('returns string without its first and last character', () => {
    expect(removeChar('eloquent')).toEqual('loquen');
    expect(removeChar('country')).toEqual('ountr');
    expect(removeChar('person')).toEqual('erso');
    expect(removeChar('place')).toEqual('lac');
  });
});

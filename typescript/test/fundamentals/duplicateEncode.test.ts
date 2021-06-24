import { duplicateEncode } from './../../src/fundamentals/duplicateEncode';

describe('duplicateEncode', function() {
  it('should replace repeated characters with a ")" and unique values with "("', function() {
    expect(duplicateEncode('din')).toEqual('(((');
    expect(duplicateEncode('recede')).toEqual('()()()');
    expect(duplicateEncode('(( @')).toEqual('))((');
  });
  it('should not be case sensitive', () => {
    expect(duplicateEncode('Success')).toEqual(')())())');
  });
});

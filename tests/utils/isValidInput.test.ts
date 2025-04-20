import isValidInput from '../../src/utils/isValidInput';

describe('isValidInput', () => {
  it('should return true for valid input', () => {
    expect(isValidInput('abc', ['a', 'b', 'c'])).toBe(true);
  });

  it('should return false for non-string main input', () => {
    expect(isValidInput(123 as any, ['a'])).toBe(false);
  });

  it('should return false for non-array second argument', () => {
    expect(isValidInput('abc', 'def' as any)).toBe(false);
  });

  it('should return false for empty array of targets', () => {
    expect(isValidInput('abc', [])).toBe(false);
  });

  it('should return false if any target is not a string', () => {
    expect(isValidInput('abc', ['valid', 42 as any])).toBe(false);
  });
});

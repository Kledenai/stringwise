import { compareTwoStrings } from '../../src/core/compare';

describe('compareTwoStrings', () => {
  it('should return 1 for identical strings', () => {
    expect(compareTwoStrings('test', 'test')).toBe(1);
  });

  it('should return 1 for strings that differ only by whitespace', () => {
    expect(compareTwoStrings('a b c', 'abc')).toBe(1);
  });

  it('should return 0 if one string has less than 2 characters', () => {
    expect(compareTwoStrings('a', 'abc')).toBe(0);
    expect(compareTwoStrings('abc', 'a')).toBe(0);
    expect(compareTwoStrings('a', 'b')).toBe(0);
  });

  it('should return a value between 0 and 1 for partial matches', () => {
    const score = compareTwoStrings('night', 'nacht');
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThan(1);
  });

  it('should return 0 for completely different strings', () => {
    expect(compareTwoStrings('foo', 'bar')).toBe(0);
  });

  it('should handle empty strings correctly', () => {
    expect(compareTwoStrings('', '')).toBe(1);
    expect(compareTwoStrings('', 'abc')).toBe(0);
    expect(compareTwoStrings('abc', '')).toBe(0);
  });
});

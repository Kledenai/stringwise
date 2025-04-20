import { findBestMatch } from '../../src/core/findBestMatch';

describe('findBestMatch', () => {
  it('should return the exact match with highest rating', () => {
    const result = findBestMatch('hello', ['hell', 'world', 'hello']);
    expect(result.bestMatch.target).toBe('hello');
    expect(result.bestMatch.rating).toBe(1);
  });

  it('should return first best match if there are ties', () => {
    const result = findBestMatch('hi', ['ih', 'ih']);
    expect(result.bestMatchIndex).toBe(0);
  });

  it('should compute all ratings correctly', () => {
    const result = findBestMatch('apple', ['appl', 'pineapple', 'banana']);
    expect(result.ratings.length).toBe(3);
    expect(result.ratings.every(r => typeof r.rating === 'number')).toBe(true);
  });

  it('should throw an error for invalid arguments', () => {
    expect(() => findBestMatch('test', null as any)).toThrow();
    expect(() => findBestMatch(123 as any, ['a'])).toThrow();
    expect(() => findBestMatch('test', [])).toThrow();
    expect(() => findBestMatch('test', ['a', 1 as any])).toThrow();
  });
});

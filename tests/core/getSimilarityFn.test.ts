import { getSimilarityFn } from '../../src/core/similarity';

describe('getSimilarityFn', () => {
  it('should return the default algorithm if no argument is provided', () => {
    const fn = getSimilarityFn();
    expect(typeof fn).toBe('function');
    expect(fn('abc', 'abc')).toBe(1);
  });

  it('should return a function for each supported algorithm', () => {
    const algos = ['levenshtein', 'jaro-winkler', 'ratcliff-obershelp'] as const;

    algos.forEach((algo) => {
      const fn = getSimilarityFn(algo);
      expect(typeof fn).toBe('function');
      const score = fn('abc', 'abd');
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(1);
    });
  });

  it('should return the default algorithm for unknown values (fallback)', () => {
    const fn = getSimilarityFn('unknown' as any);
    expect(fn('abc', 'abc')).toBe(1);
  });
});

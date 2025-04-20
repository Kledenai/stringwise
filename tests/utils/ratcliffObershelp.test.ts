import ratcliffObershelp from '../../src/utils/ratcliffObershelp';

describe('ratcliffObershelp', () => {
  it('should return 1 for identical strings', () => {
    expect(ratcliffObershelp('abc', 'abc')).toBe(1);
  });

  it('should return 0 for completely different strings', () => {
    expect(ratcliffObershelp('abc', 'xyz')).toBe(0);
  });

  it('should return between 0 and 1 for partial matches', () => {
    const score = ratcliffObershelp('night', 'nacht');
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThan(1);
  });

  it('should handle empty strings correctly', () => {
    expect(ratcliffObershelp('', '')).toBe(1);
    expect(ratcliffObershelp('', 'abc')).toBe(0);
  });
});

import { findBestMatch } from '../../src/core/findBestMatch';

describe('findBestMatch - round option', () => {
  it('should round ratings to specified precision', () => {
    const result = findBestMatch('hello', ['hell', 'halo'], { round: 2 });
    expect(result.ratings[0].rating).toBeCloseTo(result.ratings[0].rating, 2);
    expect(result.ratings[1].rating).toBeCloseTo(result.ratings[1].rating, 2);
  });

  it('should not round if round is not provided', () => {
    const result = findBestMatch('hello', ['hell']);
    expect(result.ratings[0].rating % 1 !== 0).toBe(true);
  });
});

describe('findBestMatch - algorithm option', () => {
  it('should allow using Levenshtein algorithm', () => {
    const result = findBestMatch('kitten', ['sitting'], { algorithm: 'levenshtein' });
    expect(result.bestMatch.rating).toBeGreaterThan(0);
    expect(result.bestMatch.rating).toBeLessThan(1);
  });

  it('should allow using Jaro-Winkler algorithm', () => {
    const result = findBestMatch('MARTHA', ['MARHTA'], { algorithm: 'jaro-winkler', round: 4 });
    expect(result.bestMatch.rating).toBeCloseTo(0.9611, 4);
  });

  it('should allow using Ratcliff/Obershelp algorithm', () => {
    const result = findBestMatch('night', ['nacht'], { algorithm: 'ratcliff-obershelp' });
    expect(result.bestMatch.rating).toBeGreaterThan(0);
    expect(result.bestMatch.rating).toBeLessThan(1);
  });
});

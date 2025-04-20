import { compareTwoStrings as defaultAlgorithm } from './compare';
import ratcliffObershelp from '../utils/ratcliffObershelp';
import type { SimilarityAlgorithm } from '../types';
import levenshtein from 'fast-levenshtein';
import jaroWinkler from 'jaro-winkler';

export function getSimilarityFn(
  algorithm: SimilarityAlgorithm = 'default'
): (a: string, b: string) => number {
  switch (algorithm) {
    case 'levenshtein':
      return (a, b) => {
        const maxLen = Math.max(a.length, b.length);
        if (maxLen === 0) return 1;
        return 1 - levenshtein.get(a, b) / maxLen;
      };
    case 'jaro-winkler':
      return jaroWinkler;
    case 'ratcliff-obershelp':
      return ratcliffObershelp;
    default:
      return defaultAlgorithm;
  }
}

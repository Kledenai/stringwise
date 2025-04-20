import isValidInput from '../utils/isValidInput';
import { getSimilarityFn } from './similarity';
import type {
  FindBestMatchOptions,
  FindBestMatchResult,
  MatchRating
} from '../types';

export function findBestMatch(
  mainString: string,
  targets: string[],
  options?: FindBestMatchOptions
): FindBestMatchResult {
  if (!isValidInput(mainString, targets)) {
    throw new Error(
      'Invalid arguments: expected a string and an array of strings'
    );
  }

  const precision = options?.round;
  const similarityFn = getSimilarityFn(options?.algorithm || 'default');

  const ratings: MatchRating[] = targets.map((target) => {
    const rating = similarityFn(mainString, target);
    const rounded =
      typeof precision === 'number' ? Number(rating.toFixed(precision)) : rating;

    return {
      target,
      rating: rounded
    };
  });

  const bestMatchIndex = ratings.reduce(
    (bestIndex, current, i, arr) =>
      current.rating > arr[bestIndex].rating ? i : bestIndex,
    0
  );

  return {
    ratings,
    bestMatch: ratings[bestMatchIndex],
    bestMatchIndex
  };
}

import isValidInput from '../utils/isValidInput';
import { compareTwoStrings } from './compare';
import type { MatchRating } from '../types';

export function findBestMatch(
	mainString: string,
	targets: string[],
	options?: { round?: number }
): {
	bestMatch: MatchRating;
	bestMatchIndex: number;
	ratings: MatchRating[];
} {

	if (!isValidInput(mainString, targets)) {
		throw new Error(
			'Invalid arguments: expected a string and an array of strings'
		);
	}

	const precision = options?.round;

  const ratings = targets.map((target) => {
    const rating = compareTwoStrings(mainString, target);
    const rounded = typeof precision === 'number' ? Number(rating.toFixed(precision)) : rating;

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


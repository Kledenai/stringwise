import isValidInput from '../utils/isValidInput';
import { compareTwoStrings } from './compare';
import type { MatchRating } from '../types';

export function findBestMatch(
	mainString: string,
	targets: string[]
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

	const ratings = targets.map((target) => ({
		target,
		rating: compareTwoStrings(mainString, target)
	}));

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


export type SimilarityAlgorithm =
  | 'default'
  | 'levenshtein'
  | 'jaro-winkler'
  | 'ratcliff-obershelp';

export interface MatchRating {
  target: string;
  rating: number;
}

export interface FindBestMatchOptions {
  round?: number;
  algorithm?: SimilarityAlgorithm;
}

export interface FindBestMatchResult {
  bestMatch: MatchRating;
  bestMatchIndex: number;
  ratings: MatchRating[];
}
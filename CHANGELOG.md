## [1.0.1] - 2025-04-20

### Added

- Multiple similarity algorithms:
  - levenshtein (normalized)
  - jaro-winkler
  - ratcliff-obershelp (custom implementation)
  - Default remains the original bigram method
- Options support in findBestMatch:
  - algorithm: select which similarity strategy to use
  - round: control the precision of the output rating (e.g., 2 decimal places)
- Exported getSimilarityFn for direct algorithm access:
  - Enables low-level comparisons without using findBestMatch
- New test suites for:
  - Each similarity algorithm
  - Round precision behavior
  - Utility ratcliffObershelp isolated
  - Exported API surface coverage

### Improved

- Refactored internal architecture for better modularity and separation of concerns:
  - Moved algorithm definitions to similarity.ts
  - Separated types into types.ts
  - Isolated ratcliffObershelp in utils
- Aligned default behavior of bigram algorithm with expected string normalization
- Improved project metadata:
  - Updated keywords and description in package.json for better discoverability

### Fixed

- Correct handling of empty strings in ratcliffObershelp to prevent NaN errors

### Notes

- This version lays the groundwork for future support of:
  - Case-insensitive comparison
  - Threshold-based result filtering
  - Custom user-defined similarity functions
  - Locale-aware string comparison

## [1.0.0] - 2025-04-20

### Added

- Initial release of **stringwise**, a lightweight and efficient string similarity library written in TypeScript.
- Core functionality to:
  - Compare two strings using bigram-based similarity and return a score between 0 and 1.
  - Find the best match for a given string among an array of candidates based on similarity score.
- TypeScript type definitions for `MatchRating` and `BestMatchResult`.
- Validation utility `isValidInput` for internal input integrity checks.
- Example usage and API documentation included in the README.
- ESLint configuration for consistent code quality.
- Jest setup for unit testing all core functionalities.
- License (MIT).
- Scripts for building, testing, linting, and cleaning in `package.json`.

### Fixed

- Handled edge cases where strings are too short (less than 2 characters) or empty.
- Removed whitespace before comparison to ensure consistent results.

### Notes

- Initial release includes complete comparison and matching functionalities based on bigram similarity.
- Future updates may include advanced NLP techniques, custom scoring algorithms, and locale-aware comparisons.

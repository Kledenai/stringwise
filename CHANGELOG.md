## [1.0.0] - 2025-04-20

### Added

- Initial release of **stringwise**, a lightweight and efficient string similarity library written in TypeScript.
- Core functionality to:
  - 🔠 Compare two strings using bigram-based similarity and return a score between 0 and 1.
  - 🧠 Find the best match for a given string among an array of candidates based on similarity score.
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

[![npm version](https://img.shields.io/npm/v/stringwise)](https://www.npmjs.com/package/stringwise)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kledenai/stringwise/ci.yml)](https://github.com/kledenai/stringwise/actions)
[![License](https://img.shields.io/npm/l/stringwise)](https://github.com/kledenai/stringwise/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/stringwise)](https://www.npmjs.com/package/stringwise)

# stringwise

**stringwise** is a fast and lightweight TypeScript library for comparing string similarity using multiple algorithms like bigrams, Levenshtein, Jaro-Winkler, and Ratcliff/Obershelp. It’s ideal for fuzzy searching, intelligent suggestions, and natural language processing tasks where accuracy and performance matter.

## ✨ Why Use stringwise?

- ⚡️ **Efficient and Lightweight**: Built for real-time performance in search and suggestion engines.
- 🧠 **Multiple Algorithms**: Choose from `default`, `levenshtein`, `jaro-winkler`, or `ratcliff-obershelp`.
- 🎯 **Precise Similarity Control**: Use `round` option to control rating precision.
- 🔍 **Fuzzy Matching Made Easy**: Quickly identify the best match among multiple strings.
- 🔒 **Fully Typed**: Built with TypeScript for a safer developer experience.
- 📦 **Modular Structure**: Ready to scale with your application needs.

## 📦 Installation

Install via npm or yarn:

```bash
npm install stringwise
```

or

```bash
yarn add stringwise
```

## 🚀 Usage

### Importing

```ts
import { compareTwoStrings, findBestMatch, getSimilarityFn } from "stringwise";
```

### Compare Two Strings

```ts
compareTwoStrings("hello", "h3llo"); // e.g. 0.5
```

### Find Best Match

```ts
const result = findBestMatch("hello", ["halo", "hell", "hello", "world"]);

console.log(result.bestMatch);
// { target: 'hello', rating: 1 }

console.log(result.ratings);
/*
[
  { target: 'halo', rating: 0.2857142857142857 },
  { target: 'hell', rating: 0.8571428571428571 },
  { target: 'hello', rating: 1 },
  { target: 'world', rating: 0 }
]
*/
```

### Use with Options

```ts
const result = findBestMatch("kitten", ["sitting"], {
  algorithm: "levenshtein",
  round: 3,
});
```

### Direct Algorithm Access

```ts
const sim = getSimilarityFn("jaro-winkler");
console.log(sim("MARTHA", "MARHTA")); // ~0.9611
```

## 🧠 API

### `compareTwoStrings(a: string, b: string): number`

Returns a similarity score between `0` and `1` using bigram overlap.

---

### `findBestMatch(main: string, targets: string[], options?: FindBestMatchOptions): FindBestMatchResult`

Returns an object containing:

- `bestMatch`: The string with the highest similarity
- `bestMatchIndex`: Index in the original list
- `ratings`: All similarity scores

Options:

```ts
type FindBestMatchOptions = {
  round?: number; // Decimal places
  algorithm?: "default" | "levenshtein" | "jaro-winkler" | "ratcliff-obershelp";
};
```

---

### `getSimilarityFn(algorithm: string): (a: string, b: string) => number`

Returns the similarity function for a given algorithm name.

---

### Types

```ts
type MatchRating = {
  target: string;
  rating: number;
};

type FindBestMatchResult = {
  bestMatch: MatchRating;
  bestMatchIndex: number;
  ratings: MatchRating[];
};
```

## ✅ Requirements

- Node.js v14.0.0 or newer
- TypeScript (recommended)

## 🛡 License

Licensed under the MIT License. See the [LICENSE](https://github.com/kledenai/stringwise/blob/main/LICENSE) file for more details.

## 🤝 Contributing

Contributions are welcome! Whether it's a bug fix, feature, or idea — feel free to open a pull request.

1. Fork the repo
2. Create your branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'feat: awesome feature'`
4. Push and open a PR on GitHub

## 👤 Author

Created by **Kledenai**  
📫 [me@kledenai.com](mailto:me@kledenai.com)  
🌍 [github.com/kledenai](https://github.com/kledenai)

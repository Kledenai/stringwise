export function compareTwoStrings(strA: string, strB: string): number {
	const cleanA = strA.replace(/\s+/g, '');
	const cleanB = strB.replace(/\s+/g, '');

	if (cleanA === cleanB) return 1;
	if (cleanA.length < 2 || cleanB.length < 2) return 0;

	const bigramsA = new Map<string, number>();
	for (let i = 0; i < cleanA.length - 1; i++) {
		const bigram = cleanA.substring(i, i + 2);
		bigramsA.set(bigram, (bigramsA.get(bigram) || 0) + 1);
	}

	let intersection = 0;
	for (let i = 0; i < cleanB.length - 1; i++) {
		const bigram = cleanB.substring(i, i + 2);
		const count = bigramsA.get(bigram);
		if (count) {
			bigramsA.set(bigram, count - 1);
			intersection++;
		}
	}

	return (2 * intersection) / (cleanA.length + cleanB.length - 2);
}

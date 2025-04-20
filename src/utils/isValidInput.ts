export default function isValidInput(input: string, targets: string[]): boolean {
	return (
		typeof input === 'string' &&
		Array.isArray(targets) &&
		targets.length > 0 &&
		targets.every((s) => typeof s === 'string')
	);
}

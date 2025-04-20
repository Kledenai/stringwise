export default function ratcliffObershelp(a: string, b: string): number {
  if (a === '' && b === '') return 1;
  if (a === '' || b === '') return 0;

  function findMatch(a: string, b: string): number {
    if (!a || !b) return 0;

    let longest = '';
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        let k = 0;
        while (i + k < a.length && j + k < b.length && a[i + k] === b[j + k]) {
          k++;
        }
        if (k > longest.length) {
          longest = a.slice(i, i + k);
        }
      }
    }

    if (!longest) return 0;

    const aStart = a.indexOf(longest);
    const aEnd = aStart + longest.length;
    const bStart = b.indexOf(longest);
    const bEnd = bStart + longest.length;

    return (
      longest.length +
      findMatch(a.slice(0, aStart), b.slice(0, bStart)) +
      findMatch(a.slice(aEnd), b.slice(bEnd))
    );
  }

  const totalMatch = findMatch(a, b);
  return (2 * totalMatch) / (a.length + b.length);
}

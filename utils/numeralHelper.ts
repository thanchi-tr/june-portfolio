export const numberToGreekNumeral = (num: number) => {
  const greekNumerals: [string, number][] = [
    ["I", 1], // I for 1
    ["V", 5], // V for 5
    ["X", 10], // X for 10
    ["L", 50], // L for 50
    ["C", 100], // C for 100
    ["D", 500], // D for 500
    ["M", 1000], // M for 1000
  ];

  let result: string = "";

  // Start with the largest numeral and work downward
  for (let i = greekNumerals.length - 1; i >= 0; i--) {
    const [letter, value] = greekNumerals[i];
    while (num >= value) {
      result += letter;
      num -= value;
    }
  }

  return result;
};

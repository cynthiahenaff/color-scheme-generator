import hexToHSL from './utils/hexToHsl.js';

const tints = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

export default inputColors => {
  const { string, hue, saturation, lightness } = hexToHSL(inputColors);

  const getColorTint = input => {
    const lightnessArray = Array.from(
      Array(10),
      (_, i) => Math.round(i * 8.88) + 15,
    );

    const closesLightness = lightnessArray.reduce((prev, curr) =>
      Math.abs(curr - input) < Math.abs(prev - input) ? curr : prev,
    );

    return tints[lightnessArray.indexOf(closesLightness)];
  };

  const colorScheme = tints.map((tint, index) => {
    if (tint === getColorTint(lightness)) {
      return { tint, color: string };
    }

    const newLightness = Math.round(index * 8.88) + 15;

    return {
      tint,
      color: `hsl(${hue},${saturation},${newLightness})`,
    };
  });

  return colorScheme.reduce(
    (prev, curr) => ({ ...prev, [curr?.tint]: curr?.color }),
    {},
  );
};

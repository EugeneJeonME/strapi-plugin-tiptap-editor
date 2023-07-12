import { getNormalizedColor } from './normalized';

export { getNormalizedColor };

export const DaisyUiColors = {
  primary: '#6419E6', // Primary (--p --pc)
  secondary: '#D926A9', // Secondary (--s / --sc)
  accent: '#1FB2A6', // Accent (--a / --ac)
  success: '#36D399', // Success (--su / --suc)
  warning: '#FBBD23', // Warning (--wa / --wac)
  info: '#3ABFF8', // Info (--in / --inc)
  error: '#F87272', // Error (--er / --erc)
};

export const DaisyUiColorKeys = Object.keys(
  DaisyUiColors
) as (keyof typeof DaisyUiColors)[];

export const getDaisyUiColor = (
  colorKey: keyof typeof DaisyUiColors | string | undefined
) =>
  colorKey && DaisyUiColorKeys.find(key => key === colorKey)
    ? DaisyUiColors[colorKey as keyof typeof DaisyUiColors]
    : undefined;

export const getDaisyUiColorKey = (color: string) =>
  DaisyUiColorKeys.find(key => {
    const normalizedDaisyUiColor = getNormalizedColor(DaisyUiColors[key]);
    return (
      normalizedDaisyUiColor &&
      normalizedDaisyUiColor === getNormalizedColor(color)
    );
  });

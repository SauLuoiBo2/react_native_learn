import {fonts, light_colors, opacity, shadows} from '@src/assets';
import {extendTheme} from 'native-base';

export const theme_native_base = extendTheme({
  colors: light_colors,

  fonts: fonts.fonts,
  fontConfig: fonts.fontConfig,
  shadows,
  opacity,
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});

type CustomThemeType = typeof theme_native_base;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

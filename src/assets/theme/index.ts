import {COLORS} from './colors';
import {darkTheme} from './darkTheme';
import {FONTS} from './fonts';
import {lightTheme} from './lightTheme';
import {SIZES} from './sizes';
export * from './base';
export const selectedTheme = darkTheme;

const appTheme = {COLORS, SIZES, FONTS, darkTheme, lightTheme};

export default appTheme;

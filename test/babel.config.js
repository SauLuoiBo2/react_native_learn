module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': ['./src'],
          '@utils': ['./src/util'],
          '@libs': ['./src/libs'],
          '@assets': ['./src/assets'],
          '@configs': ['./src/configs'],
          '@modules': ['./src/modules'],
          '@components': ['./src/components'],
          '@hooks': ['./src/hooks'],
          '@models': ['./src/models'],
          '@widgets': ['./src/widgets'],
          '@api': ['./src/api'],
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.json'],
      },
    ],
  ],
};

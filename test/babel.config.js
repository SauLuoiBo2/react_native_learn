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
          '@config': ['./src/config'],
          '@module': ['./src/screen'],
          '@components': ['./src/components'],
          '@hooks': ['./src/hooks'],
          '@model': ['./src/model'],
          '@api': ['./src/api'],
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.json'],
      },
    ],
  ],
};

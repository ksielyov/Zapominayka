module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@fonts': './src/shared/assets/fonts',
        },
      },
    ],
  ],
};

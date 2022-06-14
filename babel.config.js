module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@fonts': './src/shared/assets/fonts',
          '@colors': './src/shared/colors',
          '@ui': './src/shared/ui',
          '@icons': './src/shared/icons',
        },
      },
    ],
  ],
};

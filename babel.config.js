module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@fonts': './src/shared/assets/fonts',
          '@colors': './src/shared/colors',
          '@ui': './src/shared/ui',
          '@icons': './src/shared/icons',
          '@hooks': './src/shared/lib/hooks',
        },
      },
    ],
  ],
};

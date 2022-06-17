module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@fonts': './src/shared/assets/fonts',
          '@colors': './src/shared/colors',
          '@ui': './src/shared/ui',
          '@icons': './src/shared/icons',
          '@hooks': './src/shared/lib/hooks',
          '@images': './src/shared/assets/images',
        },
      },
    ],
  ],
};

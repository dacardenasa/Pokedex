module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};

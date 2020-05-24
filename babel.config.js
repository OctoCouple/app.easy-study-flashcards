// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src/',
            '@components': './src/components',
            '@pages': './src/pages',
            '@store': './src/store/ducks',
            '@api': './src/service/api',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
        ],
      },
    },
  }
}

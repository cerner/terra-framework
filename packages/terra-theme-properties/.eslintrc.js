module.exports = {
  extends: '@cerner/terra',
  root: true,
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};

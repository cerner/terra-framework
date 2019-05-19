module.exports = () => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
    babelrcRoots: ['.', 'packages/*'],
  };
};

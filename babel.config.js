module.exports = (api) => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign',
  ];

  return {
    presets,
    plugins,
    babelrcRoots: ['.', 'packages/*'],
  };
};

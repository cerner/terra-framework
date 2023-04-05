const defaultSearchPatterns = [
  /* root level dependency translations up to three levels deep */
  'node_modules/*/node_modules/*/node_modules/*/translations',
  'node_modules/*/node_modules/*/translations',
  'node_modules/*/translations',
  'node_modules/@cerner/*/node_modules/@cerner/*/node_modules/@cerner/*/translations',
  'node_modules/@cerner/*/node_modules/@cerner/*/translations',
  'node_modules/@cerner/*/translations',

  /* root level translations */
  'translations',

  /* package level dependency translations up to three levels deep */
  'packages/*/node_modules/*/node_modules/*/node_modules/*/translations',
  'packages/*/node_modules/*/node_modules/*/translations',
  'packages/*/node_modules/*/translations',
  'packages/*/node_modules/@cerner/*/node_modules/@cerner/*/node_modules/@cerner/*/translations',
  'packages/*/node_modules/@cerner/*/node_modules/@cerner/*/translations',
  'packages/*/node_modules/@cerner/*/translations',
  /* package level translations */
  'packages/terra-*/translations',
];

module.exports = defaultSearchPatterns;

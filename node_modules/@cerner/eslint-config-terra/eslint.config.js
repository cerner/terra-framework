module.exports = {
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'compat',
    'formatjs',
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // Remove warnings on max line length exceeding 100 characters
    'max-len': 'off',
    // Disabled the requirement to default all non-required props
    'react/require-default-props': 'off',
    'compat/compat': 'error',
    // Disable this rule as it has been marked as deprecated in jsx-a11y plugin
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/releases/tag/v6.1.0
    'jsx-a11y/label-has-for': 'off',
    // Replaces jsx-a11y/label-has-for rule. By default, it wants inputs to be both wrapped in a label
    // and include a id/for attribute mapping with label.
    // This config updates the rule to require one or the other.
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-multiple-empty-lines': ['warn', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'react/destructuring-assignment': 'off',
    'react/forbid-component-props': ['error', { forbid: ['style'] }],
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-fragments': 'off',
    'arrow-parens': 'off',
    // The following formatjs rules will throw warnings, will be changed to error in next MVB.
    'formatjs/blacklist-elements': 'warn',
    'formatjs/enforce-placeholders': 'warn',
    'formatjs/enforce-plural-rules': 'warn',
    'formatjs/no-camel-case': 'warn',
    'formatjs/no-emoji': 'warn',
    'formatjs/no-multiple-whitespaces': 'warn',
    'formatjs/no-multiple-plurals': 'warn',
    'formatjs/no-offset': 'warn',
    'formatjs/enforce-id': 'warn',
    'formatjs/no-complex-selectors': 'warn',
    // The following rules have been disabled for translations to work as expected.
    'formatjs/no-id': 'off',
    'formatjs/enforce-description': 'off',
    'formatjs/enforce-default-message': 'off',

  },
  settings: {
    polyfills: [
      'Array.from',
      'Map',
      'Number.isNaN',
      'Number.isInteger',
      'Number.parseFloat',
      'Object.assign',
      'Object.values',
      'Object.entries',
      'Promise',
      'Set',
    ],
  },
  overrides: [
    {
      files: ['**/jest/**/*.test.*'],
      rules: {
        'no-unused-expressions': 'off',
      },
      globals: {
        mount: true,
        shallow: true,
        render: true,
      },
    },
    {
      files: ['**/wdio/**/*-spec.*', '**/full-stack/**/*-spec.*'],
      rules: {
        'no-unused-expressions': 'off',
      },
      globals: {
        after: true,
        before: true,
        browser: true,
        FullStack: true,
        Terra: true,
        $: true,
      },
    },
    {
      files: ['**/*/*-dev-site/**/*.jsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
      },
    },
  ],
};

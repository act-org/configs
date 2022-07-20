/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'airbnb',
    './typescript',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    './rules/react',
    './rules/pretter',
  ],
  plugins: ['jest', 'jsx-a11y', 'filenames'],
  rules: {
    'filenames/match-exported': [
      'error',
      ['camel', 'pascal'],
      '\\.(android|config|ios|test|config.js)$',
    ],
    'filenames/match-regex': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

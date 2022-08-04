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
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    './rules/lodash',
    './rules/noloops',
    './rules/promise',
    './rules/security',
    './rules/cspell',
    './rules/prettier',
  ],
  plugins: [],
  //root: true,
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    eqeqeq: 'error',
    'function-paren-newline': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__DEV__',
          '__ENV__',
          '__typename',
          '_cachedRowCount',
          '_dataBlob',
          '_ensureIndex',
          '_id',
          '_typename',
        ],
        allowAfterThis: true,
      },
    ],
    'no-use-before-define': 'off',
    'prefer-destructuring': [
      'off',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    semi: ['error', 'always'],
  },
};

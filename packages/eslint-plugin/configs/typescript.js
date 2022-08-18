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
  extends: ['./base', './rules/typescript', './rules/prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 2017,
    project: 'tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

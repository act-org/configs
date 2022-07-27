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
    './rules/filenames',
    './rules/sortkeys',
    './rules/react',
    './rules/prettier',
  ],
  plugins: ['jest', 'jsx-a11y'],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

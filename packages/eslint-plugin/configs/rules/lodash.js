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
  extends: ['plugin:lodash/recommended'],
  plugins: ['lodash'],
  rules: {
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-method': 'off',
  },
};

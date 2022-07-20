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
  plugins: ['promise'],
  rules: {
    'promise/always-return': 'error',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
  },
};

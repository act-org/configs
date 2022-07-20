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
  rules: {
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
};

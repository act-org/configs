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
  extends: ['plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    'import/extensions': [
      'error',
      'never',
      {
        scss: 'always',
        css: 'always',
        json: 'always',
      },
    ],
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.spec.*',
          '**/*.e2e-spec.*',
          '**/*.stories.*',
          '**/*.test.*',
          '**/test/**/*.*',
        ],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        commonjs: true,
      },
    ],
    'import/order': 'off',
  },
};

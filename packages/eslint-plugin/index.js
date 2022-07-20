/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
  rules: {},
  configs: {
    base: { extends: ['./configs/base'] },
    react: { extends: ['./configs/react'] },
    typescript: { extends: ['./configs/typescript'] },
    nest: { extends: ['./configs/nest'] },
  },
};

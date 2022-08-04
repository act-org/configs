/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/** @type {import('@cspell/eslint-plugin').Options} */
const cspellOptions = {
  checkComments: true,
  // generateSuggestions: true,
  // ignoreImports: true,
  // ignoreImportProperties: true,
  // checkStringTemplates: true,
  // checkStrings: true,
  // numSuggestions: 8,
  // checkIdentifiers: true,
  // debugMode: true,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@cspell'],
  rules: {
    '@cspell/spellchecker': ['warn', cspellOptions],
  },
};

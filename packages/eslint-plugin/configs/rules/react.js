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
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-deprecated': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'childContextTypes',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          'static-methods': [
            'displayName',
            'props',
            'state',
            'contextType',
            'contextTypes',
            'defaultProps',
            'getInitialProps',
            'navigationOptions',
          ],
        },
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
};

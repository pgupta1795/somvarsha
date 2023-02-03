module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-param-reassign': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'object-shorthand': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 0,
    'no-console': 'off',
    'no-alert': 'off',
    'func-names': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'false' }],
  },
};

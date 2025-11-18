// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build output
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    // Extend recommended configs
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'], 
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'strict': ['error', 'global'], // Enforce strict mode globally
      'no-var': 'error', // Disallow var
      'prefer-const': 'error', // Prefer const over let
      'no-unused-vars': 'off', // Disable base rule
      '@typescript-eslint/no-unused-vars': ['error'], // Use TS rule
      'for-direction': 'error', // Detect wrong direction in for loops
      'no-dupe-else-if': 'error', // Disallow duplicate else-if conditions
      'no-duplicate-case': 'error', // Disallow duplicate switch cases
      'no-dupe-keys': 'error', // Disallow duplicate keys in objects
      'no-unneeded-ternary': 'error', // Disallow unnecessary ternary expressions
      'semi': ['error', 'always'], // Require semicolons
      'react-refresh/only-export-components': 'warn', // Warn if non-components are exported
      "@typescript-eslint/no-empty-object-type": "warn",

      // Replace camelcase with the TS-safe naming convention
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'variableLike',
          'format': ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
      ],

      'eqeqeq': 'error', // Require === and !==
      'no-cond-assign': 'warn', // Warn on assignments in conditionals
      'brace-style': 'error', // Enforce consistent brace style
      'no-array-constructor': 'error', // Disallow Array constructor
      'yoda': 'error', // Require Yoda conditions
      'no-nested-ternary': 'error', // Disallow nested ternaries
      'space-infix-ops': 'error', // Require spaces around operators
      'no-empty': 'warn', // Warn on empty blocks
    },
  },
]);
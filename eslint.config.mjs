import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore patterns migrated from .eslintignore
  {
    ignores: ['node_modules/', 'main.js'],
  },

  // Equivalent to "eslint:recommended"
  js.configs.recommended,

  // TypeScript recommended rules (non type-aware; matches previous setup)
  ...tseslint.configs.recommended,

  // Project-specific overrides migrated from .eslintrc
  {
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // Keep behavior consistent with previous config
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];

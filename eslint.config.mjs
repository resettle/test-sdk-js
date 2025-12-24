import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sortExportAll from 'eslint-plugin-sort-export-all'

export default defineConfig([
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2019,
      sourceType: 'module',
      parserOptions: {},
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      'sort-export-all': sortExportAll,
    },
    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'warn',
      'prefer-rest-params': 'off',
      'simple-import-sort/imports': 'error',
      'sort-export-all/sort-export-all': 'error',
    },
  },
  {
    files: ['packages/*/src/**/*.ts'],
    ignores: ['packages/*/src/**/*.spec.ts'],
  },
])

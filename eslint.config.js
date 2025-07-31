import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Global ignores
  {
    ignores: ['coverage/**/*', 'dist/**', 'node_modules/**', '**/_fixtures/**'],
  },
  // Base config for JS/TS source files
  {
    files: ['src/**/*.ts'],
    ignores: ['**/*.test.ts', '**/_fixtures/**'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },
  // Config files - basic lint only
  {
    files: ['*.config.{js,ts}'],
    extends: [eslint.configs.recommended],
  },
  // Test files - basic TypeScript lint only, no type checking
  {
    files: ['**/*.test.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
)

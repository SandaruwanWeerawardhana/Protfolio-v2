import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import sonarjs from 'eslint-plugin-sonarjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/no-commented-code': 'error',
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/no-nested-incdec': 'error',
      'sonarjs/no-reference-error': 'error',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
    'next-migration-scaffold/**',
  ]),
]);

export default eslintConfig;

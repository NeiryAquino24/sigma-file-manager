/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@intlify/vue-i18n/recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
          'type'
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    curly: ['error', 'all'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', {'after': true}],
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-tabs': 'error',
    'no-trailing-spaces': ['error'],
    'no-await-in-loop': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'block-spacing': 'error',
    'dot-location': ['error', 'property'],
    'prefer-template': 'error',
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'off',
    'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array-simple'
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/html-indent': 'error',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false,
      // Allow namespaced component names, e.g. <Foo.Bar />
      ignores: ['/^[A-Z][a-zA-Z]*(\\.[A-Z][a-zA-Z]*)*$/']
    }],
    'vue/max-attributes-per-line': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/component-tags-order': ['error', {
      'order': [ 'script', 'template', 'style' ]
    }],
    '@intlify/vue-i18n/no-raw-text': [
      'warn',
      {
        'ignoreText': [
          '(', ')', '(+', '[', ']', '{', '}', ' ',
          ',', '.', '...', ';', ':', '"', '\'', '—',
          '+', '-', '=', '%', '@', '|', '/', '\\',
          'Alt', 'Ctrl', 'Shift', 'Meta', 'Enter'
        ]
      }
    ]
  },
  settings: {
    'vue-i18n': {
      localeDir: 'localization/messages'
    }
  }
};
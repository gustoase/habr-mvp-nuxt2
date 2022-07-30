module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'max-len': ['warn', { code: 150 }],
    camelcase: 'off',
    semi: 'off',
    'arrow-parens': 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-console': process.env.NODE_ENV === 'prod' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'off' : 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/no-v-html': 'off',
    'import/order': 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'brace-style': 'off'
  },
  settings: {
    'import/core-modules': ['vue', 'vue-meta', 'vuex'] // these modules are included in nuxt.js
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};

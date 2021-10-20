module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'eslint:recommended',
    // 'prettier/@typescript-eslint',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    //"plugin:vue/recommended",
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    // 'no-unused-vars': 'off',
    // 'vue/html-closing-bracket-newline': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['dist'],
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
    // "plugin:vue/essential",
    // "eslint:recommended",
    // "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint"
  ],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 0
  }
}

module.exports = {
  rules: {
    'valid-appcardcode-code-prop': 'error',
    'valid-appcardcode-demo-sfc': 'error',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-invalid-meta': 'off',
      },
    },
  ],
}

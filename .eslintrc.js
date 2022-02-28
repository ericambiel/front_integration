/* jshint -W117 */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  // "rules": {
  //   // I suggest you add those two rules:
  //   "@typescript-eslint/no-unused-vars": "error",
  //   "@typescript-eslint/no-explicit-any": "error",
  // }
};

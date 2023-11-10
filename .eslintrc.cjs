/* eslint-env node */
module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    parserOptions: {
        project: './tsconfig.json'
    },
    ignorePatterns: ["node_modules/**", "build/**", "babel.config.js", ".eslintrc.cjs"],
    rules: {
        'import/prefer-default-export': 0
    }
  };
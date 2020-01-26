module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/camelcase": [ "off" ],
    "@typescript-eslint/member-delimiter-style": [ "error", {
      multiline: {
        delimiter: "none",
      },
      singleline: {
        delimiter: "comma",
      },
    } ],
    "@typescript-eslint/no-unused-vars": [ "error", {
      argsIgnorePattern: "^_",
    } ],
    "@typescript-eslint/type-annotation-spacing": [ "off" ],
  },
};

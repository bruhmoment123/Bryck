module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "date-fns/locale",
            message:
              "Please, import a specific locale instead, e.g. `import enUS from 'date-fns/locale/en-US';`",
          },
        ],
        patterns: ["!date-fns/locale/*"],
      },
    ],
  },
};

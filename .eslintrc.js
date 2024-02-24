import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  someConfig,
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: "airbnb-base",
    overrides: [
      {
        env: {
          node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
          sourceType: "script",
        },
      },
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      "prettier/prettier": [
        1,
        {
          trailingComma: "es5",
          //to enable single quotes
          singleQuote: true,
          semi: true,
        },
      ],
      ...require("eslint-config-prettier").rules,
      ...require("eslint-config-prettier/@typescript-eslint").rules,
    },

    extends: ["some-other-config-you-use", "prettier"],
  },
  eslintConfigPrettier,
];

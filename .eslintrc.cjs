module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    // TODO: VSCode's eslint extension errors out with
    // Failed to load plugin '@typescript-eslint' declared in '.eslintrc.cjs':
    // Cannot find module '@typescript-eslint/eslint-plugin'
    // Why?
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};

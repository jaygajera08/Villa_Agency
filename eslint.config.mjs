import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Detect React version for proper rule support
      },
    },
    rules: {
      // ✅ Enable PropTypes checks
      "react/prop-types": "error",             // Require PropTypes
      "react/no-unused-prop-types": "warn",    // Warn on props defined but not used
      "react/no-typos": "error",               // Catch typos in PropTypes declarations
    },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
]);

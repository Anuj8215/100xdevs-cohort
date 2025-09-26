import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

export default [{
  files: ["src/**/*.{js,mjs,cjs,ts}"],
  ignores: [
    "src/**/*.test.{js,ts}",
    "src/**/*.spec.{js,ts}",
    "dist",
  ],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.es2025
    },
    parser: tseslintParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      tsconfigRootDir: import.meta.dirname,
      project: "./tsconfig.json"
    },
  },
  plugins: {
    "@typescript-eslint": tseslintPlugin,
    import: importPlugin,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...tseslintPlugin.configs.recommended.rules,

    "no-process-exit": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info", "dir"] }],
    "callback-return": ["error", ["callback", "cb", "next"]],

    "import/first": "error",
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": "error",
    "import/no-self-import": "error",
    "import/no-cycle": ["error", { maxDepth: 1 }],
    "import/no-mutable-exports": "error",
    "import/named": "error",
    "import/default": "error",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": ["error", { devDependencies: false }],
    "import/no-absolute-path": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/export": "error",
    "import/no-anonymous-default-export": "error",


    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-multi-assign": "error",
    "no-implicit-globals": "error",
    "eqeqeq": ["error", "always"],
    "no-useless-return": "error",
    "no-useless-concat": "error",
    "no-lonely-if": "error",
    "no-else-return": "error",
    "consistent-return": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }],
    "curly": ["error", "multi-or-nest"],
    "comma-dangle": ["error", "never"],
    "semi": ["error", "always"],

    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as", objectLiteralTypeAssertions: "never" }],
    "@typescript-eslint/no-explicit-any": "error",
  }
}];
module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb"
    ],
    "plugins": [],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
        "linebreak-style": 0,
        "prefer-template": 0,
        "arrow-parens": ["error", "always"],
        "indent": ["error", 4, {
            "ignoredNodes": ["TemplateLiteral"],
        }],
        "newline-per-chained-call": 0,
        "operator-linebreak": ["error", "after"],
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true,
            "variables": true
        }],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],
        "max-len": ["error", 500, 2, {
            "ignoreUrls": true,
            "ignoreComments": false,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],
        "no-useless-constructor": 0,
        "import/no-unresolved": 0,
        "no-console": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "template-curly-spacing": 0,
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight"],
            "aspects": ["invalidHref", "preferButton"]
        }],
    }
};

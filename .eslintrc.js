'use strict';


module.exports = {
    extends: ['eslint:recommended'],

    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'script',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },

    // We're stricter than the default config, mostly. We'll override a few rules
    // and then enable some React specific ones.
    rules: {
        'accessor-pairs': OFF,
        'brace-style': [ERROR, '1tbs'],
        'consistent-return': OFF,
        'dot-location': [ERROR, 'property'],
        // We use console['error']() as a signal to not transform it:
        'dot-notation': [ERROR, {allowPattern: '^(error|warn)$'}],
        'eol-last': ERROR,
        eqeqeq: [ERROR, 'allow-null'],
        indent: OFF,
        'jsx-quotes': [ERROR, 'prefer-double'],
        'keyword-spacing': [ERROR, {after: true, before: true}],
        'no-bitwise': OFF,
        'no-console': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-restricted-globals': [ERROR].concat(restrictedGlobals),
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-shadow': ERROR,
        'no-unused-expressions': ERROR,
        'no-unused-vars': [ERROR, {args: 'none'}],
        'no-use-before-define': OFF,
        'no-useless-concat': OFF,
        quotes: [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'space-before-blocks': ERROR,
        'space-before-function-paren': OFF,
        'valid-typeof': [ERROR, {requireStringLiterals: true}],
        // Flow fails with with non-string literal keys
        'no-useless-computed-key': OFF,

        // We apply these settings to files that should run on Node.
        // They can't use JSX or ES6 modules, and must be in strict mode.
        // They can, however, use other ES6 features.
        // (Note these rules are overridden later for source files.)
        'no-var': ERROR,
        strict: ERROR,

    },

    globals: {
        __EXPERIMENTAL__: true,
        __EXTENSION__: true,
        __PROFILE__: true,
        __TEST__: true,
        __UMD__: true,
        __VARIANT__: true,
        gate: true,
        trustedTypes: true,
    },
};
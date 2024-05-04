// @ts-ignore
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'lkx-fsd',
    ],
    rules: {
        quotes: ['error', 'single'],
        // 'arrow-body-style': ['error', 'as-needed'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        // 'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/no-unstable-nested-components': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'to',
                    'data-testid',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'Component',
                    'as',
                    'refName',
                    'border',
                    'theme',
                ],
            },
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'lkx-fsd/path-checker': ['error', { alias: '@' }],
        'lkx-fsd/order-imports': ['error', { alias: '@' }],
        'lkx-fsd/public-import': [
            'error',
            {
                alias: '@',
                layersPlusOne: ['shared'],
                otherPublicImport: 'testing',
                otherPublicPatterns: [
                    '**/*.stories.{ts,tsx}',
                    '**/*.test.{ts,tsx}',
                    '**/cypress/**/*.{ts,tsx}',
                ],
                sharedEnclosure: ['lib', 'assets', 'config'],
                featuresEnclosure: ['Article', 'Switcher', 'Profile'],
                pageEnclosure: ['Article', 'Admin'],
            },
        ],
        'lkx-fsd/layer-checker': ['error', { alias: '@' }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};

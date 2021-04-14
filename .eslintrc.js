module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'prettier',
        'prettier/vue',
    ],
    rules: {
        'vue/no-unused-vars': 'error',
        'prettier/prettier': ['error'],
    },
};

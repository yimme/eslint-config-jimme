module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'vue/no-unused-vars': 'error',
        'prettier/prettier': ['error'],
    },
};

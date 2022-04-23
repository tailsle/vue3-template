module.exports = {
	parser: 'vue-eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended',
	],

	plugins: ['vue', '@typescript-eslint', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	rules: {
		'prettier/prettier': 'off',
	},
};

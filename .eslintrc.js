module.exports = {
	parser: 'vue-eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended',
		'./.eslintrc-auto-import.json',
	],

	plugins: ['vue', '@typescript-eslint', 'prettier'],
	parserOptions: {
		ecmaVersion: 2022,
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
		indent: ['error', 4],
		semi: ['error'],
		'vue/multi-word-component-names':'off'
	},
};

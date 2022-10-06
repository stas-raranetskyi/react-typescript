module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'google',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'require-jsdoc': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'max-len': [
			'error',
			{
				ignorePattern: '^import [^,]+ from |^export | implements',
				code: 150,
			},
		],
		'react/jsx-sort-props': ['error', { shorthandFirst: true, noSortAlphabetically: true }],
		'simple-import-sort/imports': 'warn',
		'comma-dangle': ['error', 'always-multiline'],
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'all',
			},
		],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
		'no-trailing-spaces': 'error',
		semi: ['error', 'always'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'jsx-quotes': ['error', 'prefer-double'],
		'arrow-parens': ['warn', 'always'],
		'no-console': 'warn',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect',
			flowVersion: '0.53',
		},
	},
};

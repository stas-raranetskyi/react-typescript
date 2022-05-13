module.exports = {
	extends: 'react-app',
	rules: {
		quotes: ['error', 'single'],
		'max-len': [
			'error',
			{
				ignorePattern: '^import [^,]+ from |^export | implements',
				code: 150,
			},
		],
		'react/jsx-sort-props': ['error', {'shorthandFirst': true, 'noSortAlphabetically': true}],
		'simple-import-sort/imports': 'warn',
		'comma-dangle': ['error', 'always-multiline'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'spaced-comment': [
			'error',
			'always',
			{ 'markers': ['/'] },
		],
		'no-trailing-spaces': 'error',
		semi: ['error', 'always'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'jsx-quotes': ['error', 'prefer-double'],
	},
	plugins: [
		'simple-import-sort',
	],
};

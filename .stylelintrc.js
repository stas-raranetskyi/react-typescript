module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	plugins: ['stylelint-prettier', 'stylelint-scss'],
	customSyntax: 'postcss-scss',
	rules: {
		'prettier/prettier': true,
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'import-notation': null,
	},
};

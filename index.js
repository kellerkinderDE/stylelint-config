module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'color-hex-length': [
            'short',
            {
                severity: 'warning',
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'declaration-empty-line-before': 'never',
        'no-descending-specificity': null,
        'selector-pseudo-element-colon-notation': null,
        indentation: [
            4,
            {
                baseIndentLevel: 1,
            },
        ],
    },
};

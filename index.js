module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        'at-rule-no-unknown': [
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
        'declaration-block-trailing-semicolon': null,
        'declaration-empty-line-before': [
            'never',
            {
                except: [
                    'first-nested',
                ],
            },
        ],
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

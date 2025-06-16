const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const globals = require('globals');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const unicornPlugin = require('eslint-plugin-unicorn');
const preferArrowPlugin = require('eslint-plugin-prefer-arrow');
const angular = require('angular-eslint');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = tseslint.config(
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            globals: {
                ...globals.es6,
            },
            parserOptions: {
                modules: true,
                projectService: {
                    defaultProject: 'tsconfig.eslint.json',
                },
            }
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        plugins: {
            import: importPlugin,
            jsdoc: jsdocPlugin,
            unicorn: unicornPlugin,
            'prefer-arrow': preferArrowPlugin,
            '@stylistic': stylistic,
        },
        rules: {
            '@typescript-eslint/array-type': [
                'error',
                {
                    'default': 'generic'
                }
            ],
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/dot-notation': 'off',
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    'accessibility': 'explicit',
                    'overrides': {
                        'accessors': 'explicit',
                        'constructors': 'explicit',
                        'parameterProperties': 'explicit'
                    }
                }
            ],
            '@typescript-eslint/no-empty-function': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/prefer-for-of': 'off',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    'default': {
                        'memberTypes': ['signature', 'field', 'constructor', 'method'],
                    },
                    // 'order': 'alphabetically-case-insensitive',
                }
            ],
            '@typescript-eslint/strict-boolean-expressions': [
                'off',
                {
                    'allowNullable': true
                }
            ],
            'arrow-body-style': [
                'error',
                'as-needed'
            ],
            'brace-style': [
                'error',
                '1tbs'
            ],
            'class-methods-use-this': 'off',
            'comma-dangle': [
                'error',
                'always-multiline'
            ],
            'complexity': [
                'error',
                {
                    'max': 45
                }
            ],
            'default-case': 'error',
            'eqeqeq': [
                'off',
                'always'
            ],
            'import/no-default-export': 'error',
            'import/no-extraneous-dependencies': 'off',
            'import/no-internal-modules': 'off',
            'import/no-unassigned-import': 'off',
            'import/order': 'error',
            'linebreak-style': [
                'error',
                'unix'
            ],
            'max-classes-per-file': [
                'error',
                1
            ],
            'max-len': [
                'off',
                {
                    'code': 120
                }
            ],
            'max-lines': [
                'off',
                300
            ],
            'newline-per-chained-call': 'off',
            'no-duplicate-case': 'error',
            'no-empty': [
                'error',
                {
                    'allowEmptyCatch': true
                }
            ],
            'no-extra-bind': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-magic-numbers': 'off',
            'no-multiple-empty-lines': 'error',
            'no-new-func': 'error',
            'no-param-reassign': 'off',
            'no-plusplus': 'error',
            'no-redeclare': 'error',
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-void': 'error',
            'no-alert': 'warn',
            'no-bitwise': ['error', { int32Hint: false }],
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-continue': 'off',
            'no-delete-var': 'error',
            'no-div-regex': 'off',
            'no-else-return': 'off',
            'no-empty': ['error', { allowEmptyCatch: false }],
            'no-empty-function': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-eval': ['error', { allowIndirect: false }],
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-label': 'error',
            'no-global-assign': 'error',
            'no-implicit-coercion': ['error', { boolean: true, number: true, string: true, disallowTemplateShorthand: true }],
            'no-implicit-globals': 'off',
            'no-implied-eval': 'error',
            'no-inline-comments': 'off',
            'no-invalid-this': ['error', { capIsConstructor: true }],
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'error',
            'no-magic-numbers': 'off',
            'no-multi-assign': 'off',
            'no-multi-str': 'error',
            'no-negated-condition': 'error',
            'no-nested-ternary': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-nonoctal-decimal-escape': 'error',
            'no-object-constructor': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': 'off',
            'no-plusplus': 'off',
            'no-proto': 'error',
            'no-redeclare': ['error', { builtinGlobals: true }],
            'no-regex-spaces': 'error',
            'no-restricted-exports': 'off',
            'no-restricted-globals': 'off',
            'no-restricted-imports': 'off',
            'no-restricted-properties': 'off',
            'no-restricted-syntax': 'off',
            'no-return-assign': 'off',
            'no-script-url': 'error',
            'no-shadow': ['error', { builtinGlobals: false, hoist: 'all', ignoreOnInitialization: false }],
            'no-shadow-restricted-names': 'error',
            'no-ternary': 'off',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-underscore-dangle': [
                'error',
                {
                    allowAfterThis: false,
                    allowAfterSuper: false,
                    allowAfterThisConstructor: false,
                    enforceInMethodNames: true,
                    enforceInClassFields: true,
                    allowInArrayDestructuring: false,
                    allowInObjectDestructuring: false,
                    allowFunctionParams: false
                }
            ],
            'no-unneeded-ternary': ['error', { defaultAssignment: true }],
            'no-unused-expressions': ['error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false, enforceForJSX: false }],
            'no-unused-labels': 'error',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': ['error', { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false }],
            'no-useless-return': 'error',
            'padding-line-between-statements': [
                'off',
                {
                    'blankLine': 'always',
                    'prev': '*',
                    'next': 'return'
                }
            ],
            'prefer-const': [
                'off',
                {
                    'destructuring': 'all'
                }
            ],
            'no-console': [
                'error',
                {
                    'allow': [
                        'error'
                    ]
                }
            ],
            '@stylistic/indent': [
                'error',
                4,
                {
                    'ignoredNodes': [
                        'ClassBody.body > PropertyDefinition[decorators.length > 0] > Identifier'
                    ],
                    'SwitchCase': 1,
                    'offsetTernaryExpressions': true
                }
            ],
            '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false, ignoreStringLiterals: false }],
            '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false }],
            '@stylistic/semi-spacing': ['error', { before: false, after: true }],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
            '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
            '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
            '@stylistic/template-curly-spacing': ['error', 'never'],
            '@stylistic/template-tag-spacing': 'off',
            '@stylistic/wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
            '@stylistic/wrap-regex': 'off',
            '@stylistic/yield-star-spacing': ['error', 'before'],
            '@stylistic/no-extra-parens': [
                'error',
                'all',
                {
                    conditionalAssign: false,
                    returnAssign: true,
                    nestedBinaryExpressions: false,
                    ternaryOperandBinaryExpressions: true,
                    ignoreJSX: 'none',
                    enforceForArrowConditionals: true,
                    enforceForSequenceExpressions: true,
                    enforceForNewInMemberExpressions: false,
                    enforceForFunctionPrototypeMethods: false,
                    nestedConditionalExpressions: false
                }
            ],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-operators': [
                'error',
                {
                    groups: [
                        ['+', '-', '*', '/', '%', '**'],
                        ['&', '|', '^', '~', '<<', '>>', '>>>'],
                        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                        ['&&', '||'],
                        ['in', 'instanceof']
                    ],
                    allowSamePrecedence: true
                }
            ],
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: false, exceptions: { Property: true, BinaryExpression: false, VariableDeclarator: true, ImportDeclaration: false }, includeTabs: true }],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
            '@stylistic/no-tabs': 'off',
            '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/nonblock-statement-body-position': 'off',
            '@stylistic/object-curly-newline': ['error', { consistent: true }],
            '@stylistic/object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
            '@stylistic/object-property-newline': 'off',
            '@stylistic/one-var-declaration-per-line': 'off',
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/padded-blocks': 'off',
            '@stylistic/padding-line-between-statements': [
                'error',

                { prev: '*', next: 'block', blankLine: 'always' },
                { prev: 'block', next: '*', blankLine: 'always' },

                { prev: '*', next: 'block-like', blankLine: 'always' },
                { prev: 'block-like', next: '*', blankLine: 'always' },

                { prev: '*', next: 'class', blankLine: 'always' },
                { prev: 'class', next: '*', blankLine: 'always' },

                { prev: '*', next: 'do', blankLine: 'always' },
                { prev: 'do', next: '*', blankLine: 'always' },

                { prev: '*', next: 'for', blankLine: 'always' },
                { prev: 'for', next: '*', blankLine: 'always' },

                { prev: '*', next: 'function', blankLine: 'always' },
                { prev: 'function', next: '*', blankLine: 'always' },

                { prev: '*', next: 'if', blankLine: 'always' },
                { prev: 'if', next: '*', blankLine: 'always' },

                { prev: '*', next: 'multiline-block-like', blankLine: 'always' },
                { prev: 'multiline-block-like', next: '*', blankLine: 'always' },

                { prev: '*', next: 'multiline-const', blankLine: 'always' },
                { prev: 'multiline-const', next: '*', blankLine: 'always' },

                { prev: '*', next: 'multiline-let', blankLine: 'always' },
                { prev: 'multiline-let', next: '*', blankLine: 'always' },

                { prev: '*', next: 'multiline-var', blankLine: 'always' },
                { prev: 'multiline-var', next: '*', blankLine: 'always' },

                { prev: '*', next: 'switch', blankLine: 'always' },
                { prev: 'switch', next: '*', blankLine: 'always' },

                { prev: '*', next: 'try', blankLine: 'always' },
                { prev: 'try', next: '*', blankLine: 'always' },

                { prev: '*', next: 'while', blankLine: 'always' },
                { prev: 'while', next: '*', blankLine: 'always' },

                { prev: '*', next: 'multiline-export', blankLine: 'always' },
                { prev: 'multiline-export', next: '*', blankLine: 'always' }
            ],
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
            '@stylistic/comma-dangle': ['error', 'only-multiline'],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/func-call-spacing': ['error', 'never'], // alias of @stylistic/function-call-spacing
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'consistent'],
            '@stylistic/generator-star-spacing': ['error', { before: true, after: false }],
            'prefer-object-spread': 'error',
            'prefer-template': 'error',
            'quote-props': [
                'error',
                'consistent'
            ],
            'space-before-function-paren': [
                'error',
                {
                    'anonymous': 'always',
                    'named': 'never',
                    'asyncArrow': 'always'
                }
            ],
            'space-in-parens': [
                'error',
                'never'
            ],
            'unicorn/filename-case': 'off',
            'yoda': 'error'
        },
    },
    {
        files: ['**/*.component.ts'],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/no-empty-lifecycle-method': 'error',
            '@angular-eslint/component-class-suffix': [
                'error',
                {
                    'suffixes': [
                        'Component'
                    ]
                }
            ],
            '@angular-eslint/directive-class-suffix': [
                'error',
                {
                    'suffixes': [
                        'Directive'
                    ]
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    'type': 'element',
                    'prefix': '',
                    'style': 'kebab-case'
                }
            ],
            '@angular-eslint/use-injectable-provided-in': 'error',
            '@angular-eslint/contextual-decorator': 'error',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    'type': 'attribute',
                    'prefix': '',
                    'style': 'camelCase'
                }
            ],
            '@angular-eslint/no-attribute-decorator': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-pipe-impure': 'error',
            '@angular-eslint/no-queries-metadata-property': 'error',
            '@angular-eslint/no-uncalled-signals': 'error',
            '@angular-eslint/prefer-inject': 'error',
            '@angular-eslint/no-lifecycle-call': 'off',
            '@angular-eslint/component-max-inline-declarations': 'off',

            '@angular-eslint/no-forward-ref': 'off',
            '@angular-eslint/no-input-prefix': [
                'off',
                {
                    'prefixes': [
                        'can',
                        'is',
                        'should',
                        'has'
                    ]
                }
            ],

            '@angular-eslint/pipe-prefix': 'off',
            '@angular-eslint/no-output-native': 'error',
            '@angular-eslint/prefer-output-readonly': 'error',
            "@angular-eslint/prefer-output-emitter-ref": "error",
            '@angular-eslint/relative-url-prefix': 'error',
            '@angular-eslint/use-component-view-encapsulation': 'error',
            '@angular-eslint/contextual-lifecycle': [
                'error'
            ],
            '@angular-eslint/prefer-on-push-component-change-detection': 'off',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unnecessary-type-arguments': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
        }
    },
    {
        files: ['*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/template/banana-in-box': 'error',
            '@angular-eslint/template/accessibility-alt-text': 'off',
            '@angular-eslint/template/accessibility-elements-content': 'off',
            '@angular-eslint/template/accessibility-label-has-associated-control': 'off',
            '@angular-eslint/template/accessibility-table-scope': 'off',
            '@angular-eslint/template/accessibility-valid-aria': 'off',
            '@angular-eslint/template/click-events-have-key-events': 'off',
            '@angular-eslint/template/cyclomatic-complexity': 'off',
            '@angular-eslint/template/mouse-events-have-key-events': 'error',
            '@angular-eslint/template/no-any': 'error',
            '@angular-eslint/template/no-autofocus': 'error',
            '@angular-eslint/template/no-distracting-elements': 'error',
            '@angular-eslint/template/no-positive-tabindex': 'off',
            '@angular-eslint/template/use-track-by-function': 'off',
            '@angular-eslint/template/i18n': 'off',
            '@angular-eslint/template/prefer-control-flow': 'error',
            '@angular-eslint/template/role-has-required-aria': 'error',
            '@angular-eslint/template/prefer-template-literal': 'error',
            '@angular-eslint/template/no-interpolation-in-attributes': [
                'error',
                {
                    'allowSubstringInterpolation': true,
                },
            ],
            '@angular-eslint/template/prefer-at-empty': 'error',
        }
    }
);

/* eslint-disable no-undef */

const tseslint = require('typescript-eslint');

const angular = require('angular-eslint');

const kidwenlint = require('@kidwen/eslint-config-angular');

const globals = require('globals');

module.exports = tseslint.config(
    ...kidwenlint,
    {
        files: ['**/*.ts'],
        processor: angular.processInlineTemplates,
        languageOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            globals: {
                ...globals.es6,
            },
            parserOptions: {
                modules: true,
                projectService: {
                    defaultProject: "tsconfig.eslint.json",
                },
            }
        },
        rules: {},
    }
);

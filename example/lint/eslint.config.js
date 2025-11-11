import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import kidwenLint from '@kidwen/eslint-config-angular';
import globals from 'globals';

export default tseslint.config(
    ...kidwenLint,
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

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kidwen/eslint-config-angular?color=green)
[![NPM](https://img.shields.io/npm/l/%40kidwen%2Feslint-config-angular)](https://img.shields.io/github/license/kidwen/eslint-config-angular)
![npm (prod) dependency version (scoped)](https://img.shields.io/npm/dependency-version/%40kidwen%2Feslint-config-angular/%40angular-eslint%2Fschematics)
![npm (prod) dependency version (scoped)](https://img.shields.io/npm/dependency-version/%40kidwen%2Feslint-config-angular/eslint)
![npm (prod) dependency version (scoped)](https://img.shields.io/npm/dependency-version/%40kidwen%2Feslint-config-angular/typescript)

# eslint-angular

> eslint for angular project

## Quick Start

1. Follow the latest **Getting Started** guide on https://angular.io/ in order to install the Angular CLI

1. install this package in your project

    ```sh
    # use npm
    npm install @kidwen/eslint-config-angular@latest --save-dev
    # use yarn
    yarn add @kidwen/eslint-config-angular@latest --dev
    ```

1. add `tsconfig.eslint.json` file like this

    ```
    {
        "extends": "./tsconfig.app.json",
        "include": [
            // adjust "includes" to what makes sense for you and your project
            "src/**/*.ts",
            "projects/**/*.ts",
        ]
    }
    ```

1. add `eslint.config.json` file like this

    ```
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

    ```

## Test

```sh
git clone https://github.com/kidwen/eslint-config-angular.git

cd eslint-config-angular

yarn

cd example/lint

yarn

yarn lint
```

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kidwen/eslint-config-angular?color=green)
[![NPM](https://img.shields.io/npm/l/%40kidwen%2Feslint-config-angular)](https://img.shields.io/github/license/kidwen/eslint-config-angular
)
![npm (prod) dependency version (scoped)](https://img.shields.io/npm/dependency-version/%40kidwen%2Feslint-config-angular/%40angular-eslint%2Fschematics)

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

1. add `.eslintrc.json` file like this
    ```
    {
        "root": true,
        "extends": "@kidwen/eslint-config-angular"
    }
    ```

## Test
```sh
git clone https://github.com/kidwen/eslint-config-angular.git

cd eslint-config-angular

yarn

yarn link
```

cd example/lint
```sh
yarn

yarn link @kidwen/eslint-config-angular

yarn lint
```

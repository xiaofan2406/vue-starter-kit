# Vue Starter Kit
[![Build Status](https://travis-ci.org/xiaofan2406/vue-starter-kit.svg?branch=jsx)](https://travis-ci.org/xiaofan2406/vue-starter-kit) [![dependencies Status](https://david-dm.org/xiaofan2406/vue-starter-kit/status.svg)](https://david-dm.org/xiaofan2406/vue-starter-kit) [![devDependencies Status](https://david-dm.org/xiaofan2406/vue-starter-kit/dev-status.svg)](https://david-dm.org/xiaofan2406/vue-starter-kit?type=dev)
> A boilerplate for starting new Vue 2.0 projects with vue-router.


### Get Started
- install dependencies
  ```
  yarn install
  ```

- run dev server
  ```
  yarn run dev
  ```

- build for production (build only, no server setup)
  ```
  yarn run build
  ```


### Details
- ##### Hot Reload
  uses [babel-plugin-vue-jsx-hot-reload](https://www.npmjs.com/package/babel-plugin-vue-jsx-hot-reload)

- ##### [Scoped CSS](https://vuejs.org/v2/guide/comparison.html#Component-Scoped-CSS)
  uses CSS Modules to acheive similar effect

- ##### PostCSS
  including [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)

- ##### Test production build
  ```
  yarn global add pushstate-server

  pushstate-server ./build 9000
  ```


### Folders
- `config`: webpack configuration files
- `src`: Vue app source files directory, processed by webpack
- `build`: build files directory

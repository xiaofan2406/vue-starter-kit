# Vue Starter Kit
[![Build Status][build-badge]][build] [![Dependencies Status][dependencies-badge]][dependencies]

[build-badge]: https://img.shields.io/travis/xiaofan2406/vue-starter-kit.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/vue-starter-kit
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/vue-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/vue-starter-kit
> A boilerplate for starting new Vue 2.0 projects with vue-router.


## Get Started
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

- Test production build
  ```
  yarn global add pushstate-server

  pushstate-server ./build 9000
  ```

## Details
#### Vuex
  - See in branch [vuex](https://github.com/xiaofan2406/vue-starter-kit/tree/vuex)

#### PostCSS
  - Including [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)

#### JSX support
  - See in branch [JSX](https://github.com/xiaofan2406/vue-starter-kit/tree/jsx)


## Folders
Path | Import alias | Description
--- | --- | ---
**config/** |  | project tooling configuration files
**src/** | `app` | Vue app source files directory, processed by webpack
src/**components/** | `components` | Vue components folder
src/**router/** |  | Vue Router setup

# Vue Starter Kit

[![Greenkeeper badge](https://badges.greenkeeper.io/xiaofan2406/vue-starter-kit.svg)](https://greenkeeper.io/)
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

#### Server rendering
  - See in branch [server-render](https://github.com/xiaofan2406/vue-starter-kit/tree/server-render)

#### PostCSS
  - Including [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)


## Folders
Path | Import alias | Description
--- | --- | ---
**config/** |  | Project tooling configuration files folder
**src/** | `app` | Vue app source files folder, processed by webpack
src/**components/** | `components` | Vue components folder
src/**styles/** | `styles` | Global CSS folder
src/**router/** |  | Vue Router setup folder

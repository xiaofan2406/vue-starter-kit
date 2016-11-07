# Vue Starter Kit
[![Build Status](https://travis-ci.org/xiaofan2406/vue-starter-kit.svg?branch=master)](https://travis-ci.org/xiaofan2406/vue-starter-kit) [![dependencies Status](https://david-dm.org/xiaofan2406/vue-starter-kit/status.svg)](https://david-dm.org/xiaofan2406/vue-starter-kit) [![devDependencies Status](https://david-dm.org/xiaofan2406/vue-starter-kit/dev-status.svg)](https://david-dm.org/xiaofan2406/vue-starter-kit?type=dev)


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

- *Test production build
```
yarn global add pushstate-server

pushstate-server ./build 9000
```


### JSX support
- in branch [jsx](https://github.com/xiaofan2406/vue-starter-kit/tree/jsx)
- JSX not hot reloading properly


### CSS
- PostCSS with cssnext, and postcss-import
- CSS modules is NOT enabled

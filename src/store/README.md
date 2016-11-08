# Vuex store


### [Docs](http://vuex.vuejs.org/en/getting-started.html)


### Rules
- Components do NOT directly access `$store.state`
- Components do NOT use mutations

- Components uses getters to get info from `$store.state`
- Components uses actions to make modification to `$store.state`

- Every mutation has its own corresponding action

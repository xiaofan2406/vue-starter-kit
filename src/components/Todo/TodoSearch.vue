<template>
  <div>
    <input ref="input" type="text" @input="searchTodo" placeholder="search..." />
    <button type="button" @click="clearSearch">clear</button>
  </div>
</template>

<script>
import { todoActions } from 'store/actions';


export default {
  methods: {
    clearSearch() {
      this.$refs.input.value = '';
      this.$store.dispatch(todoActions.SET_SEARCH, '');
    },
    searchTodo(e) {
      this.$store.dispatch(todoActions.SET_SEARCH, e.target.value);
    }
  }
};
</script>

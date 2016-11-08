<template>
  <ul>
    <li v-for="todo in VISIBLE_TODOS" :key="todo.id" @click="toggleTodo(todo.id)">
      {{todo.name}} <span v-if="todo.completed">(completed)</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { todoGetters } from 'store/getters';
import { todoActions } from 'store/actions';


const { VISIBLE_TODOS } = todoGetters;
const { TOGGLE_TODO, SET_FILTER } = todoActions;


export default {
  computed: {
    ...mapGetters({
      VISIBLE_TODOS
    })
  },
  methods: {
    toggleTodo(id) {
      this.$store.dispatch(TOGGLE_TODO, id);
    }
  },
  watch: {
    $route() {
      const { filter } = this.$route.params;
      this.$store.dispatch(SET_FILTER, filter === '' ? 'all' : filter);
    }
  }
};
</script>

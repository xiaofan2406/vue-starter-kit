<template>
  <div>
    <input
      ref="input"
      type="text"
      @keyup.enter="addTodo($event)"
      placeholder="add a new todo"
      autofocus="autofocus"
    />
  </div>
</template>

<script>
import { v4 } from 'node-uuid';
import { todoActions } from 'store/actions';


export default {
  props: {
    autofocus: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addTodo(e) {
      const todo = { name: e.target.value, completed: false, id: v4() };
      this.$store.dispatch(todoActions.ADD_TODO, todo);
      event.target.value = '';
    }
  }
};
</script>

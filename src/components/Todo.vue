<template>
  <div>
    <input type="text" @keyup.enter="addTodo" />
    <div v-for="todo in visibleTodos" :key="todo.id">
      <span @click="toggleTodo(todo.id)">{{todo.text}}</span>  status: {{todo.completed}} <button @click="removeTodo(todo.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.$store.userStore.user) {
      this.$router.push('/');
    }
    this.$store.todoStore.fetchTodos();
  },
  computed: {
    visibleTodos() {
      return this.$store.todoStore.visibleTodos;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.todoStore.addTodo(e.target.value);
      e.target.value = '';
    },
    removeTodo(id) {
      this.$store.todoStore.removeTodo(id);
    },
    toggleTodo(id) {
      this.$store.todoStore.toggleTodo(id);
    }
  }
};
</script>

<style>
</style>

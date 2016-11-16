<template>
  <div>
    <input type="text" @keyup.enter="addTodo" />
    <div v-for="todo in visibleTodos" :key="todo.id">
      {{todo.text}}  status: {{todo.completed}}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.$store.userStore.user) {
      this.$router.push('/');
    }
    this.$store.todoStore.fetchTodos(this.$store.userStore.token);
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
    }
  }
};
</script>

<style>
</style>

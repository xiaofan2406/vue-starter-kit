<template>
  <div>
    <ul>
      <li @click="setFilter('all')">All</li>
      <li @click="setFilter('active')">Active</li>
      <li @click="setFilter('completed')">Completed</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setFilter(filter) {
      this.$router.push(`/todo/${filter === 'all' ? '' : filter}`);
    }
  }
};
</script>

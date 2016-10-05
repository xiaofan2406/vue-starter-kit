<template>
  <div>
    <TodoSearch />
    <TodoNew :autofocus="true" />
    <TodoList />
    <TodoFilter />
  </div>
</template>

<script>
import TodoSearch from './TodoSearch';
import TodoNew from './TodoNew';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';


export default {
  components: {
    TodoSearch,
    TodoNew,
    TodoList,
    TodoFilter
  }
};
</script>

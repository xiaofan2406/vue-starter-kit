import TodoNew from './TodoNew';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoSearch from './TodoSearch';


export default {
  render(h) {
    return (
      <div>
        <TodoSearch />
        <TodoNew autofocus />
        <TodoList />
        <TodoFilter />
      </div>
    );
  }
};

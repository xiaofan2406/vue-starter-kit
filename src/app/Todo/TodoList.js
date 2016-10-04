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
      return () => {
        this.$store.dispatch(TOGGLE_TODO, id);
      };
    }
  },
  watch: {
    $route() {
      const { filter } = this.$route.params;
      this.$store.dispatch(SET_FILTER, filter === '' ? 'all' : filter);
    }
  },
  render(h) {
    return (
      <ul>
        {this.VISIBLE_TODOS.map(todo => (
          <li key={todo.id} on-click={this.toggleTodo(todo.id)}>
            {todo.name} {todo.completed && '(completed)'}
          </li>
        ))}
      </ul>
    );
  }
};

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
      if (e.which === 13) {
        const todo = { name: e.target.value, completed: false, id: v4() };
        this.$store.dispatch(todoActions.ADD_TODO, todo);
        event.target.value = '';
      }
    }
  },
  render(h) {
    return (
      <div>
        <input
          ref="input"
          type="text"
          on-keyup={this.addTodo}
          placeholder="add a new todo"
          autofocus={this.autofocus}
        />
      </div>
    );
  }
};

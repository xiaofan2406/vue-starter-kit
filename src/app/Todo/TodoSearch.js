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
  },
  render(h) {
    return (
      <div>
        <input ref="input" type="text" on-input={this.searchTodo} placeholder="search..."/>
        <button type="button" on-click={this.clearSearch}>clear</button>
      </div>
    );
  }
};

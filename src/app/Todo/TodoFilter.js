export default {
  methods: {
    setFilter(filter) {
      return () => {
        this.$router.push(`/todo/${filter === 'all' ? '' : filter}`);
      };
    }
  },
  render(h) {
    return (
      <div>
        <ul>
          <li on-click={this.setFilter('all')}>All</li>
          <li on-click={this.setFilter('active')}>Active</li>
          <li on-click={this.setFilter('completed')}>Completed</li>
        </ul>
      </div>
    );
  }
};

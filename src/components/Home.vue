<template>
  <div v-if="!user && !loading">
    Login first
    <button @click="auth">login</button>
  </div>
  <div v-else>
    <div v-if="loading">
      loading...
    </div>
    <div v-else>
      <div v-if="error">
        {{JSON.stringify(error)}}
      </div>
      <div v-else>
        Hello {{user.name}}
      </div>
    </div>
  </div>
</template>

<script>
import wunderlist from 'config/wunderlist';


export default {
  methods: {
    auth() {
      window.location = `${wunderlist.authUrl}?client_id=${wunderlist.clientId}&redirect_uri=${encodeURIComponent(wunderlist.redirectUrl)}&state=RANDOM`;
    }
  },
  computed: {
    user() {
      return this.$store.userStore.user;
    },
    loading() {
      return this.$store.userStore.loading;
    },
    error() {
      return this.$store.userStore.error;
    }
  },
  created() {
    if (this.$route.query.token) {
      localStorage.setItem('token', this.$route.query.token);
      this.$router.push('/');
    }
    const token = localStorage.getItem('token');
    if (!this.user && token) {
      this.$store.userStore.authUser(token);
    }
  }
};
</script>

<style lang="css">
</style>

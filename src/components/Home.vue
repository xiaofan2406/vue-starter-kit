<template>
  <div v-if="!authed">
    Login first
    <button @click="auth">login</button>
  </div>
  <div v-else>
    <div v-if="error">
      {{JSON.stringify(error)}}
    </div>
    <div v-else>
      Hello {{user.name}}
    </div>
  </div>
</template>

<script>
import wunderlist from 'config/wunderlist';
import { saveStore } from '../store';

export default {
  methods: {
    auth() {
      window.location = `${wunderlist.authUrl}?client_id=${wunderlist.clientId}&redirect_uri=${encodeURIComponent(wunderlist.redirectUrl)}&state=RANDOM`;
    }
  },
  computed: {
    authed() {
      return this.$store.userStore.authed;
    },
    user() {
      return this.$store.userStore.user;
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
  },
  watch: {
    authed(newVal) {
      if (newVal === true) {
        saveStore(this.$store);
      }
    }
  }
};
</script>

<style lang="css">
</style>

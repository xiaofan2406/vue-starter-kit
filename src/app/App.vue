<template>
  <div class="App-root">
    <div class="App-header">
      <img class="App-logo" src="./logo.png" />
      <span class="App-title">Vue starter kit</span>
    </div>
    <div class="App-main">
    <input v-model="message" type="text" />
      <br />
      Hello {{message}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'World'
    };
  }
};
</script>

<style scoped>

.App-header {
  background-color: #000;
  margin-bottom: 20px;
  padding: 10px;
}

.App-title {
  font-size: 18px;
  color: #fff;
  font-family: monospace;
}

.App-logo {
  height: 40px;
}
</style>

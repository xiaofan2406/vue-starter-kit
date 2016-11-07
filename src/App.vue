<template>
  <div class="App">
    <div class="header">
      <img class="logo" src="./favicon.png" />
      <span class="title">Vue starter kit</span>
      <div class="nav">
        <router-link class="nav-link" active-class="nav-link-active" to="/" exact >Home</router-link>
        <router-link class="nav-link" active-class="nav-link-active" to="/about">About</router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
@import './variables.css';

.header {
  background-color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: space-between;
  height: var(--headerHeight);
}

.title {
  font-size: 18px;
  color: #fff;
  font-family: monospace;
}

.logo {
  height: 40px;
}

.nav {
  &>.nav-link {
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    margin-right: 10px;
    height: 40px;
    align-items: center;

    &.nav-link-active {
      border-bottom: 2px solid #FFF;
    }
  }
}

</style>

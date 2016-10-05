<template>
  <div class="App-root">
    <div class="App-header">
      <img class="App-logo" src="./logo.png" />
      <span class="App-title">Vue starter kit</span>
      <div class="App-nav">
        <router-link class="App-nav-link" active-class="App-nav-link-active" to="/" exact >Home</router-link>
        <router-link class="App-nav-link" active-class="App-nav-link-active" to="/todo">Todo</router-link>
      </div>
    </div>
    <div class="App-main">
      <router-view></router-view>
    </div>
  </div>
</template>


<style>
@import './variables.css';

.App-header {
  background-color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: space-between;
  height: var(--headerHeight);
}

.App-title {
  font-size: 18px;
  color: #fff;
  font-family: monospace;
}

.App-logo {
  height: 40px;
}

.App-nav {
  &>.App-nav-link {
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    margin-right: 10px;
    height: 40px;
    align-items: center;

    &.App-nav-link-active {
      border-bottom: 2px solid #FFF;
    }
  }
}

</style>

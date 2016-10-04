import './App.css';
import logo from './logo.png';

export default {
  render(h) {
    return (
      <div class="App-root">
        <div class="App-header">
          <img class="App-logo" src={logo} />
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
    );
  }
};

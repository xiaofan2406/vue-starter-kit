import logo from './favicon.png';
import style from './App.css';


const App = {
  render(h) {
    return (
      <div class={style.App}>
        <div class={style.header}>
          <img class={style.logo} src={logo} />
          <span class={style.title}>Vue starter kit</span>
          <div class={style.nav}>
            <router-link class={style.navLink} active-class={style.navLinkActive} to="/" exact>Home</router-link>
            <router-link class={style.navLink} active-class={style.navLinkActive} to="/about">About</router-link>
          </div>
        </div>
        <div class={style.main}>
          <router-view />
        </div>
      </div>
    );
  }
};


export default App;

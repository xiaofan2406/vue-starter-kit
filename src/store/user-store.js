import axios from 'axios';
import wunderlist from 'config/wunderlist';


class UserStore {
  constructor(init = {}) {
    this.authed = init.authed || false;
    this.user = init.user || null;
    this.token = init.token || null;
    this.error = init.error || null;
  }

  authUser(token) {
    this.loading = true;
    axios.get(`${wunderlist.apiUrl}/user`, {
      headers: {
        'X-Client-ID': wunderlist.clientId,
        'X-Access-Token': token
      }
    })
    .then((res) => {
      this.authed = true;
      this.error = null;
      this.user = res.data;
      this.token = token;
    })
    .catch((err) => {
      this.authed = false;
      this.error = err.response.data;
      this.user = null;
      this.token = null;
    });
  }
}


export default UserStore;

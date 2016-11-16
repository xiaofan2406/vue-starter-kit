const express = require('express');
const http = require('http');
const path = require('path');
const axios = require('axios');
const getLocalIp = require('../config/local-ip');
const wunderlist = require('../config/wunderlist');

console.log(wunderlist.clientId, wunderlist.clientSecret);

const app = express();
app.use('/build', express.static(path.join(__dirname, '../build')));

// oauth callback route
app.get('/auth', (req, res) => {
  axios.post(wunderlist.tokenUrl, {
    client_id: wunderlist.clientId,
    client_secret: wunderlist.clientSecret,
    code: req.query.code
  })
  .then((response) => {
    // res.cookie('token', JSON.stringify(response.data));
    if (process.env.NODE_ENV === 'production') {
      // FIXME server render setup changes this
      res.sendFile('/build/index.html');
    } else {
      res.redirect(`http://${getLocalIp()}:8080/?token=${response.data.access_token}`);
    }
  })
  .catch(console.log);
});


const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('error', (err) => {
  console.log(err);
});

server.on('listening', () => {
  console.log(`Listening on http://${getLocalIp()}:${port}`);
});

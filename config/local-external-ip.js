const ifconfig = require('os').networkInterfaces();


function getLocalExternalIp() {
  const detail = Object.keys(ifconfig)
    .filter(ifaceName => ifaceName.indexOf('lo') === -1)
    .map(ifaceName => ifconfig[ifaceName])
    .map(iface =>
       iface.filter(protocol => protocol.family === 'IPv4' && protocol.internal === false)[0]
    )[0];

  return detail && detail.address;
}


module.exports = getLocalExternalIp;

const ip = require('ip');
const os = require('os');
module.exports = () => {
  const utun = Object.entries(os.networkInterfaces()).find(([key, networkInterface]) => key.includes('utun') && networkInterface[0] && networkInterface[0].family === 'IPv4');
  if (utun && utun[1]) {
    return utun[1][0].address;
  }
  return ip.address();
};
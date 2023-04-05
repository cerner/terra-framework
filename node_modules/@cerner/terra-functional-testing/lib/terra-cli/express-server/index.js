const expressHandler = require('./expressServerHandler');

const express = {
  command: 'express-server',
  describe: 'Start a simple express-server hosting a directory',
  builder: (yargs) => (
    yargs.options({
      port: {
        type: 'number',
        default: 8080,
        defaultDescription: '8080',
        describe: 'The port on which to host the server',
      },
      host: {
        type: 'string',
        default: '0.0.0.0',
        defaultDescription: '0.0.0.0',
        describe: 'The host on which to host the server',
      },
      site: {
        type: 'string',
        demandOption: true,
        describe: 'The directory path from which to serve the static assets',
      },
    })
  ),
  handler: expressHandler,
};

module.exports = express;

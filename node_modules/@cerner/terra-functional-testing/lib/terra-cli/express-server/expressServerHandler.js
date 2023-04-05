const ExpressServer = require('../../express-server');

module.exports = async (options) => {
  const server = new ExpressServer({
    host: options.host,
    port: options.port,
    site: options.site,
  });

  await server.start();
};

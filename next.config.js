const fs = require('fs');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

// allow people to override env settings with a next.config.env.js file that has contents like this
//
// module.exports = {
//  CLIENT_API_URL: 'http://localhost:3000/',
// }
//

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev`
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  let env = {
    CLIENT_API_URL: process.env.CLIENT_API_URL || '/graphql',
  };

  if (isDev) {
    env = {
      CLIENT_API_URL: 'http://localhost:8010/proxy/api/graphql?token=xyz',
    };

    const envFile = `${__dirname}/next.config.env.js`;
    //eslint-disable-next-line no-sync
    if (fs.existsSync(envFile)) {
      env = require('./next.config.env');
    }
  }

  console.log('*********************************'); //eslint-disable-line no-console
  console.log(`isDev:${isDev}  isProd:${isProd}`); //eslint-disable-line no-console
  console.log(`API ENDPOINT: ${env.CLIENT_API_URL}`); //eslint-disable-line no-console
  console.log('*********************************'); //eslint-disable-line no-console

  return {
    env,
    trailingSlash: false,
  };
};

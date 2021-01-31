module.exports = {
  client: {
    service: {
      name: 'api',
      url: 'http://localhost:8010/proxy/api/graphql?token=xyz',
      skipSSLValidation: true,
    },
  },
};

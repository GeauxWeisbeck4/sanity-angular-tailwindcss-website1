const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://2bbta94n.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
const path = require('path');

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;

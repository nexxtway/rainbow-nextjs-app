const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // add alias for importing without specifying index.js
        '@button': path.resolve('node_modules/react-rainbow-components/components/Button')
      },
      fallback: {
        ...config.resolve.fallback,
        fs: false // this is necessary to prevent a specific error that can occur when using path.resolve
      }
    };
    return config;
  }
}

module.exports = nextConfig

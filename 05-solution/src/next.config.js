// imports
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

// next config
const nextConfig = {
  distDir: './../.next',
  target: 'serverless'
};

// ship it together with plugins
module.exports = withPlugins(
    [
        // TypeScript Support
        withTypescript,
        // CSS Support
        [
            withCSS ,
            {
                cssModules: true
            }
        ]
    ], 
    nextConfig
);
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config) => {
    // Find the existing rule for SVG files
//    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
//
//    // Rule for handling SVG as files
//    const svgFileRule = {
//      ...fileLoaderRule,
//      test: /\.svg$/i,
//      resourceQuery: /url/,
//    };

    // Rule for handling SVG as React components
    const svgComponentRule = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: /url/ },
      use: ['@svgr/webpack'],
    };

    // Push the new rules to the configuration
    config.module.rules.push(svgComponentRule);

    return config;
  },
};

module.exports = nextConfig;

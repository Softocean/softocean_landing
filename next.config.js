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
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'),)

    // Rule for handling SVG as React components
    const svgComponentRule = {
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: /url/ },
      use: ['@svgr/webpack'],
    };

    // Push the new rules to the configuration
    config.module.rules.push(svgComponentRule);
    fileLoaderRule.exclude = /\.svg$/i

    return config;
  },
};

module.exports = nextConfig;

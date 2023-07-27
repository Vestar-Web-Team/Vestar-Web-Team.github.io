/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ahooks'],
  env: {
    PUBLIC_FOLDER_PATH: process.env.PUBLIC_FOLDER_PATH || ''
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ahooks'],
  env: {
    PUBLIC_FOLDER_PATH: process.env.PUBLIC_FOLDER_PATH || '',
    RECORD_NUMBER: process.env.RECORD_NUMBER || 'Error'
  }
};

module.exports = nextConfig;

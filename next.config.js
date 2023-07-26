/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_FOLDER_PATH: process.env.PUBLIC_FOLDER_PATH || ''
  }
}

module.exports = nextConfig

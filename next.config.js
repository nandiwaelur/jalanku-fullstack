const withPWA = require("next-pwa")({
    dest: "public", 
    disable: process.env.NODE_ENV === "development", 
    register: true, 
    skipWaiting: true, 
  });
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true, 
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

module.exports = withPWA(nextConfig);
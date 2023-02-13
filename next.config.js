// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }

// module.exports = nextConfig

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: false,
}
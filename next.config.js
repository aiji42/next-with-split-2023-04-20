const withSplit = require('next-with-split').withSplit({
  splits: {
    test1: {
      path: '/*',
      hosts: {
        original: 'next-with-split-2023-04-20.vercel.app',
        'challenger-1': 'next-with-split-2023-04-20-git-challenger-1-aiji42.vercel.app'
      }
    }
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withSplit(nextConfig)

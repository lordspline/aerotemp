const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Aeromancer',
    siteDescription: 'AI Codecs for Cloud Gaming.',
    siteKeywords: 'cloud gaming artificial intelligence compression codecs',
    siteUrl: 'https://aeromancer.vercel.app',
  },
})

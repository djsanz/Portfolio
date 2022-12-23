/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
	return [
	  {
		source: '/TheSafeBNB',
		destination: '/TheSafeBNB/index.html',
	  },
	]
  }
}

module.exports = nextConfig

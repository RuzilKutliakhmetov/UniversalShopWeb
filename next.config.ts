import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
	env: {
		APP_ENV: process.env.APP_ENV,
		APP_URL: process.env.APP_URL,
		APP_DOMAIN: process.env.APP_DOMAIN,
		SERVER_URL: process.env.SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.SERVER_URL}/uploads/:path*`,
			},
		]
	},
}

export default nextConfig

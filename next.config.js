/** @type {import('next').NextConfig} */
// set images.unoptimized to true to disable image optimization

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.discordapp.net',
                port: '',
                pathname: '/attachments/**/**/**',
            }
        ],
        unoptimized: true,
    }
}

module.exports = nextConfig

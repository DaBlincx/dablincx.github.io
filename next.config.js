/** @type {import('next').NextConfig} */
// set images.unoptimized to true to disable image optimization

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'minecraft.fandom.com',
                port: ''
            }
        ],
        unoptimized: true,
    }
}

module.exports = nextConfig

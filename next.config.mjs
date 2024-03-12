/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freeway74.ru',
                port: '',
                pathname: '/upload/**',
            },
        ],
    },
    experimental: {
        serverActions: true
    },
    env: {
        API_URL: process.env.API_URL
    }
};

export default nextConfig;

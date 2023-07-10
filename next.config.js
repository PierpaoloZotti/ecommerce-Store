/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:
            ["res.cloudinary.com", "*.googleusercontent.com"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    }


}

module.exports = nextConfig

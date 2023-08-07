/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        swcPLugins:[
            ["next-superjson-plugin",{}]
        ]
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubcontent.com",
            "lh3.googlesuserscontent.com"
        ]
    }
}

module.exports = nextConfig

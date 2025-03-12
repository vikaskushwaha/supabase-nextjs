/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "e00d42a29aa2b0724c80157a22f3bcdc.cdn.bubble.io",
            },
        ],
    },
};

export default nextConfig;

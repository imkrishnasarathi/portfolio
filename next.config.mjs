/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.dev.to', 'dev-to-uploads.s3.amazonaws.com', 'cdn.hashnode.com', 'pbs.twimg.com', 'media2.dev.to'],
  },
}

export default nextConfig;

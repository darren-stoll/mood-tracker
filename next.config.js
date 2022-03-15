/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.dog.ceo", "cdn2.thecatapi.com"]
  }
}

module.exports = nextConfig

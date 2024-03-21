/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flagcdn.com",
      "pusrfi.nyc3.digitaloceanspaces.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;

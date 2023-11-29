module.exports = {
  images: {
    domains: ["roseware-bucket.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co/**',
      }
    ],
  },
};

// https://images.unsplash.com/
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  publicRuntimeConfig: {
    basePath: isProd ? '/ielts-course-app' : '',
  },
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/ielts-course-app' : '',
  assetPrefix: isProd ? '/ielts-course-app/' : '',
  images: {
    unoptimized: true,
    domains: ['api.10minuteschool.com', 'cdn.10minuteschool.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable compression
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@reduxjs/toolkit'],
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production client-side optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },

  // Configure Turbopack for development
  turbopack: {
    resolveAlias: {
      // Add any path aliases if needed
    },
  },
};

module.exports = nextConfig;
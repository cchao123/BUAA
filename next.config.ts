import { codeInspectorPlugin } from 'code-inspector-plugin';

import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.talkit.ai',
      },
      {
        protocol: 'https',
        hostname: 'talkit.ai',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/termsofserviceen',
        destination: '/terms/termsofserviceen',
      },
      {
        source: '/termsofservicefr',
        destination: '/terms/termsofservicefr',
      },
      {
        source: '/termsofservicept',
        destination: '/terms/termsofservicept',
      },
      {
        source: '/termsofservicede',
        destination: '/terms/termsofservicede',
      },
      {
        source: '/termsofservicejp',
        destination: '/terms/termsofservicejp',
      },
      {
        source: '/termsofservicezh',
        destination: '/terms/termsofservicezh',
      },
      {
        source: '/privatepolicyen',
        destination: '/policy/privatepolicyen',
      },
      {
        source: '/privatepolicyfr',
        destination: '/policy/privatepolicyfr',
      },
      {
        source: '/privatepolicypt',
        destination: '/policy/privatepolicypt',
      },
      {
        source: '/privatepolicyde',
        destination: '/policy/privatepolicyde',
      },
      {
        source: '/privatepolicyjp',
        destination: '/policy/privatepolicyjp',
      },
      {
        source: '/privatepolicyzh',
        destination: '/policy/privatepolicyzh',
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: 'webpack',
      }),
    );
    return config;
  },
};

export default nextConfig;

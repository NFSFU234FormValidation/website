import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'images.nforshifu.com',
        port: '',
      },
    ],
  },
});

export default nextConfig;



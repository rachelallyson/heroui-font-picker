import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: false },
  contentDirBasePath: '/content',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/heroui-font-picker' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/heroui-font-picker' : '',
  trailingSlash: true,
  transpilePackages: ['@rachelallyson/heroui-font-picker'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

export default withNextra(nextConfig)


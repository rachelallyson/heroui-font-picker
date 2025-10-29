import nextra from 'nextra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
    // Resolve local package from source
    config.resolve.alias = {
      ...config.resolve.alias,
      '@rachelallyson/heroui-font-picker': path.resolve(__dirname, '../src'),
    }
    return config
  },
}

export default withNextra(nextConfig)


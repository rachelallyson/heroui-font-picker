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
  trailingSlash: true,
  // Set basePath for GitHub Pages deployment
  basePath: '/heroui-font-picker',
  // Explicitly set workspace root to docs directory to avoid lockfile detection issues
  // when running from project root. This ensures Next.js resolves modules correctly.
  turbopack: {
    root: __dirname,
  },
}

export default withNextra(nextConfig)


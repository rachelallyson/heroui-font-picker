import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Providers } from './providers'
import './globals.css'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'HeroUI Font Picker',
  description: 'A powerful font picker component for HeroUI with Google Fonts integration and sprite-based previews',
}

const navbar = <Navbar logo={<b>HeroUI Font Picker</b>} />
const footer = <Footer>MIT License © {new Date().getFullYear()} Rachel Higley.</Footer>

function normalizePageMap(pages) {
  if (!pages || !Array.isArray(pages)) return []
  return pages.map(page => {
    const normalized = {
      ...page,
      route: page.route?.replace(/^\/content/, '') || page.route,
      url: page.url?.replace(/^\/content/, '') || page.url,
    }
    // Recursively normalize children if they exist
    if (page.children) {
      normalized.children = normalizePageMap(page.children)
    }
    return normalized
  })
}

export default async function RootLayout({ children }) {
  // getPageMap() should work fine in Next.js 16 if called directly in async function
  // The issue was likely in how it was being called or wrapped
  const pageMap = await getPageMap()
  // Strip /content prefix from pageMap URLs since contentDirBasePath handles routing
  const normalizedPageMap = normalizePageMap(pageMap)

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Providers>
          <Layout
            navbar={navbar}
            pageMap={normalizedPageMap}
            docsRepositoryBase="https://github.com/rachelallyson/heroui-font-picker/blob/main/docs/content"
            footer={footer}
          >
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}


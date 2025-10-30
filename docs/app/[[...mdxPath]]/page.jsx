import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  try {
    const { metadata } = await importPage(params?.mdxPath)
    return metadata
  } catch (error) {
    // Return default metadata if page fails to load (handles Next.js prerender bugs)
    if (error.message?.includes('workUnitAsyncStorage') || error.message?.includes('Invariant')) {
      return { title: 'API Documentation', description: 'API documentation page' }
    }
    return { title: 'API Documentation' }
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const path = params?.mdxPath?.length ? params.mdxPath : undefined

  try {
    const {
      default: MDXContent,
      toc,
      metadata,
      sourceCode
    } = await importPage(path)
    return (
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch (error) {
    // Handle Next.js prerender errors gracefully during static export
    if (error.message?.includes('workUnitAsyncStorage') || error.message?.includes('Invariant')) {
      // Return a fallback page for problematic routes
      return (
        <Wrapper toc={[]} metadata={{ title: 'API Documentation' }} sourceCode={null}>
          <div style={{ padding: '2rem' }}>
            <h1>API Documentation</h1>
            <p>This page encountered an error during build. Please visit the <a href="/api">API index</a> for documentation.</p>
          </div>
        </Wrapper>
      )
    }
    // Re-throw other errors
    throw error
  }
}

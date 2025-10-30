'use client'

export default function GlobalError({ error, reset }) {
    // Handle Next.js workUnitAsyncStorage bug gracefully
    if (error?.message?.includes('workUnitAsyncStorage') || error?.message?.includes('Invariant')) {
        return (
            <html>
                <body>
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                        <h1>Build Error</h1>
                        <p>This page encountered a known Next.js build issue. The site should still function correctly.</p>
                        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                            Try Again
                        </button>
                    </div>
                </body>
            </html>
        )
    }

    // Re-throw other errors
    throw error
}


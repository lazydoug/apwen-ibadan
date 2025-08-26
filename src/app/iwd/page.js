'use client'

import { useEffect, useRef, useState } from 'react'

const IWDBrochure = () => {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return // Ensure client-side execution

    const container = containerRef.current

    if (container && typeof window !== 'undefined') {
      import('pspdfkit')
        .then(PSPDFKit => {
          if (PSPDFKit) {
            PSPDFKit.unload(container)
          }

          if (container) {
            PSPDFKit.unload(container)

            PSPDFKit.load({
              container,
              document: '/docs/iwd-brochure.pdf',
              baseUrl: `${window.location.protocol}//${window.location.host}/`,
              initialViewState: new PSPDFKit.ViewState({
                readOnly: true,
              }),
            })
          }
        })
        .catch(error => {
          console.error('Error loading PSPDFKit:', error)
        })
    }
  }, [isClient])

  if (!isClient) {
    return null // Avoid rendering on the server
  }

  return <div ref={containerRef} style={{ height: '100vh' }} />
}

export default IWDBrochure

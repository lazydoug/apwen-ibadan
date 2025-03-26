'use client'

import { useEffect, useRef, useState } from 'react'
import PSPDFKit from 'pspdfkit'

const IWDBrochure = () => {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const container = containerRef.current

      if (container && typeof window !== 'undefined') {
        import('pspdfkit').then(PSPDFKit => {
          if (PSPDFKit) {
            PSPDFKit.unload(container)
          }

          const initialViewState = new PSPDFKit.ViewState({
            readOnly: true,
          })

          PSPDFKit.load({
            container,
            document: '/docs/iwd-brochure.pdf',
            baseUrl: `${window.location.protocol}//${window.location.host}/`,
            initialViewState,
          })
        })
      }
    }
  }, [isClient])

  if (!isClient) {
    return null // Prevents rendering on the server
  }

  return <div ref={containerRef} style={{ height: '100vh' }} />
}

export default IWDBrochure

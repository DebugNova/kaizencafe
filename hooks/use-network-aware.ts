'use client'

import { useEffect, useState } from 'react'

type NetClass = 'fast' | 'slow' | 'unknown'

/**
 * Reads the Network Information API (where available) to surface a coarse
 * connection class and the user's Data-Saver preference. Falls back to
 * `unknown` on Safari / iOS / Firefox desktop where the API is absent.
 *
 * Intended use: gate heavier image quality / non-critical media on slow links.
 * Pair with `<Image quality={netClass === 'slow' ? 50 : 75} />` for galleries.
 */
export function useNetworkAware(): { netClass: NetClass; saveData: boolean } {
  const [state, setState] = useState<{ netClass: NetClass; saveData: boolean }>({
    netClass: 'unknown',
    saveData: false,
  })

  useEffect(() => {
    if (typeof navigator === 'undefined') return
    const conn = (navigator as unknown as { connection?: NetworkInformation }).connection
    if (!conn) return

    const classify = () => {
      const t = conn.effectiveType
      const netClass: NetClass =
        t === '4g'
          ? 'fast'
          : t === '3g' || t === '2g' || t === 'slow-2g'
            ? 'slow'
            : 'unknown'
      setState({ netClass, saveData: !!conn.saveData })
    }

    classify()
    conn.addEventListener?.('change', classify)
    return () => conn.removeEventListener?.('change', classify)
  }, [])

  return state
}

// Minimal local shape for the (still non-standard) NetworkInformation API.
interface NetworkInformation extends EventTarget {
  readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
  readonly saveData?: boolean
}

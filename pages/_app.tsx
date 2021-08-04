import '../styles/global.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GA_TRACKING_ID, pageview } from '../libs/gtag';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!GA_TRACKING_ID) return

    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

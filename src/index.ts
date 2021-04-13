import * as Panelbear from '@panelbear/panelbear-js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const usePanelbear = (
  site: string,
  config?: Panelbear.PanelbearConfig
): void => {
  const router = useRouter()

  useEffect(() => {
    Panelbear.load(site, config)

    Panelbear.trackPageview()

    const onRouteChange = () => Panelbear.trackPageview()

    router.events.on('routeChangeComplete', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [site, config, router.events])
}

//todo: create a polyfill object for all browser compactibility..
import libraryConfig from '../libraryConfig'
const { breakPoints } = libraryConfig
import { useCallback, useMemo, useEffect, useState } from 'react'

export const gridRelay = (gridTemplateColumns = 'repeat(3, 1fr)') => {
  return {
    md: {
      gridTemplateColumns: gridTemplateColumns,
    },
    sm: {
    
      gridTemplateColumns: 'repeat(auto, 1fr)',
    },
  }
}

export const gridIntersects = mediaSymbol => {
  console.log(window.innerWidth)
  const mediaSets = {
    xs: 'repeat(auto, 1fr)',
    sm: 'repeat(auto, 1fr)',
    tab: 'repeat(1, 1fr)',
    tabPortrait: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
    '2xl': 'repeat(3, 1fr)',
  }
 
  return mediaSets[mediaSymbol]
  
}

export const useMediaQueryRequest = ({
  screenResolver = '(max-width: 768px)', // mobile first approach
}) => {
  const mediaQery = useMemo(
    () => window.matchMedia(screenResolver),
    [screenResolver]
  )

  const [isReached, setIsReached] = useState(mediaQery.matches)

  useEffect(() => {
    const handleMediaQueryRequest = e => setIsReached(e.matches)
    mediaQery.addEventListener('change', handleMediaQueryRequest)

    return () => {
      mediaQery.removeEventListener('change', handleMediaQueryRequest)
    }
  }, [mediaQery])

  return {
    hitsBreakPoint: isReached,
  }
}


export const useCurrentScreenQuery = () => {
  const screenSizes = useMemo(() => {
    return {
      //using rems...
      '2xl': 5000, 
      xl: 2090,
      lg: 1800, 
      md: 1280, 
      tabPortrait: 1024,
      tab: 1000,
      sm: 926, 
      xs: 480,
    }
  }, [])

  const findNearestBoundary = useCallback(querySet => {
    for (let i = querySet.length - 1; i >= 0; i--) {
      if (window.matchMedia(querySet[i]).matches) {
        switch (querySet[i]) {
          case `(max-width: 480px)`:
            return 'xs'
          case `(max-width: 926px)`:
            return 'sm'
          case '(max-width: 1000px)':
            return 'tab'
          case '(max-width: 1024px)':
            return 'tabPortrait'
          case '(max-width: 1280px)':
            return 'md'

          case '(max-width: 1800px)':
            return 'lg'
          case '(max-width: 2090px)':
            return 'xl'
          case '(max-width: 5000px)':
            return '2xl'
          default:
            return 'md'
        }
      }
    }
  }, [])

  const buildQuerySets = useCallback(() => {
    return Object.keys(screenSizes)?.map(
      item => `(max-width: ${screenSizes[item]}px)`
    )
  }, [screenSizes])

  const nearestMediaBoundary = useMemo(
    () => findNearestBoundary(buildQuerySets()),
    [buildQuerySets, findNearestBoundary]
  )

  const [nearestBound, setNearestBound] = useState(nearestMediaBoundary)

  const handleListener = useCallback(() => {
    // console.log(findNearestBoundary(buildQuerySets()))
    return setNearestBound(findNearestBoundary(buildQuerySets()))
  }, [buildQuerySets, findNearestBoundary])

  useEffect(() => {
    window.addEventListener('resize', handleListener)
    return () => {
      window.removeEventListener('resize', handleListener)
    }
  }, [buildQuerySets, findNearestBoundary, handleListener])

  return nearestBound
}

import { css } from 'styled-components'
export const trimString = (value: string, maxStringLength: number): string => {
  if (!value) return ''
  return value.length > maxStringLength
    ? `${value.substring(0, maxStringLength)}...`
    : value
}

export const verifyInputNumberOnly = e => {
  if (/^\D/.test(e.key) && e.key.length === 1) {
    e.preventDefault()
    return
  }
}


export   const selectInputId = (length) => {
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz"
  let stringID = "HTMLSelectInput_";
  if (!length) {
    length = Math.floor(Math.random() * randomChars.length)
  }
  for (let i = 0; i < length; i++) {
    stringID += randomChars[Math.floor(Math.random() * randomChars.length)]
  }
  const uniqBit = Date.now()
  return stringID + uniqBit
}


export const mediaDefinitions = {
  // custom usage
  '2xl': '5000px',
  xxl: '3000px',
  xl: '2090px',
  lg: '1800px',
  md: '1280px',
  tabPortrait: '1024px',
  tab: '1000px',
  sm: '926px',
  xs: '480px',
  zero: "10px",

  //generic usage
  xxmobileSmall:"100px",
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',
  tablets: '768px',
  tabletsPort: '998px',
  midBreak:"1000px",
  laptopSmall: '1074px',
  laptopsLarge: '1440px',
  desktops: '2560px',
  nonRetinaMinWidth: '1200px',
  nonRetinaMaxWidth: '1600px',
  retinaMinWidth: '1024px', //ipad pro
  retinaMaxWidth: '1920px',
  smallMobilePhonesGeneric: {
    min: '320px',
    max: '480px',
  },
  largeMobilePhonesGeneric: {
    min: '360px',
    max: '640px',
  },
  miniLaptops: {
    min: '1024px',
    max: '1920px',
  },
  smallLaptopsGeneric: {
    min: '768px',
    max: '1520px',
  },
  largeLaptopsGeneric: {
    min: '1030px',
    max: '9000px',
  },
  tabletsPortraits: {
    min: '768px',
    max: '1007px',
    orientation: 'portrait',
  },
  tabletsLandScape: {
    min: '768px',
    max: '1007px',
    orientation: 'landscape',
  },
}

export const convertPixelToRemOrEx = (breakpoints, ratio = 16, unit) => {
  const newBreakpoints = {}

  for (const key in breakpoints) {
    const point = breakpoints[key]

    if (String(point).includes('px')) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit
      continue
    }

    newBreakpoints[key] = point
  }

  return newBreakpoints
}

export const convertPixelToEm = (breakpoints, ratio = 16) => {
  return convertPixelToRemOrEx(breakpoints, ratio, 'em')
}
export const convertPixelToRem = (breakpoints, ratio = 16) => {
  return convertPixelToRemOrEx(breakpoints, ratio, 'rem')
}

export const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  if (typeof breakpoints[breakpointValue] == 'object') {
    return breakpoints[breakpointValue]?.max ?? 0
  } else {
    if (breakpoints[breakpointValue]) {
      return breakpoints[breakpointValue]
    } else if (parseInt(breakpointValue)) {
      return breakpointValue
    } else {
      return '0'
    }
  }
}

//computators
const screenComputation = () => {
   const breakpoints = mediaDefinitions;
  const lessThan = breakpoint => cssString => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${cssString};
    }
  `

  const greaterThan = breakpoint => cssString => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${cssString};
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => cssString => {
   
    const min = getSizeFromBreakpoint(firstBreakpoint, breakpoints)
    const max = getSizeFromBreakpoint(secondBreakpoint, breakpoints)
    return css`
      @media (min-width: ${min}) and (max-width: ${max}) {
        ${cssString};
      }
    `
  }

  return {
    lessThan,
    greaterThan,
    between,
  }
}

export const DeviceComputation = screenComputation();

export const DeviceManager = {
  mobileSmall: `only screen  and (max-width: ${mediaDefinitions.mobileSmall})`,
  mobileMedium: `only  screen  and (max-width: ${mediaDefinitions.mobileMedium})`,
  mobileLarge: `only  screen  and (max-width: ${mediaDefinitions.mobileLarge})`,
  tablets: `only  screen  and (max-width: ${mediaDefinitions.tablets})`,
  laptopSmall: `only  screen  and (max-width: ${mediaDefinitions.laptopSmall})`,
  laptopsLarge: `only  screen  and (max-width: ${mediaDefinitions.laptopsLarge})`,
  laptopNonRetina: `only  screen 
   and (min-device-width: ${mediaDefinitions.nonRetinaMinWidth}) 
   and (max-device-width: ${mediaDefinitions.nonRetinaMaxWidth}) 
   and (-webkit-min-device-pixel-ratio: 1)`,
  laptopRetina: `only screen 
   and (min-device-width: ${mediaDefinitions.retinaMinWidth}) 
   and (max-device-width: ${mediaDefinitions.retinaMaxWidth}) 
   and (-webkit-min-device-pixel-ratio: 2)
   and (min-resolution: 192dpi)`,
  desktops: `only  screen and (min-width: ${mediaDefinitions.desktops})`, //mac desktops

  smallMobilePhonesGeneric: `only screen   
   and (min-device-width : ${mediaDefinitions.smallMobilePhonesGeneric.min})   
   and (max-device-width : ${mediaDefinitions.smallMobilePhonesGeneric.max}) `,
  largeMobilePhonesGeneric: `only screen   
   and (min-device-width : ${mediaDefinitions.largeMobilePhonesGeneric.min})   
   and (max-device-width : ${mediaDefinitions.largeMobilePhonesGeneric.max})`,
  miniLaptops: `only screen   
  and (min-device-width : 768px)   
  and (max-device-width : 1024px)`,
  smallLaptopsGeneric: `only screen   
    and (min-device-width : ${mediaDefinitions.smallLaptopsGeneric.min})   
    and (max-device-width : ${mediaDefinitions.smallLaptopsGeneric.max})`, //1024
  largeLaptopsGeneric: `only screen   
    and (min-width: ${mediaDefinitions.largeLaptopsGeneric.min})   
    and (max-width: ${mediaDefinitions.largeLaptopsGeneric.max})`,
  tabletsPortraits: `only screen   
   and (orientation : ${mediaDefinitions.tabletsPortraits.orientation})   
   and (-webkit-min-device-pixel-ratio: 1)   
   and (min-device-width : ${mediaDefinitions.tabletsPortraits.min})   
   and (max-device-width : ${mediaDefinitions.tabletsLandScape.max})`,
  tabletsLandScape: `only screen   
   and (orientation : ${mediaDefinitions.tabletsLandScape.orientation})   
   and (-webkit-min-device-pixel-ratio: 1)  
   and (min-device-width : ${mediaDefinitions.tabletsLandScape.min})   
   and (max-device-width : ${mediaDefinitions.tabletsLandScape.max}) `,
}



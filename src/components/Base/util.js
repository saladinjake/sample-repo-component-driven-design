import styled, { css } from 'styled-components'
import CssDefaults from './cssConfig'
//mobile first approach...
// cutomize this to suit your needs...
const screenSizes = {
  // '2xl': 1560,
  // xl: 1408, //full hd
  // lg: 1215, //large desktop
  // md: 1023, //desktop
  // tab: 768, //tablets
  // sm: 0, // phones
  // all: 0,

  '2xl': 5000, //extra hd screens
  xl: 2090, //full hd
  lg: 1800, //large desktop
  md: 1280, //desktop
  tabPortrait: 1024, //tablets
  tab: 1000,
  sm: 926, // phones
  xs: 480,
  all: 0,
}

const isCamelCase = str => /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(str)
const toCssProp = strCamel =>
  strCamel.replace(/[A-Z]/g, val => '-' + val.toLowerCase())

export const mediaQuery = Object.keys(screenSizes).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => {
      if (!screenSizes.hasOwnProperty(label)) {
        return css`
          ${css(...args)};
        `
      } else {
        return css`
          @media (min-width: ${screenSizes[label] / 16}rem) {
            ${css(...args)};
          }
        `
      }
    }

    return accumulator
  },
  {}
)
export const runAdditivesOnQueries = styledObjects => {
  if (styledObjects) {
    for (let [key, value] of Object.entries(styledObjects)) {
      //allow camel case css
      if (styledObjects) {
        key = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key
        styledObjects[key] = value
      }
    }
    //do stuffs here before css jumbling is done with media queries
    const dataString =
      styledObjects &&
      JSON.stringify(styledObjects)
        .replace(/[{}"']/g, '')
        .replace(/,/g, ';') + ';'

    return dataString
  }
}
export const responsiveQueriesFluxMapper = queriesSets => {
  return Object.keys(queriesSets).map(key => {
    if (mediaQuery.hasOwnProperty(key)) {
      return mediaQuery[key]`
        ${runAdditivesOnQueries(queriesSets[key])};
    `
    } else {
      mediaQuery['all']`
        ${runAdditivesOnQueries(queriesSets['all'])};
    `
    }
  })
}

export const mediaPropsRevolver = (key, value, manager) => {
  const screensByIndex = {
    1: 'xs',
    2: 'sm',
    3: 'tab',
    4: 'tabPortrait',
    5: 'md',
    6: 'lg',
    7: 'xl',
    8: '2xl',
  }
  const querySets = {}
  key = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key
  //one prop one media slot chance only
  const result = value.map((item, index) => {
    if (index) {
      //allow camel case css

      return (querySets[screensByIndex[index]] = {
        [key]: `${manager && manager[item] ? manager[item] : item}`,
      })
    }
    return (querySets['all'] = {
      [key]: `${manager && manager[item] ? manager[item] : item}`,
    })
  })
  return querySets
}

//usage:  <Box padding={{ sm: {}, lg: {}, tabs:{}, md:{}, xl:{}, all: {}, "2xl": {} }} />
export const mediaPropsRebaser = (key, values, manager) => {
  // one prop one rebaser slot
  const screensByIndex = {
    xs: 'xs',
    sm: 'sm',
    tab: 'tab',
    tabPortrait: 'tabPortrait',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  }
  const querySets = {}
  for (const [keyQuery, valueItem] of Object.entries(values)) {
    //allow camel case css
    key = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key

    if (Object.keys(valueItem).length > 1) {
      const subsets = {}
      for (const [keyQ, valueI] of Object.entries(valueItem)) {
        subsets[keyQ] = valueI
      }
      querySets[keyQuery] = {
        ...subsets,
      }
    } else {
      querySets[keyQuery] = {
        [key]: valueItem,
      }
    }
  }

  return querySets
}



/*more utils*/
/*css extracts for academy*/
export const getFloatingWidthValue=  (span, withFloat =false) => {
    const floatCss =``;
    if (!span) return
    if(withFloat){
       floatCss = `float:left`
    }

    let width = (span / 12) * 100
    return `width: ${width}%; ${floatCss}`
}

export const getPlainCss = (objectRefStyles) => {
    let str = ''
    for (const [key, value] of Object.entries(objectRefStyles)) {
        let clo = ''
        key.split('').forEach(lt => {
            if (lt.toUpperCase() === lt) {
                clo += '-' + lt.toLowerCase()
            } else {
                clo += lt
            }
        })
        str += clo + ':' + value + ';'
    }
  
    return css`
        ${str}
    `
}

export const singleCssStylePropsMapper = (props, options=CssDefaults) =>{
  
  const keysOptions = Object.keys(options);
  const keysProps = Object.keys(props);
   //only css props allowed here
  for (const [key, value] of Object.entries(props)) {
    if( Object.prototype.hasOwnProperty.call(options,key)){
      return   getPlainCss({[key]: value})
    }

  }
  
}


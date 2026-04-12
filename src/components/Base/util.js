import styled, { css } from 'styled-components'
import CssDefaults from './cssConfig'

const screenSizes = {
  '2xl': 5000, 
  xl: 2090, 
  lg: 1800, 
  md: 1280, 
  tabPortrait: 1024,
  tab: 1000,
  sm: 926, 
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
    const processed = {};
    for (let [key, value] of Object.entries(styledObjects)) {
      const cssKey = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key;
      processed[cssKey] = value;
    }
    
    return Object.entries(processed)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');
  }
  return '';
}

export const responsiveQueriesFluxMapper = queriesSets => {
  return Object.keys(queriesSets).map(key => {
    if (mediaQuery.hasOwnProperty(key)) {
      return mediaQuery[key]`
        ${runAdditivesOnQueries(queriesSets[key])}
      `;
    }
    return '';
  });
}

const transformValue = (value, manager) => {
  if (!manager) return value;
  if (typeof manager === 'function') return manager(value);
  return manager[value] !== undefined ? manager[value] : value;
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
  const cssKey = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key;
  
  value.forEach((item, index) => {
    const val = transformValue(item, manager);
    const screen = index === 0 ? 'all' : screensByIndex[index];
    if (screen) {
      querySets[screen] = { ...querySets[screen], [cssKey]: val };
    }
  });
  
  return querySets
}

export const mediaPropsRebaser = (key, values, manager) => {
  const querySets = {}
  const cssKey = isCamelCase(key) && CssDefaults[key] ? CssDefaults[key] : key;

  for (const [screen, val] of Object.entries(values)) {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        querySets[screen] = { ...querySets[screen], ...val };
    } else {
        const transformed = transformValue(val, manager);
        querySets[screen] = { ...querySets[screen], [cssKey]: transformed };
    }
  }

  return querySets
}

export const getFloatingWidthValue = (span, withFloat = false) => {
    if (!span) return ''
    let floatCss = withFloat ? 'float: left;' : '';
    let width = (span / 12) * 100
    return `width: ${width}%; ${floatCss}`
}

export const getPlainCss = (objectRefStyles) => {
    let str = ''
    for (const [key, value] of Object.entries(objectRefStyles)) {
        const cssKey = key.replace(/[A-Z]/g, lt => `-${lt.toLowerCase()}`);
        str += `${cssKey}:${value};`
    }
    return css`${str}`
}

export const singleCssStylePropsMapper = (props, options = CssDefaults) => {
  for (const [key, value] of Object.entries(props)) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      return getPlainCss({ [key]: value })
    }
  }
}

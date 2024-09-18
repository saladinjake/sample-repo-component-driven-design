import { css } from 'styled-components'
import { DeviceComputation, DeviceManager , mediaDefinitions  } from './helperFuncs'
const { lessThan, greaterThan, between } = DeviceComputation
/*
* usage
import mediaScreenBuilder, {
  screenDeviceManager,

} from "theme/responsive";

  //generic usage ...
  @media ${screenDeviceManager.mobileMedium} {
    display: none;
  }
  ${mediaScreenBuilder.between("mobileSmall", "retinaMaxWidth")`
        display: none;
   `};
   ${mobileCssInjector(`
      color:yellow;
      cursor: pointer;
      background-color: red;
   `, 
   screenDeviceManager.mobileMedium
   )}

   //custom usage ...
   ${withMediaSystems.xs("color:yellow;...")}
*/


const ScreenBulider = function () {
  const responsiveBreakPoints = {
    ...mediaDefinitions,
  }
  const breakpoints = responsiveBreakPoints

  //useful css hooks

  const mobileCssInjector = (cssString, minMaxMediaConstraint) => css`
    @media ${minMaxMediaConstraint} {
      ${cssString};
    }
  `

  const withMediaSystems = {
    xs: cssString => css`
      @media only screen and (max-width: ${breakpoints.xs}) {
        ${cssString};
      }
    `,
    sm: cssString => css`
      @media only screen and (max-width: ${breakpoints.sm}) {
        ${cssString};
      }
    `,
    md: cssString => css`
      @media only screen and (max-width: ${breakpoints.md}) {
        ${cssString};
      }
    `,
    lg: cssString => css`
      @media only screen and (max-width: ${breakpoints.lg}) {
        ${cssString};
      }
    `,
    xl: cssString => css`
      @media only screen and (max-width: ${breakpoints.xl}) {
        ${cssString};
      }
    `,
    xxl: cssString => css`
      @media only screen and (max-width: ${breakpoints.xxl}) {
        ${cssString};
      }
    `,
  }

  const oldStyle = Object.keys(breakpoints).reduce(
    (acc, label) => {
      const size = breakpoints[label]

      acc.to[label] = cssString => {
        return css`
          @media (max-width: ${size}) {
            ${cssString};
          }
        `
      }

      acc.from[label] = cssString => {
        return css`
          @media (min-width: ${size}) {
            ${cssString};
          }
        `
      }

      return acc
    },
    { to: {}, from: {} }
  )

  return Object.assign(
    {
      withMediaSystems,
      lessThan,
      greaterThan,
      between,
      mobileCssInjector,
    },
    oldStyle
  )
}

const mediaScreenBuilder = ScreenBulider()

export const screenDeviceManager = DeviceManager
export default mediaScreenBuilder

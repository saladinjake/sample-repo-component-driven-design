import libraryConfig from '../libraryConfig'
import {
  responsiveQueriesFluxMapper,
  mediaPropsRevolver,
  mediaPropsRebaser,
} from '../components/Base/util'

const screensByIndex = {
  1: "xs",
  2: 'sm',
  3: 'tab',
  4:"tabPortrait",
  5: 'md',
  6: 'lg',
  7: 'xl',
  8: '2xl',
}

const manageBreakpoints = (
  key: string,
  value: Array<string | number | any> | string | number | any,
  theme: any,
  manager?: any
) => {
  theme = Object.values(theme).length ? theme : libraryConfig

  if (!value) return `${key}: ''`

  const hasMediaProps = values => {
    if (values) {
      //values shold seemingly look this way display: {sm:{}, lg:{}, tabs:{}, md:{}}
      const mediaFlags = ['xs','sm', 'tabs', "tabPortrait", 'md', 'lg', 'xl', '2xl', 'all']
      const hasMediaSets = Object.keys(values).some(item =>
        mediaFlags.includes(item)
      )
      if (hasMediaSets == true) {
        return true
      }
      return false
    }
    return false
  }

  if (hasMediaProps(value)) {
    const rebaserQuerySet = mediaPropsRebaser(key, value, manager)
    return responsiveQueriesFluxMapper(rebaserQuerySet)
  } else if (Array.isArray(value) && hasMediaProps(value) === false) {
    const revolverQuerySet = mediaPropsRevolver(key, value, manager)
    return responsiveQueriesFluxMapper(revolverQuerySet)
  }

  return `${key}: ${manager && manager[value] ? manager[value] : value}`
}

export default manageBreakpoints

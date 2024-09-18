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

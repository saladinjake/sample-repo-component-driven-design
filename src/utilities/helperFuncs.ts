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

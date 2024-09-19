import React, {useState,useEffect} from 'react'

import  Box from '../Box/Box'
import Flex from '../Flex/Flex'
import {
  Label,
  InputWrapper,
  RequiredAsterisk,
  Error,
  StyledErrorIcon,
} from './Input.styles'
import { InputProps } from './Input.types'
// import { Svg } from "../../assets/svg";

// const { Error: ErrorIcon } = Svg;

const useValidationWrangler = testInput => {
  const [validLowerCase, setValidLowerCase] = useState(false)
  const [validUpperCase, setValidUpperCase] = useState(false)
  const [validSpecialCase, setValidSpecialCase] = useState(false)
  const [validLengthCase, setValidLengthCase] = useState(false)
  const [validDigitCase, setValidDigitCase] = useState(false)
  
  const containsValidCharacter = (stringToTest, validCharacters) => {
    for (var i = 0; i < stringToTest.length; i++) {
      if (validCharacters.indexOf(stringToTest.charAt(i)) !== -1) {
        return true
      }
    }
    return false
  }

  const runValidationChecks = testInput => {
   

    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
    const digit = '1234567890'
    const special = '§!"#¤%&/()=?@£$€{[]}+.....,<>;:_'

    if (containsValidCharacter(testInput, lowercase)) {
      setValidLowerCase(true)
    }

    if (containsValidCharacter(testInput, uppercase)) {
      setValidUpperCase(true)
    }

    if (containsValidCharacter(testInput, special)) {
      setValidSpecialCase(true)
    }

    if (containsValidCharacter(testInput, digit)) {
      setValidDigitCase(true)
    }

    if (testInput.length > 8) {
      setValidLengthCase(true)
    }
  }


useEffect(() => {
  runValidationChecks(testInput)
}, [testInput, runValidationChecks])
  return {
    lowercase: validLowerCase,
    uppercase: validUpperCase,
    digit: validDigitCase,
    special: validSpecialCase,
    length: validLengthCase,
  }
}

const Input: React.FC<InputProps> = ({
  label = 'Label',
  type = 'password',
  error,
  message,
  width,
  placeholder = 'Placeholder',
  required = false,
  value = 0,
  onChange,
  onChangePure,
  onFocus,
  onBlur,
  onKeyUp,
  disabled,
  name,
  isLoading,
  passwordValidation = true
}) => {
  const validationsChecks =  useValidationWrangler(value);
  const [hasFocusOrBlur, setHasFocusOrBlur] = useState(false)
 
  if (value === undefined || value == null) {
    value = ''
  }
  return (
    <Box>
      {isLoading ? (
        <> loading..</>
      ) : (
        <Flex>
          <Label>{label}</Label>
          {required && (
            <span>
              *
            </span>
          )}
        </Flex>
      )}

      {isLoading ? (
        <Box mt="4">loading..</Box>
      ) : (
        <>
        <Box>
          <InputWrapper
            width={width}
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={e => {
              setHasFocusOrBlur(true)
              onChangePure && onChangePure(e)
              onChange && onChange(e.currentTarget.value)
            }}
            disabled={disabled}
            onFocus={ev => {
              setHasFocusOrBlur(true)
              onFocus && onFocus(ev)
            }}
            onBlur={evt => {
              setHasFocusOrBlur(false)
              onBlur && onBlur(evt)
            }}
            onKeyUp={evt => {
              setHasFocusOrBlur(true)
              onKeyUp && onKeyUp(evt)
            }}
          />
          </Box>
          { type == 'password' && passwordValidation ==true  && hasFocusOrBlur && (
            <div >
            <Box mt="5" width="100%">
              <Box>Must contain at least </Box>
              <Flex justifyContent="between" mt="10">
                <Box>
                  <Flex justifyContent="start">
                    <Box className="col-md-2">
                      <input
                        type="radio"
                        name={'length.check'}
                        id=""
                        className="form-check-input"
                        style={{
                          width: '10px',
                          height: '20px',
                          borderColor: 'black',
                        }}
                        checked={validationsChecks.length ? true: false}
                      />
                    </Box>
                    8 characters{' '}
                  </Flex>
                  <Flex justifyContent="start">
                    <Box className="col-md-2">
                      <input
                        type="radio"
                        name={'lowecase.check'}
                        id=""
                        className="form-check-input"
                        style={{
                          width: '10px',
                          height: '20px',
                          borderColor: 'black',
                        }}
                        checked={validationsChecks.lowercase ? true: false}
                      />
                    </Box>
                    1 lowercase characters{' '}
                  </Flex>
                  <Flex justifyContent="start">
                    <Box className="col-md-2">
                      <input
                        type="radio"
                        name={'uppercase.check'}
                        id=""
                        className="form-check-input"
                        style={{
                          width: '10px',
                          height: '20px',
                          borderColor: 'black',
                        }}
                        checked={validationsChecks.uppercase ? true: false}
                      />
                    </Box>
                    1 uppercase characters{' '}
                  </Flex>
                </Box>

                <Box>
                  <Flex justifyContent="start">
                    <Box className="col-md-2" >
                      <input
                        type="radio"
                        name={'number.check'}
                        id=""
                        className="form-check-input"
                        style={{
                          width: '10px',
                          height: '20px',
                          borderColor: 'black',
                        }}

                      />
                    </Box>
                    1 number{' '}
                  </Flex>

                  <Flex justifyContent="start">
                    <Box className="col-md-2" >
                      <input
                        type="radio"
                        name={'character.check'}
                        id=""
                        className="form-check-input"
                        style={{
                          width: '10px',
                          height: '20px',
                          borderColor: 'black',
                        }}
                        checked={validationsChecks.special ? true: false}
                      />
                    </Box>
                    1 special character{' '}
                  </Flex>
                </Box>
              </Flex>
            </Box>
             </div>
          )}

        </>
      )}

      {error && (
        <Error>
          {/*<StyledErrorIcon src={ErrorIcon} alt="error-icon" />*/}
          {message}
        </Error>
      )}
    </Box>
  )
}

export default Input

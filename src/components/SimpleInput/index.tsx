import { InputHTMLAttributes } from 'react'
import { Input, InputContainer } from './styles'

interface SimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  inputSize?: 'full' | number
  isFlexNone?: boolean
}

export function SimpleInput({
  isOptional = false,
  inputSize = 'full',
  isFlexNone = false,
  ...rest
}: SimpleInputProps) {
  return (
    <InputContainer
      inputSize={inputSize}
      isOptional={isOptional}
      isFlexNone={isFlexNone}
    >
      <Input id="input" {...rest} />
      {isOptional === true && <label htmlFor="input">Opcional</label>}
    </InputContainer>
  )
}

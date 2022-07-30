import { InputHTMLAttributes } from 'react'
import { Input, InputContainer } from './styles'

interface SimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  inputSize?: 'full' | number
}

export function SimpleInput({
  isOptional = false,
  inputSize = 'full',
  ...rest
}: SimpleInputProps) {
  return (
    <InputContainer inputSize={inputSize} isOptional={isOptional}>
      <Input id="input" {...rest} />
      {isOptional === true && <label htmlFor="input">Opcional</label>}
    </InputContainer>
  )
}

import styled from 'styled-components'

interface InputContainerProps {
  isOptional: boolean
  inputSize: 'full' | number
  isFlexNone: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  flex: ${({ isFlexNone }) => isFlexNone === true && `none`};
  position: relative;
  width: ${({ inputSize }) =>
    inputSize === 'full' ? '100%' : `${inputSize}px`};

  display: flex;
  align-items: center;

  input {
    padding-right: ${({ isOptional }) => isOptional === true && `80px`};
  }

  label {
    position: absolute;
    right: 12px;
    opacity: 0.5;
  }
`

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme['base-input']};
  border: none;
  padding: 12px;
  color: ${({ theme }) => theme['base-text']};
  font-size: 0.875rem;
  border-radius: 4px;

  &::placeholder {
    font-size: 0.875rem;
  }
`

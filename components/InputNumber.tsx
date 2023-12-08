/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ChangeEvent } from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'

type InputNumberProps = {
  label: string
  name: string
  error?: FieldError | undefined
  required?: boolean
  register: UseFormRegister<any>
  css: string
  isError?: boolean
  part
}

const InputNumber: FC<InputNumberProps> = ({
  label,
  name,
  register,
  required = false,
  error,
  css,
  isError,
  part,
}) => {
  return (
    <div className={`relative mb-6 w-full`}>
      {part !== 'weightGoal' && isError && (
        <div className="min-h-2 mb-5 h-2 text-red-500">{error?.message || ''}</div>
      )}
      {part === 'weightGoal' && isError && (
        <div className="min-h-2 mb-5 h-2 text-red-500">
          {
            'Please provide your weight goal in kg for the current step before proceeding to the next step'
          }
        </div>
      )}
      <input
        {...register(name, {
          required: {
            value: true,
            message: 'You have To Enter the Number for Next Step',
          },
        })}
        id={name}
        name={name}
        type="number"
        autoComplete="email"
        placeholder={label}
        required={required}
        className={`block  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-100 dark:text-gray-900 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${css}`}
      />
    </div>
  )
}

export default InputNumber

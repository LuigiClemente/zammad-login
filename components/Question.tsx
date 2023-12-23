'use client'
import { useState } from 'react'
import Input from './Input'
import Image from 'next/image' // Importing 'next/image'
import InputNumber from './InputNumber'

const Question = ({
  question,
  options,
  type,
  register,
  error,
  name,
  stepValueChecker,
  handleOptionClick,
  isError,
  image,
}) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleClick = (option, name) => {
    handleOptionClick(option, name)
    setSelectedOption(option)
  }

  const handleKeyDown = (event, option, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(option, name)
    }
  }

  const renderRadioOptions = () => (
    <div className="flex flex-col">
      {isError && error[name] && (
        <p className="mb-2 uppercase text-red-500">
          {'Kindly select an option to proceed to the next step.'}
        </p>
      )}
      {options.map((option, index) => (
        <div
          key={name + index}
          className="mb-1 mt-5 cursor-pointer rounded p-2"
          onClick={() => handleOptionClick(option, name)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, option, name)}
        >
          <input
            {...register(name)}
            type="radio"
            id={name + index}
            name={name}
            value={option}
            // className="appearance-none focus:border-designColor focus:outline-none focus:ring active:border-designColor active:outline-none active:ring"
          />
          <label
            htmlFor={name + index}
            className="ml-3 cursor-pointer text-sm font-medium text-txt dark:text-gray-200"
          >
            {option}
          </label>
        </div>
      ))}
      {stepValueChecker === 'Other' && (
        <input
          type="text"
          name="otherOption"
          required={true}
          placeholder="Enter other option"
          className={'text-grey-600 mb-2'}
        />
      )}
    </div>
  )

  const renderInputOptions = () =>
    type === 'input' &&
    options.map((option, index) => (
      <div key={name + index}>
        <InputNumber
          label={option}
          name={name}
          register={register}
          error={error[name]}
          css={'w-[120px]'}
          isError={isError}
          part={name}
        />
      </div>
    ))
  const renderCheckboxOptions = () => (
    <div className="flex flex-col">
      {isError && error[name] && (
        <p className="mb-2 uppercase text-red-500">
          {'Kindly select an option to proceed to the next step.'}
        </p>
      )}
      {options.map((option, index) => (
        <div
          key={name + index}
          className="mb-4 mt-5 cursor-pointer rounded p-2"
          role="button"
          tabIndex={0}
          onClick={() => handleOptionClick(option, name)}
          onKeyDown={(e) => handleKeyDown(e, option, name)}
        >
          <input
            {...register(name)}
            type="checkbox"
            id={name + index}
            name={name}
            value={option}
            // className="appearance-none focus:border-designColor focus:outline-none focus:ring active:border-designColor active:outline-none active:ring"
          />
          <label
            htmlFor={name + index}
            className="ml-3 cursor-pointer text-sm font-medium text-txt dark:text-gray-200"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  )

  const displayImage = 'https://picsum.photos/seed/picsum/800/400'

  return (
    <div className="h-full min-h-full w-full">
      <Image
        src={`/static/images/question/${image}`}
        width={672}
        height={385}
        alt="avatar"
        className="h-100 w-full"
      />
      <div>
        <h3 className="regal-black mb-5 mt-5 font-sans font-medium text-subTitleLM dark:text-gray-100">
          {question}
        </h3>
        <div>
          {type === 'radio' && renderRadioOptions()}
          {renderInputOptions()}
          {type === 'checkbox' && renderCheckboxOptions()}
        </div>
      </div>
    </div>
  )
}

export default Question

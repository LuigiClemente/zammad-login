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
  currentQuestion,
  numOfQuestion,
  isFirstStep,
  handlePrev
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
     
      {options.map((option, index) => (
        <div
          key={name + index}
          className="mb-1 mt-1 cursor-pointer rounded flex items-center"
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
            className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-[#f8e43f] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  text-[#f8e43f] shadow-none"
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
          className="text-gray-600 mt-3 p-2 rounded border border-gray-300 focus:border-[#f8e43f] "
        />
      )}


{isError && error[name] && (
        <p className="mb-2 text-sm uppercase text-red-500 mt-2">
          {'Kindly select an option to proceed to the next step.'}
        </p>
      )}
    </div>
  );



  const renderInputOptions = () =>
    type === 'input' &&
    options.map((option, index) => (
      <div key={name + index}>


        <InputNumber
          label={option}
          name={name}
          register={register}
          error={error[name]}
          css={' text-gray-600 mt-3 p-2 rounded border border-gray-300 focus:border-[#f8e43f] '}
          isError={isError}
          part={name}

        />
      </div>
    ))
  const renderCheckboxOptions = () => (
    <div className="flex flex-col">
      
      {options.map((option, index) => (
        <div
          key={name + index}
          className="mb-2 cursor-pointer rounded "
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
            className="appearance-none text-[#f8e43f]"
          />
          <label
            htmlFor={name + index}
            className="ml-3 cursor-pointer text-sm font-medium text-txt dark:text-gray-200"
          >
            {option}
          </label>
        </div>
      ))}
      {isError && error[name] && (
        <p className="mb-2 text-sm uppercase text-red-500 mt-2">
          {'Kindly select an option to proceed to the next step.'}
        </p>
      )}
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
     <div className='p-3'>
     <div className="flex w-[100%] flex-row justify-between">
          {currentQuestion !== 0 ? (
            <button
              onClick={handlePrev}
              className="mb-1 mr-6 bg-transparent text-base font-bold uppercase hover:underline"
              disabled={isFirstStep}
            >
              Return
            </button>
          ) : (
            <div></div>
          )}
          {/* <QuestionNav
            handleStepper={handleStepper}
            currentQuestion={currentQuestion}
            questionsList={questionsList}
          /> */}
          <div>
            {currentQuestion + 1} / {numOfQuestion}
          </div>
        </div>
      <div>
        <h3 className="regal-black mb-2 mt-2 font-sans font-medium text-subTitleLM dark:text-gray-100">
          {question}
        </h3>
        <div>
          {type === 'radio' && renderRadioOptions()}
          {renderInputOptions()}
          {type === 'checkbox' && renderCheckboxOptions()}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Question

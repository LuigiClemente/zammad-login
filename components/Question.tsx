'use client'
import { useState, useEffect } from 'react'
import Input from './Input'
import Image from 'next/image'
import InputNumber from './InputNumber'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('Questions');
  const [selectedOption, setSelectedOption] = useState('')
  const [date, setDate] = useState('')
  const [formattedDate, setFormattedDate] = useState('')

  const handleClick = (option, name) => {
    handleOptionClick(option, name)
    setSelectedOption(option)
  }

  const handleKeyDown = (event, option, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(option, name)
    }
  }

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
    setFormattedDate(formatDateString(value));
  }

  const formatDateString = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    if(type === "date"){
      // Check if the date is already set (e.g., from persisted state)
    const tag:any = document.getElementById(name);
    const initialDate = tag.value;
    if (initialDate) {
      setDate(initialDate);
      setFormattedDate(formatDateString(initialDate));
    }
    }
  }, [name]);

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
            className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-[#f8e43f] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer text-[#f8e43f] shadow-none"
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
          className="text-gray-600 mt-3 p-2 rounded border border-gray-300 focus:border-[#f8e43f]"
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
          css={' text-gray-600 mt-3 p-2 rounded border border-gray-300 focus:border-[#f8e43f]'}
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
          className="mb-2 cursor-pointer rounded"
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

  const renderDateInput = () => (
    <div className="flex flex-col relative">
      <input
        {...register(name)}
        type="date"
        id={name}
        name={name}
        className="text-gray-600 mt-3 p-2 rounded border border-gray-300 focus:border-[#f8e43f]"
        onChange={handleDateChange}
      />
      <span className="absolute top-[38%] left-[10px] min-w-[140px] bg-white text-gray-600">{formattedDate}</span>
      {isError && error[name] && (
        <p className="mb-2 text-sm uppercase text-red-500 mt-2">
          {'Please select a valid date to proceed to the next step.'}
        </p>
      )}
    </div>
  )

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
              {t('Return')}
            </button>
          ) : (
            <div></div>
          )}
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
            {type === 'date' && renderDateInput()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question

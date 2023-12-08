import { useState } from 'react'

const QuestionNav = ({ handleStepper, currentQuestion, questionsList }) => {
  const [stepCompleted, setStepCompleted] = useState([true, false, false])

  const handleItemClick = (index) => {
    handleStepper(index)
  }

  const handleItemKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleStepper(index)
    }
  }

  return (
    <ul className="relative flex w-full flex-row flex-wrap gap-x-1">
      {questionsList.map((item, index) => (
        <li
          key={index}
          className={`group mb-1 flex flex-1 shrink basis-0 items-center gap-x-2 ${
            stepCompleted[index - 1] ? 'hs-stepper-completed' : ''
          } ${index === currentQuestion ? 'hs-stepper-active' : ''}`}
        >
          <button
            className={`group inline-flex min-h-[26px] min-w-[26px] items-center align-middle text-xs ${
              index === currentQuestion ? 'bg-greenColor' : 'bg-lightGreen dark:bg-lightBlack'
            } ${stepCompleted[index - 1] ? 'bg-designColor' : ''}`}
            // onClick={() => handleItemClick(index)}
            // onKeyDown={(e) => handleItemKeyDown(e, index)}
            tabIndex={0}
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-xs font-medium text-txt dark:text-white dark:group-focus:bg-gray-600 ">
              {stepCompleted[index - 1] ? <span>{index}</span> : <span>{index}</span>}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default QuestionNav

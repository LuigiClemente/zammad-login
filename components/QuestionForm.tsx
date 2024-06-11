import { QUESTION_DATA } from '@/data/questionData'
import { yupResolver } from '@hookform/resolvers/yup'
import { REGISTER_SCHEMA } from '../app/[locale]/yup/Validation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Resolver, SubmitHandler, useForm } from 'react-hook-form'
import ModalSubmit from './ModalSubmit'
import Question from './Question'
import SplashHeader from './SplashHeader'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import { GlobalHeader } from './global-header'
import { OtherHeader } from './other-header'




const QuestionModal = ({checkerRoute , setQuestionModalOpen , questionModalOpen  }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [stepValueChecker, setStepValueChecker] = useState(null)
  const [isLastStep, setIsLastStep] = useState(false)
  const [isFirstStep, setIsFirstStep] = useState(false)
  const [isFemale, setIsFemale] = useState(false)
  const [haveWeightGoal, setHaveWeightGoal] = useState(false)
  const [isError, setIsError] = useState(false)
  const questionsList = QUESTION_DATA.filter(
    (question) =>
      !(
        (!isFemale && question.gender === 'female') ||
        (question?.name === 'weightGoal' && !haveWeightGoal)
      )
  )
  const numOfQuestion = questionsList.length
  const initialArray = Array.from({ length: numOfQuestion }, (_, index) => index === 0)
  const [stepCompleted, setStepCompleted] = useState(initialArray)

  const handleNext = () => {
    const formValues = getValues()
    if (!formValues[questionsList[currentQuestion].name]) {
      setIsError(true)
      return
    }
    setIsError(false)
    setCurrentQuestion((cur) => (cur < questionsList.length - 1 ? cur + 1 : cur))
    setStepValueChecker(null)
    setStepCompleted((prevArray) => {
      const newArray = [...prevArray]
      newArray[currentQuestion] = true
      return newArray
    })

    setIsLastStep(currentQuestion === questionsList.length - 2)
  }

  const handleStepper = (index) => {
    setStepValueChecker(null)
    setCurrentQuestion(index)
    setIsLastStep(currentQuestion === questionsList.length - 1)
  }

  const handlePrev = () => {
    const formValues = getValues()
    setCurrentQuestion((cur) => Math.max(0, cur - 1))
    const newArray = [...stepCompleted]
    newArray[currentQuestion] = true
    setStepCompleted(newArray)
    setIsError(false)
    setIsFirstStep(currentQuestion === 0)
    setIsLastStep(false)
  }

  const handleOptionClick = (option, name) => {
    setStepValueChecker(option)
    if (option === 'Female') {
      setIsFemale(true)
    } else if (option === 'Male') {
      setIsFemale(false)
    }
    if (name === 'haveWeightGoal') {
      setHaveWeightGoal(option === 'Yes')
      console.log('setHaveWeightGoal ::: >>>', haveWeightGoal)
    }

    console.log('Value checker is >>>', option, isFemale)
  }

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
    setIsLastStep(true)
  }
  const questionsListRef = useRef(questionsList)

  useEffect(() => {
    // Initialize questionsList inside the useEffect to reflect the latest state
    const filteredQuestions = QUESTION_DATA.filter(
      (question) =>
        !(
          (!isFemale && question.gender === 'female') ||
          (question?.name === 'weightGoal' && !haveWeightGoal)
        )
    )

    if (!isFemale || haveWeightGoal) {
      questionsListRef.current = filteredQuestions
      console.log('Question Data filter ::: >>', questionsListRef.current, isFemale)
    } else {
      questionsListRef.current = filteredQuestions.filter(
        (question) => !(question.name === 'weightGoal' && haveWeightGoal)
      )
      console.log('Question Data filter ::: >>', questionsListRef.current, isFemale)
    }
  }, [isFemale, haveWeightGoal])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    getValues,
    reset,
  } = useForm<RegisterQuestion>({
    resolver: yupResolver(REGISTER_SCHEMA) as Resolver<RegisterQuestion>,
  })

  const onSubmit: SubmitHandler<RegisterQuestion> = async (values) => {
    console.log('Submitting form with values:', values)
    setModalVisible(true)
    return Promise.resolve()
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
   
   <>
   
   
      <form
        className="flex w-full max-w-xl flex-col justify-between rounded bg-darkGreen   dark:bg-blackDark questions mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <Question
          question={questionsList[currentQuestion].question}
          options={questionsList[currentQuestion].options}
          type={questionsList[currentQuestion].type}
          image={questionsList[currentQuestion].image}
          register={register}
          error={errors}
          name={questionsList[currentQuestion].name}
          stepValueChecker={stepValueChecker}
          handleOptionClick={handleOptionClick}
          isError={isError}
          currentQuestion={currentQuestion}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
          numOfQuestion={numOfQuestion}
        />

        
        <div className='p-3'>
        {!isLastStep && (
          <button
            onClick={handleNext}
            className="btn-primary w-full bg-[#2ae8d3] "
         
          >
            Continue
          </button>
        )}
        {isLastStep && (
          <button
            type="submit"
           className="btn-primary w-full bg-[#2ae8d3] "
           
          >
            Submit
          </button>
        )}
        </div>
      </form>
      {isLastStep && (
        <ModalSubmit
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          handleSave={checkerRoute}
        />
      )}


   
   </>
   
  )
}

export default QuestionModal

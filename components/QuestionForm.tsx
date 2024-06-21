
import { yupResolver } from '@hookform/resolvers/yup';
import { REGISTER_SCHEMA } from '../app/[locale]/yup/Validation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalSubmit from './ModalSubmit';
import Question from './Question';
import useLocalStorage from 'use-local-storage';
import 'react-responsive-modal/styles.css';
import { useQuestions } from 'hooks/useQuestions';
import { useTranslations } from 'next-intl';


const QuestionModal = ({ checkerRoute, setQuestionModalOpen, questionModalOpen }) => {
  const QUESTION_DATA = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useLocalStorage('currentQuestion', 0);
  const [answers, setAnswers] = useLocalStorage('answers', {});
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [haveWeightGoal, setHaveWeightGoal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [stepValueChecker, setStepValueChecker] = useState(null);

  const questionsList = useMemo(() => {
    return QUESTION_DATA.filter(question => 
      !((!isFemale && question.gender === 'female') || (question.name === 'weightGoal' && !haveWeightGoal))
    );
  }, [isFemale, haveWeightGoal]);

  const numOfQuestion = questionsList.length;

  const { register, handleSubmit, formState: { errors }, getValues, reset, setValue } = useForm({
    resolver: yupResolver(REGISTER_SCHEMA),
  });

  const handleNext = () => {
    const formValues = getValues();
    if (!formValues[questionsList[currentQuestion].name]) {
      setIsError(true);
      return;
    }
    setIsError(false);

    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionsList[currentQuestion].name]: formValues[questionsList[currentQuestion].name],
    }));

    setCurrentQuestion((current:any) => {
      const nextQuestion = current + 1;
      setIsLastStep(nextQuestion === questionsList.length);
      return Math.min(questionsList.length - 1, nextQuestion);
    });
  };

  const handlePrev = () => {
    console.log('Handling prev')
    setCurrentQuestion((current:any) => {
      const newCurrent = Math.max(0, current - 1);
      console.log({newCurrent});

      setIsFirstStep(newCurrent === 0);
      setIsLastStep(false);
      return newCurrent;
    });
  };

  const handleOptionClick = (option, name) => {
    setStepValueChecker(option);
    if (name === 'gender') {
      setIsFemale(option === 'Female');
    }
    if (name === 'haveWeightGoal') {
      setHaveWeightGoal(option === 'Yes');
    }
  };
  const handleStepper = (index) => {
    setStepValueChecker(null);
    setCurrentQuestion(index);
    setIsLastStep(index === questionsList.length - 1);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    Object.keys(answers).forEach((name:any) => {
      setValue(name, answers[name]);
    });
  }, [setValue, answers]);
const t = useTranslations('Questions');
  useEffect(() => {
    const filteredQuestions = QUESTION_DATA.filter(question => 
      !((!isFemale && question.gender === 'female') || (question.name === 'weightGoal' && !haveWeightGoal))
    );
    console.log('In Use Effect')
    console.log({currentQuestion , filteredQuestions})
    if (currentQuestion >= filteredQuestions.length) {
      setCurrentQuestion(filteredQuestions.length - 1);
    }
  }, []);

  const onSubmit = async (values) => {
    console.log('Submitting form with values:', values);
    setCurrentQuestion(0);
    setAnswers({});
    setQuestionModalOpen(false);
    setModalVisible(true);
    return Promise.resolve();
  };

  return (
    <>
      <form
        className="flex w-full max-w-xl flex-col justify-between rounded bg-darkGreen dark:bg-blackDark questions mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Question
          question={questionsList[currentQuestion].question}
          options={questionsList[currentQuestion].options}
          type={questionsList[currentQuestion].type}
          image={questionsList[currentQuestion].image}
          register={register}
          error={errors}
          
          
          stepValueChecker={stepValueChecker}
          name={questionsList[currentQuestion].name}
          handleOptionClick={handleOptionClick}
          isError={isError}
          currentQuestion={currentQuestion}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
          numOfQuestion={numOfQuestion}
        />

        <div className='p-3'>
          {!isLastStep ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary w-full bg-[#2ae8d3]"
            >
              {t('Continue')}
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary w-full bg-[#2ae8d3]"
            >
              {t('Submit')}
            </button>
          )}
        </div>
      </form>
      {modalVisible && (
        <ModalSubmit
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          handleSave={checkerRoute}
        />
      )}
    </>
  );
};

export default QuestionModal;

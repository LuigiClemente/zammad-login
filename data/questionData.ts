export const QUESTION_DATA = [
  {
    question:
      'How many plants do you consume? Plants include fruits, vegetables, grains, legumes, and nuts.',
    options: ['1-3 plants per day', '4-6 plants per day', '7+ plants per day'],
    type: 'radio',
    name: 'fruits',
    image: 'How many plants do you consume_.png',
  },
  {
    question: 'Which health goal is most important to you? You can add more goals later.',
    options: [
      'Healthy Aging / Longevity',
      'Intestinal Health',
      'Strength / Physical Performance',
      'Heart Health (avoiding heart attacks, strokes, high blood pressure, etc.)',
      'Brain Health',
      'Reducing the risk of diabetes',
      'Immune System Health',
      'Other',
    ],
    type: 'radio',
    name: 'healthGoal',
    image: 'Which health goal is most important to you_.png',
  },
  {
    question: 'Which health goal is most important to you? You can add more goals later.',
    options: [
      'Healthy Aging / Longevity',
      'Intestinal Health',
      'Strength / Physical Performance',
      'Heart Health (avoiding heart attacks, strokes, high blood pressure, etc.)',
      'Brain Health',
      'Reducing the risk of diabetes',
      'Immune System Health',
      'Other',
    ],
    type: 'checkbox',
    name: 'healthGoals',
    image: 'Which health goal is most important to you_.png',
  },
  {
    question:
      'What is your height? We use your height to compare it with thousands of people who participated in Eumaximo clinical studies.? ',
    options: ['cm'],
    type: 'input',
    name: 'height',
    image: 'What is your height_.png',
  },
  {
    question:
      'What is your weight? We ask this question, regardless of your interest in weight loss, to provide more accurate calculations for your heart health.',
    options: ['kg'],
    type: 'input',
    name: 'weight',
    image: 'What is your weight_.png',
  },
  {
    question: 'Do you have a weight goal? We ask this question to understand what motivates you.',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'haveWeightGoal',
    image: 'Do you have a weight goal_.png',
  },
  {
    question:
      'What weight would you like to reach? Although calorie restriction may lead to rapid weight loss initially, studies show that those who are more successful in maintaining weight loss are those who lose it gradually and steadily (about 450-900g per week).',
    options: ['kg'],
    type: 'input',
    name: 'weightGoal',
    image: 'What is your desired weight goal_.png',
  },
  {
    question:
      'What sex were you assigned at birth? We ask this question because our research shows that women and men metabolize food very differently.',
    options: ['Male', 'Female'],
    type: 'radio',
    name: 'sex',
    image: 'What sex were you assigned at birth_.png',
  },
  {
    question:
      'With which gender do you identify? Some people do not identify with the sex assigned at birth. Therefore, we ask about your gender to address you correctly.',
    options: ['Male', 'Female', 'Other', 'Prefer not to say'],
    type: 'radio',
    name: 'genderIdentify',
    image: 'With which gender do you identify_.png',
  },
  {
    question:
      'Are you pregnant? We ask this question because currently, ZOE cannot support pregnant individuals. We hope to conduct future scientific studies to understand nutrition during pregnancy.',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'isPregnant',
    gender: 'female',
    image: 'Are you pregnant_.png',
  },
  {
    question:
      'What is your age group? If you feel that your body responds to food differently than when you were younger, you are correct!',
    options: ['Less than 20 years', '20s', '30s', '40s', '50s', '60s', '70s', '80 years or more'],
    type: 'radio',
    name: 'age',
    image: 'What is your age group_.png',
  },
  {
    question:
      'Antibiotics Frequent use of antibiotics can affect the bacteria in your gut. Have you taken antibiotic medications more than once in the last three years (not on the skin)?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'usedAntibiotic',
    image:
      'Have you taken antibiotic medications more than once in the last three years (not on the skin)_.png',
  },
  {
    question: `Your Energy Our research shows that poor blood sugar control often affects women in their 60s. How often do you experience energy crashes during the day?`,
    options: [
      'Rarely or never. I almost always have energy.',
      'Sometimes, I am tired and need an energy boost.',
      'Frequently, I am tired and low on energy.',
    ],
    type: 'radio',
    name: 'energy',
    image: 'How often do you experience energy crashes during the day_.png',
  },
  {
    question:
      'Your Exercise Exercise alters the metabolism of women in their 60s. How often do you engage in 20 minutes or more of exercise that raises your heart rate?',
    options: ['ReLess than once a weekd', '1-4 times a week', '5 or more times a week'],
    type: 'radio',
    name: 'exercise',
    gender: 'female',
    image:
      'How often do you engage in 20 minutes or more of exercise that raises your heart rate_.png',
  },
  {
    question:
      'Have you gone through menopause (choose only one)? Our researchers have found significant changes in how we metabolize food during and after menopause.',
    options: [
      'Pre-menopause (have not started menopause yet)',
      'Peri-menopause (going through menopause)',
      'Post-menopause (meaning your menstrual periods have stopped for at least a year and have not resumed)',
      "Don't know",
      'Prefer not to say',
    ],
    type: 'radio',
    name: 'menopause',
    gender: 'female',
    image: 'Have you gone through menopause (choose only one)_.png',
  },
  {
    question: 'Health Conditions Do you have any of the following conditions?',
    options: [
      'Eating disorder (e.g., anorexia nervosa or bulimia nervosa)',
      'Intestinal disease (e.g., Crohns disease, ulcerative colitis, or celiac disease)',
      'Sensitive gut (e.g., irritable bowel syndrome)',
      'Major surgery in the last 2 months or a history of heart attack, stroke, or transient ischemic attack',
      'None of the above',
    ],
    type: 'checkbox',
    name: 'healthConditions',
    gender: 'female',
    image: 'Health Conditions Do you have any of the following conditions_.png',
  },
  {
    question: 'Diabetes Has a doctor ever told you that you have diabetes or pre-diabetes?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'diabetes',
    image: 'Diabetes Has a doctor ever told you that you have diabetes or pre-diabetes_.png',
  },
  {
    question: 'Do any of your parents or siblings have diabetes?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'parentsDiabetes',
    image: 'Do any of your parents or siblings have diabetes_.png',
  },
  {
    question:
      'Cardiovascular Health Have you ever been diagnosed with cardiovascular disease (e.g., heart attack, heart disease, or stroke) or high cholesterol levels?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'haveDisease',
    image:
      'Cardiovascular Health Have you ever been diagnosed with cardiovascular disease (e.g., heart attack, heart disease, or stroke) or high cholesterol levels_.png',
  },
  {
    question: 'Do any of your parents or siblings have cardiovascular disease?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'parentsDisease',
    image: 'Do any of your parents or siblings have cardiovascular disease_.png',
  },
  {
    question: 'Blood Pressure Has a doctor ever told you that you have high blood pressure?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'haveBloodPressure',
    image: 'Blood Pressure Has a doctor ever told you that you have high blood pressure_.png',
  },
  {
    question: 'Do you take prescribed medications to treat high blood pressure?',
    options: ['Yes', 'No'],
    type: 'radio',
    name: 'medicationsTreatPressure',
    image: 'Do you take prescribed medications to treat high blood pressure_.png',
  },
  {
    question: 'How long have you known about Eumaximo?',
    options: ['Less than 1 month', '1-2 months', '3-6 months', '7-12 months', 'More than 1 year'],
    type: 'radio',
    name: 'eumaximo',
    image: 'How long have you known about Eumaximo_.png',
  },
]

export const getGenderSpecificQuestions = (gender) => {
  const genderSpecificQuestions = QUESTION_DATA.filter((question) => {
    if (question?.name && question.name.includes(gender)) {
      return true
    }
    return false
  })

  return genderSpecificQuestions
}
export const defaultValuesQuestion = {
  fruits: '',
  healthGoal: '',
  height: '',
  weight: '',
  haveWeightGoal: '',
  weightGoal: '',
  sex: '',
  genderIdentify: '',
  isPregnant: '',
  age: '',
  usedAntibiotic: '',
  energy: '',
  exercise: '',
  menopause: '',
  healthConditions: [],
  diabetes: '',
  parentsDiabetes: '',
  haveDisease: '',
  parentsDisease: '',
  haveBloodPressure: '',
  medicationsTreatPressure: '',
  eumaximo: '',
}

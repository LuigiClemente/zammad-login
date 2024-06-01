/* eslint-disable prettier/prettier */
type login = {
  email: string
  password: string
  confirmPassword?: 'password'
}

type LoginUser = Omit<login, 'login'>

type register = {
  password: string
  confirmPassword: string
  name: string
  email: string
  image: string
  dropdown: string
}

type RegisterUser = Omit<register, 'register'>

// type registerQuestion = {
//   fruits: string
//   healthGoal: string
//   height: string
//   weight: string
//   haveWeightGoal: string
//   weightGoal: string
//   sex: string
//   genderIdentify: string
//   isPregnant: string
//   age: string
//   usedAntibiotic: string
//   energy: string
//   exercise: string
//   menopause: string
//   healthConditions: string[]
//   diabetes: string
//   parentsDiabetes: string
//   haveDisease: string
//   parentsDisease: string
//   haveBloodPressure: string
//   medicationsTreatPressure: string
//   eumaximo: string
// }

type registerQuestion = {
  fruits: string
  healthGoal: string
  healthGoals: string[]
  height: string
  weight: string
  haveWeightGoal: string
  weightGoal: string
  sex: string
  genderIdentify: string
  isPregnant: string
  age: string
  usedAntibiotic: string
  energy: string
  exercise: string
  menopause: string
  healthConditions: string[]
  diabetes: string
  parentsDiabetes: string
  haveDisease: string
  parentsDisease: string
  haveBloodPressure: string
  medicationsTreatPressure: string
  eumaximo: string
}
type RegisterQuestion = Omit<registerQuestion, 'registerQuestion'>

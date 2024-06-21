import { useTranslations } from "next-intl";

export function useQuestions() {
    const t = useTranslations('Questions');

    const QUESTION_DATA = [
        {
            question: t('daily_plants_consumption'),
            options: [t('plants_option_1'), t('plants_option_2'), t('plants_option_3')],
            type: 'radio',
            name: 'fruits',
            image: 'How many plants do you consume_.png',
        },
        {
            question: t('health_goal_question'),
            options: [
                t('health_goal_1'),
                t('health_goal_2'),
                t('health_goal_3'),
                t('health_goal_4'),
                t('health_goal_5'),
                t('health_goal_6'),
                t('health_goal_7'),
                t('health_goal_8'),
            ],
            type: 'radio',
            name: 'healthGoal',
            image: 'Which health goal is most important to you_.png',
        },
        {
            question: t('height_question'),
            options: ['cm'],
            type: 'input',
            name: 'height',
            image: 'What is your height_.png',
        },
        {
            question: t('weight_question'),
            options: ['kg'],
            type: 'input',
            name: 'weight',
            image: 'What is your weight_.png',
        },
        {
            question: t('weight_goal_question'),
            options: [t('weight_goal_option_yes'), t('weight_goal_option_no')],
            type: 'radio',
            name: 'haveWeightGoal',
            image: 'Do you have a weight goal_.png',
        },
        {
            question: t('desired_weight_question'),
            options: ['kg'],
            type: 'input',
            name: 'weightGoal',
            image: 'What is your desired weight goal_.png',
        },
        {
            question: t('birth_sex_question'),
            options: [t('birth_sex_male'), t('birth_sex_female')],
            type: 'radio',
            name: 'sex',
            image: 'What sex were you assigned at birth_.png',
        },
        {
            question: t('gender_identity_question'),
            options: [t('gender_identity_male'), t('gender_identity_female'), t('gender_identity_other'), t('gender_identity_prefer_not_to_say')],
            type: 'radio',
            name: 'genderIdentify',
            image: 'With which gender do you identify_.png',
        },
        {
            question: t('pregnancy_question'),
            options: [t('pregnancy_option_yes'), t('pregnancy_option_no')],
            type: 'radio',
            name: 'isPregnant',
            gender: 'female',
            image: 'Are you pregnant_.png',
        },
        {
            question: t('age_group_question'),
            
            type: 'date',
            name: 'age',
            image: 'What is your age group_.png',
        },
        {
            question: t('antibiotics_usage_question'),
            options: [t('antibiotics_option_yes'), t('antibiotics_option_no')],
            type: 'radio',
            name: 'usedAntibiotic',
            image: 'Have you taken antibiotic medications more than once in the last three years (not on the skin)_.png',
        },
        {
            question: t('energy_crash_question'),
            options: [
                t('energy_crash_rarely'),
                t('energy_crash_sometimes'),
                t('energy_crash_frequently'),
            ],
            type: 'radio',
            name: 'energy',
            image: 'How often do you experience energy crashes during the day_.png',
        },
        {
            question: t('exercise_question'),
            options: [t('exercise_frequency_less_than_once'), t('exercise_frequency_1_to_4_times'), t('exercise_frequency_5_or_more_times')],
            type: 'radio',
            name: 'exercise',
            gender: 'female',
            image: 'How often do you engage in 20 minutes or more of exercise that raises your heart rate_.png',
        },
        {
            question: t('menopause_status_question'),
            options: [
                t('menopause_status_pre'),
                t('menopause_status_peri'),
                t('menopause_status_post'),
                t('menopause_status_dont_know'),
                t('menopause_status_prefer_not_to_say'),
            ],
            type: 'radio',
            name: 'menopause',
            gender: 'female',
            image: 'Have you gone through menopause (choose only one)_.png',
        },
        {
            question: t('health_condition_question'),
            options: [
                t('health_condition_eating_disorder'),
                t('health_condition_intestinal_disease'),
                t('health_condition_sensitive_gut'),
                t('health_condition_major_surgery'),
                t('health_condition_none_above'),
            ],
            type: 'checkbox',
            name: 'healthConditions',
            gender: 'female',
            image: 'Health Conditions Do you have any of the following conditions_.png',
        },
        {
            question: t('diabetes_status_question'),
            options: [t('diabetes_status_yes'), t('diabetes_status_no')],
            type: 'radio',
            name: 'diabetes',
            image: 'Diabetes Has a doctor ever told you that you have diabetes or pre-diabetes_.png',
        },
        {
            question: t('diabetes_family_history_question'),
            options: [t('family_diabetes_yes'), t('family_diabetes_no')],
            type: 'radio',
            name: 'parentsDiabetes',
            image: 'Do any of your parents or siblings have diabetes_.png',
          },
        {
            question: t('cvd_diagnosis_question'),
            options: [t('cvd_diagnosis_yes'), t('cvd_diagnosis_no')],
            type: 'radio',
            name: 'haveDisease',
            image: 'Cardiovascular Health Have you ever been diagnosed with cardiovascular disease (e.g., heart attack, heart disease, or stroke) or high cholesterol levels_.png',
        },
        {

            question: t('family_cvd_question'),
        
            options: [t('family_cvd_yes'), t('family_cvd_no')],
        
            type: 'radio',
        
            name: 'parentsDisease',
        
            image: 'Do any of your parents or siblings have cardiovascular disease_.png',
        
          },
        {
            question: t('hypertension_status_question'),
            options: [t('hypertension_status_yes'), t('hypertension_status_no')],
            type: 'radio',
            name: 'haveBloodPressure',
            image: 'Blood Pressure Has a doctor ever told you that you have high blood pressure_.png',
        },
        {
            question: t('hypertension_medication_question'),
            options: [t('hypertension_medication_yes'), t('hypertension_medication_no')],
            type: 'radio',
            name: 'medicationsTreatPressure',
            image: 'Do you take prescribed medications to treat high blood pressure_.png',
        },
        {
            question: t('knowledge_of_gutricious_question'),
            options: [t('knowledge_of_gutricious_less_than_1_month'), t('knowledge_of_gutricious_1_to_2_months'),  t('knowledge_of_gutricious_3_to_6_months'),  t('knowledge_of_gutricious_7_to_12_months'),  t('knowledge_of_gutricious_more_than_1_year')],
            type: 'radio',
            name: 'eumaximo',
            image: 'How long have you known about Eumaximo_.png',
        },
    ];

    return QUESTION_DATA;
}

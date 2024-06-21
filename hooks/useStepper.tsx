import { useTranslations } from "next-intl";

export function useStepper() {
    const t = useTranslations('Steps');

    const stepperData = [
        {
          step: t('step_1'),
          title: t('receive_your_kit'),
          description: t('step_1_description'),
          imgSrc: '/static/images/google.png', // Assuming each step has a relevant image; replace or remove if not necessary.
        },
        {
          step: t('step_2'),
          title: t('complete_the_questionnaire'),
          description: t('step_2_description'),
          imgSrc: '/static/images/time-machine.jpg',
        },
        {
          step: t('step_3'),
          title: t('collect_your_samples'),
          description: t('step_3_description'),
          imgSrc: '/static/images/time-machine.jpg',
        },
        {
          step: t('step_4'),
          title: t('send_your_samples_to_the_lab'),
          description: t('step_4_description'),
          imgSrc: '/static/images/time-machine.jpg',
        },
        {
          step: t('step_5'),
          title: t('lab_analysis_and_assessment'),
          description: t('step_5_description'),
          imgSrc: '/static/images/time-machine.jpg',
        },
    ]

    return stepperData;
}

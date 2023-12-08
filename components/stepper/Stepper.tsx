'use client'
import stepperData from '@/data/stepperData '
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepFive } from './StepFive'
import SplashHeader from '../SplashHeader'
import { useAppProvider } from 'provider/AppProvider'

const Stepper = ({ checkerRoute }) => {
  const router = useRouter()
  const appProviderContext = useAppProvider()

  if (!appProviderContext) {
    return <div>Loading...</div>
  }

  const { currentStep } = appProviderContext
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    if (currentStep === 5) {
      // If the current step is 5, navigate to another page using Next.js router
      router.push('/') // Replace '/your-target-page' with the actual target page path
      checkerRoute()
    }
  }, [currentStep])

  const greens = [] as number[]
  const oranges = [] as number[]
  const grays = [] as number[]
  for (let i = 1; i <= currentStep; ++i) {
    greens.push(i)
  }
  for (let i = currentStep + 2; i <= 5; ++i) {
    grays.push(i)
  }
  oranges.push(currentStep + 1)

  return (
    <section className="mx-auto max-w-5xl">
      <style>
        {`
      .step-border {
      
        transition: border-color 2s;
      }

      .color {
        color: gray;
      }
      ${greens
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: green;
      }
      .color${i} {
        color: green;
      }
      `
        )
        .join('')}
      ${oranges
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: orange;
      }
      .color${i} {
        color: orange;
      }
      `
        )
        .join('')}
      ${grays
        .map(
          (i) => `
      .step-border.step${i} {
        --tw-text-opacity: 1;
        border-color: gray;
      }
      .color${i} {
        --tw-text-opacity: 1;
        color: gray;
      }
      `
        )
        .join('')}
    `}
      </style>
      <div>
        <SplashHeader checkerRoutes={checkerRoute} />
        <StepOne stepRefs={stepRefs} checkerRoute={checkerRoute} stepperData={stepperData} />
        <StepTwo
          stepRefs={stepRefs}
          router={router}
          checkerRoute={checkerRoute}
          stepperData={stepperData}
        />
        <StepThree
          stepRefs={stepRefs}
          router={router}
          checkerRoute={checkerRoute}
          stepperData={stepperData}
        />
        <StepFour
          stepRefs={stepRefs}
          router={router}
          checkerRoute={checkerRoute}
          stepperData={stepperData}
        />
        <StepFive
          stepRefs={stepRefs}
          router={router}
          checkerRoute={checkerRoute}
          stepperData={stepperData}
        />
      </div>
      <Footer />
    </section>
  )
}

export default Stepper

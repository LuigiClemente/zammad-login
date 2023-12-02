/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'
import React, { useEffect, useState, useRef } from 'react'
import Folder from '@/data/folder.svg'
import Medicine from '@/data/medicine.svg'
import Ambulance from '@/data/ambulance.svg'
import Clinic from '@/data/clinic.svg'
import Beaker from '@/data/beaker.svg'
import stepperData from '@/data/stepperData '
import SplashHeader from './SplashHeader'
import { useRouter } from 'next/navigation'
import Footer from './Footer'
const Stepper = ({ checkerRoute }) => {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  // Use useEffect to hide the loading spinner after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false)
  //   }, 15000)

  //   return () => clearTimeout(timer)
  // }, [])

  const [currentStep, setCurrentStep] = useState(1)
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  // useEffect(() => {
  //   const animationInterval = setInterval(() => {
  //     setCurrentStep((prevStep) => (prevStep % 5) + 1)
  //     if (stepRefs && stepRefs[currentStep - 1]) {
  //       const ref = stepRefs[currentStep - 1]
  //       if (ref.current) {
  //         ref.current.scrollIntoView({ behavior: 'smooth' })
  //       }
  //     } else {
  //       console.log('no error found')
  //     }
  //   }, 3000)

  //   return () => {
  //     clearInterval(animationInterval)
  //   }
  // }, [currentStep])
  return (
    <section className="mx-auto max-w-5xl py-10">
      <style>
        {`
          step-border:{ 
            border: 4px solid red;
            transition: border-color 2s;
          }

          .step1-border {
            border-color: ${currentStep === 1 ? 'green' : 'red'};
          }
          .color1{
            color: ${currentStep === 1 ? 'green' : 'red'};
          }

          .step2-border {
            border-color: ${currentStep === 2 ? 'green' : 'red'};
          }
          .color2{
            color: ${currentStep === 2 ? 'green' : 'red'};
          }

          .step3-border {
            border-color: ${currentStep === 3 ? 'green' : 'red'};
          }
          .color3{
            color: ${currentStep === 3 ? 'green' : 'red'};
          }

          .step4-border {
            border-color: ${currentStep === 4 ? 'green' : 'red'};
          }
          .color4{
            color: ${currentStep === 4 ? 'green' : 'red'};
          }

          .step5-border {
            border-color: ${currentStep === 5 ? 'green' : 'red'};
          }
          .color5{
            color: ${currentStep === 5 ? 'green' : 'red'};
          }
        `}
      </style>
      {/* {isVisible && ( */}
      <div>
        <SplashHeader checkerRoutes={checkerRoute} />
        <div className=" flex flex-row">
          <div
            className="border-animation hidden flex-col items-center md:flex"
            style={{ animationDelay: '0s' }}
          >
            <div
              className="step-border step1-border mr-4 flex w-32 flex-col items-center justify-center rounded border py-5 uppercase"
              ref={stepRefs[0]}
              onClick={() => {
                router.push('/')
                checkerRoute()
              }}
            >
              <div className="color1 text-3xl font-black">{`${stepperData[0].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[0].title}`}</div>
            </div>
            <div className="step1-border mr-4 h-full border-l-4 border-dashed "></div>
          </div>
          <div className="flex-auto rounded border border-gray-300">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden">
                  <span className="font-black dark:text-white">{`${stepperData[0].step}`}</span> -{' '}
                  {`${stepperData[0].title}`}
                </div>
                <div className="font flex w-fit flex-row items-center p-3 text-3xl text-gray-500 dark:text-white">
                  <Folder />
                  {`${stepperData[0].title}`}
                </div>
                <div className="px-3 pb-6 text-gray-500 dark:text-gray-200">
                  {`${stepperData[0].description}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6-step1 flex flex-row items-start">
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="step1-border border-l-dashed ml-16-step1 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="step1-border h-16 border-b-4 border-dashed "></div>
          </div>
          <div className="step1-border w-step-right mr-16 mt-16 h-16 rounded-tr-full border-r-4 border-t-4 border-dashed"></div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="step-border step2-border ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              ref={stepRefs[1]}
              onClick={() => {
                router.push('/tags')
                checkerRoute()
              }}
            >
              <div className="color2 text-3xl font-black">{`${stepperData[1].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[1].title}`}</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="step2-border ml-4 h-full border-l-4 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded border border-gray-300">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden">
                  <span className="font-black dark:text-white">{`${stepperData[1].step}`}</span> -{' '}
                  {`${stepperData[1].title}`}
                </div>
                <div className="font flex  w-fit flex-row items-center p-3 text-3xl">
                  <Medicine />
                  <span className="font ml-2 text-3xl text-gray-500 dark:text-white">{`${stepperData[1].title}`}</span>
                </div>
                <div className="px-3 pb-6 text-gray-500 dark:text-gray-200">
                  {`${stepperData[1].description}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start">
          <div className="border-l-4 border-t-4 border-transparent">
            <div className="step2-border w-step-left ml-16 mt-16 h-16 rounded-tl-full border-l-4 border-t-4 border-dashed "></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="step2-border mt-1 h-16 border-b-4 border-dashed"></div>
          </div>
          <div className="step2-border w-16-step mr-16 mt-2 h-16 rounded-br-full border-b-4 border-r-4 border-dashed"></div>
        </div>

        <div className="flex flex-row">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="step-border step3-border mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              ref={stepRefs[2]}
              onClick={() => {
                router.push('/cube')
              }}
            >
              <div className="color3 text-3xl font-black ">{`${stepperData[2].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[2].title}`}</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="step3-border mr-4 h-full border-l-4 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded border border-gray-300">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden">
                  <span className="font-black dark:text-white">{`${stepperData[2].step}`}</span> -{' '}
                  {`${stepperData[2].title}`}
                </div>
                <div className="font flex  w-fit flex-row items-center p-3 text-3xl text-gray-500 dark:text-white">
                  <Ambulance />
                  <span className="font ml-2 text-3xl text-gray-500 dark:text-white">{`${stepperData[2].title}`}</span>
                </div>
                <div className="px-3 pb-6 text-gray-500 dark:text-gray-200">
                  {`${stepperData[2].description}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6-step1 flex flex-row items-start">
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="step3-border ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="step3-border h-16 border-b-4 border-dashed "></div>
          </div>
          <div className="step3-border w-step-right mr-16 mt-16 h-16 rounded-tr-full border-r-4 border-t-4 border-dashed"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="step-border step4-border ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              ref={stepRefs[3]}
            >
              <div className="color4 text-3xl font-black ">{`${stepperData[3].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[3].title}`}</div>
            </div>
            <div className="step4-border ml-4 h-full border-l-4 border-dashed"></div>
          </div>

          <div className="flex-auto rounded border border-gray-300">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden">
                  <span className="font-black dark:text-white">{`${stepperData[3].step}`}</span> -{' '}
                  {`${stepperData[3].title}`}
                </div>
                <div className="font text-3x flex  w-fit flex-row items-center p-3">
                  <Clinic />
                  <span className="font ml-2 text-3xl text-gray-500 dark:text-white">{`${stepperData[3].title}`}</span>
                </div>
                <div className="px-3 pb-6 text-gray-500 dark:text-gray-200">
                  {`${stepperData[3].description}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start">
          <div className="border-l-4 border-t-4 border-transparent">
            <div className="step4-border w-step-left ml-16 mt-16 h-16 rounded-tl-full border-l-4 border-t-4 border-dashed "></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="step4-border mt-1 h-16 border-b-4 border-dashed "></div>
          </div>
          <div className="step4-border w-step-right mr-16 mt-2 h-16 rounded-br-full border-b-4 border-r-4 border-dashed"></div>
        </div>
        <div className="flex flex-row">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="step-border step5-border mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              ref={stepRefs[4]}
            >
              <div className="color5 text-3xl font-black ">{`${stepperData[4].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[4].title}`}</div>
            </div>
          </div>

          <div className="flex-auto rounded border border-gray-300">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden">
                  <span className="font-black dark:text-white">{`${stepperData[4].step}`}</span> -{' '}
                  {`${stepperData[4].title}`}
                </div>
                <div className="font flex w-fit  flex-row items-center p-3 text-3xl text-gray-500 dark:text-white">
                  <Beaker />
                  {`${stepperData[4].title}`}
                </div>
                <div className="px-3 pb-6 text-gray-500 dark:text-gray-200">
                  {`${stepperData[4].description}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* )} */}
    </section>
  )
}

export default Stepper

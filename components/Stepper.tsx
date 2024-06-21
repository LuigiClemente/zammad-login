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
import { routes } from '@/lib/routes'
import { useLocale } from 'next-intl'
const Stepper = ({ checkerRoute }) => {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  const locale = useLocale();
  return (
    <section className="mx-auto max-w-5xl py-10">
      <div>
        <SplashHeader checkerRoutes={checkerRoute} />
        <div className="flex flex-row">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="mr-4 flex w-32 flex-col items-center justify-center rounded border border-green-500 py-5 uppercase"
              onClick={() => {
                router.push(routes[locale]['resources'])
                checkerRoute()
              }}
            >
              <div className="color1 text-3xl font-black">{`${stepperData[0].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[0].title}`}</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="animate-color-change mr-4 h-full border-l-4 border-solid border-green-500"></div>
            </div>
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
        <div className="flex flex-row items-start">
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid border-orange-500"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="animate-color-change h-16 border-b-4 border-solid border-gray-300"></div>
          </div>
          <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid border-gray-300"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="ml-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase"
              onClick={() => {
                router.push('/tags')
                checkerRoute()
              }}
            >
              <div className="color2 text-3xl font-black">{`${stepperData[1].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[1].title}`}</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="animate-color-change ml-4 h-full border-l-4 border-solid border-gray-300"></div>
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
        <div className="flex flex-row-reverse items-start">
          <div className="border-l-4 border-t-4 border-transparent">
            <div className="mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-solid border-gray-300"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="animate-color-change h-16 border-b-4 border-solid border-gray-300"></div>
          </div>
          <div className="ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-solid border-gray-300"></div>
        </div>
        <div className="flex flex-row">
          <div className="hidden flex-col items-center md:flex">
            <div
              className="mr-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase"
              onClick={() => {
                router.push('/plan')
              }}
            >
              <div className="color3 text-3xl font-black ">{`${stepperData[2].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[2].title}`}</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="animate-color-change mr-4 h-full border-l-4 border-solid border-gray-300"></div>
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
        <div className="flex flex-row items-start">
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid border-gray-300"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="animate-color-change h-16 border-b-4 border-solid border-gray-300"></div>
          </div>
          <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid border-gray-300"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden flex-col items-center md:flex">
            <div className="ml-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase">
              <div className="color4 text-3xl font-black ">{`${stepperData[3].step}`}</div>
              <div className="text-sm text-gray-500 dark:text-white">{`${stepperData[3].title}`}</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="animate-color-change ml-4 h-full border-l-4 border-solid border-gray-300"></div>
            </div>
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

        <div className="flex flex-row-reverse items-start">
          <div className="border-l-4 border-t-4 border-transparent">
            <div className="mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-solid border-gray-300"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="animate-color-change h-16 border-b-4 border-solid border-gray-300"></div>
          </div>
          <div className="ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-solid border-gray-300"></div>
        </div>
        <div className="flex flex-row">
          <div className="hidden flex-col items-center md:flex">
            <div className="mr-4 flex w-32 flex-col items-center justify-center rounded  border border-gray-300 py-5 uppercase">
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
    </section>
  )
}

export default Stepper

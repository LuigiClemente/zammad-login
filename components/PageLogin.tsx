'use client'
import Spinner from '@/components/Spinner'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
// import { useRouter } from 'next/router'
import siteInfo from '@/data/siteInfo'
import { useRouter } from 'next/navigation'

import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from 'usehooks-ts'
import { LOGIN_SCHEMA } from '../app/yup/Validation'
import Input from './Input'
import DescComponent from './DescComponent'
import { useEffect, useState } from 'react'

const PageLogin = ({ loginCheck, forgetPassHandler }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting, isSubmitSuccessful, isValid, isDirty },
  } = useForm<LoginUser>({
    resolver: yupResolver(LOGIN_SCHEMA),
  })

  const [loading, toggleLoading] = useToggle()

  const onSubmit: SubmitHandler<LoginUser> = async (values) => {
    console.log('form value is value', values)
    loginCheck(values.email, values.password)
  }

  useEffect(() => {})

  // const onSubmit = ({ data }) => {
  //   console.log('Data is >>', data)
  // }
  return (
    <section className="pt-10">
      <Spinner />
      <div className="mt-30 container h-full pt-20">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-darkGreen shadow-lg dark:bg-blackDark">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="mb-10 flex w-full flex-wrap items-center justify-center">
                      <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                          <div className="flex items-center justify-between text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
                            {typeof siteMetadata.headerTitle === 'string' ? (
                              <div className="hidden h-6 w-full text-xl font-bold leading-tight tracking-tight text-titleColorLM dark:text-neutral-100 sm:block md:text-3xl">
                                {siteMetadata.headerTitle}
                              </div>
                            ) : (
                              <div className="hidden h-6 w-full text-3xl font-bold leading-tight tracking-tight text-titleColorLM dark:text-neutral-100 sm:block md:text-3xl">
                                {siteMetadata.headerTitle}
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4 text-subTitleLM dark:text-neutral-200">{`${siteInfo.loginTitle}`}</p>
                      {/* <!--Username input--> */}
                      <Input
                        type={'text'}
                        label={'Email'}
                        name={'email'}
                        register={register}
                        error={errors.email}
                        css="w-full"
                      />

                      {/* <!--Password input--> */}
                      <Input
                        type={'password'}
                        label={'Password'}
                        name={'password'}
                        register={register}
                        error={errors.password}
                        css="w-full"
                      />

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-txtWhite "
                            style={{
                              background:
                                'linear-gradient(to right, #235475, #56a4d9, #3e95d0, #1495ea)',
                            }}
                            type="submit"
                          >
                            Log in
                          </button>
                          <UserButton afterSignOutUrl="/" />
                        </div>

                        {/* <!--Forgot password link--> */}
                        <Link
                          className="text-subTitleLM dark:text-neutral-200"
                          href="#!"
                          onClick={forgetPassHandler}
                        >
                          Forgot password?
                        </Link>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 text-txt dark:text-neutral-200">{`${siteInfo.notAccount}`}</p>
                        <div>
                          <button
                            type="button"
                            className="border-danger text-danger hover:border-danger-600 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-txt transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                          <UserButton afterSignOutUrl="/" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <DescComponent title={siteInfo.title} description={siteInfo.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageLogin

'use client'
import Spinner from '@/components/Spinner'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

// import { useRouter } from 'next/router'
import siteInfo from '@/data/siteInfo'
import { useRouter } from 'next/navigation'

import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from 'usehooks-ts'
import { LOGIN_SCHEMA } from '../app/yup/Validation'
import Input from './Input'
import DescComponent from './DescComponent'

const ForgetPass = ({ loginCheck, forgetPassHandler }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginUser>({
    resolver: yupResolver(LOGIN_SCHEMA),
  })

  const [loading, toggleLoading] = useToggle()

  const onSubmit: SubmitHandler<LoginUser> = async (values) => {
    console.log('form value is value', values)
    // try {
    //   toggleLoading()
    //   await new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //       console.log('Hi')
    //       resolve() // Resolve the promise after the delay
    //     }, 4000)
    //   })
    // } catch (error) {
    //   toggleLoading()
    // }
    loginCheck()
  }

  // const onSubmit = ({ data }) => {
  //   console.log('Data is >>', data)
  // }
  return (
    <section>
      <Spinner />
      <div className="container mt-20 h-full pt-20">
        <div className="g-6 mt-10 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-darkGreen shadow-lg dark:bg-blackDark">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div
                  className="flex items-center rounded-b-lg bg-designColor lg:w-6/12 lg:rounded-l-lg lg:rounded-br-none"
                  // style={{ backgroundImage: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%);' }}
                  style={{
                    background: 'linear-gradient(to right, #235475, #56a4d9, #3e95d0, #1495ea)',
                  }}
                >
                  <div className=" px-4 py-6  md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold text-txtWhite ">{`${siteInfo?.title}`}</h4>
                    <p className="text-sm leading-7  text-txtlightGrey">{`${siteInfo?.description}`}</p>
                  </div>
                </div>
                {/* <!-- Right column container with background and description--> */}

                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="flex w-full flex-wrap items-center justify-center md:mx-6 md:p-12">
                      <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                          <div className="flex items-center justify-between">
                            {typeof siteMetadata.headerTitle === 'string' ? (
                              <div className="hidden h-6 text-2xl font-semibold text-titleColorLM dark:text-neutral-100">
                                {siteMetadata.headerTitle}
                              </div>
                            ) : (
                              siteMetadata.headerTitle
                            )}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4 text-xl font-bold leading-tight tracking-tight text-titleColorLM dark:text-neutral-100 md:text-2xl">{`${siteInfo.forgetPass}`}</p>
                      <p className="mb-4 text-txt dark:text-neutral-300">{`${siteInfo.forgetPassDesc}`}</p>
                      {/* <!--Username input--> */}
                      <Input
                        type={'text'}
                        label={'Email'}
                        name={'email'}
                        register={register}
                        error={errors.email}
                        css={'w-full'}
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
                            onClick={loginCheck}
                          >
                            Rest Password
                          </button>
                        </div>
                        <div className=" border-b-1 mb-4 mt-4 flex flex-col border-gray-400">
                          <Link className="mt-4 text-txt dark:text-neutral-300" href="#!">
                            Create an Account!
                          </Link>
                          <Link
                            className="mt-4 text-txt dark:text-neutral-300"
                            href="#!"
                            onClick={forgetPassHandler}
                          >
                            Already have an account? Login!
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ForgetPass

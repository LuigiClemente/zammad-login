'use client'
// import { useRouter } from 'next/router'

import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LOGIN_SCHEMA } from '../app/yup/Validation'
import Input from './Input'
const ResetForm = ({ loginCheck }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginUser>({
    resolver: yupResolver(LOGIN_SCHEMA),
  })
  const onSubmit: SubmitHandler<LoginUser> = async (values) => {
    console.log('form value is value', values)

    loginCheck()
  }
  return (
    <div className="container mt-20 h-full pt-20">
      <div className="g-6 mt-10 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="lg:w-6/12">
          <div className="block rounded-lg bg-darkGreen p-10 shadow-lg dark:bg-blackDark">
            <h2 className="mb-1 w-full text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 md:space-y-5 lg:mt-5" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type={'text'}
                label={'Email'}
                name={'email'}
                register={register}
                error={errors.email}
                css={'w-full'}
              />
              {/* <!--Password input--> */}
              <Input
                type={'password'}
                label={'Password'}
                name={'password'}
                register={register}
                error={errors.password}
                css={'w-full'}
              />
              {/* <!--Password input--> */}
              <Input
                type={'password'}
                label={'Re-Password'}
                name={'repassword'}
                register={register}
                error={errors.password}
                css={'w-full'}
              />
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="/#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-txtWhite "
                style={{
                  background: 'linear-gradient(to right, #235475, #56a4d9, #3e95d0, #1495ea)',
                }}
                type="submit"
                onClick={() => loginCheck()}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetForm

// PageLogin.js

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ReactNode, useState } from 'react'
import { Navigation } from './Navigation'
import { useTranslations } from 'next-intl'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
})

const ForgetPass = ({ loginCheck, forgetPassHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data) => {
    // Handle your login logic here
    console.log('Form submitted:', data)
    // loginCheck(data.email , data.password);
  }
  const [langBtnState, setLangBtnState] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false)
  const t = useTranslations('Index')

  const [langOpen, setLangOpen] = useState<boolean>(false)
  return (
    <section>
      <div className="custom-container">
        <Navigation
          navOpen={navOpen}
          langOpen={langOpen}
          setLangOpen={setLangOpen}
          setNavOpen={setNavOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isLangBtnHovered={isLangBtnHovered}
          setIsLangBtnHovered={setIsLangBtnHovered}
        />
      </div>
      <div className="cera-pro-font mx-auto mt-[50px] flex flex-col items-center justify-center px-6 py-8 lg:py-0 ">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              {t('forgetPasswordPage.title')}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-light text-gray-900 dark:text-white"
                >
                  {t('welcomeOrWelcomeBackPage.yourEmail')}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-black focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-black dark:focus:ring-black sm:text-sm"
                  placeholder={t('welcomeOrWelcomeBackPage.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message as ReactNode}</p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full bg-[#2ae8d3] ">
                {t('forgetPasswordPage.sendResetEmail')}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <a
                  onClick={forgetPassHandler}
                  href="#"
                  className="font-medium text-black hover:underline dark:text-black"
                >
                  {t('forgetPasswordPage.backToSignIn')}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgetPass

// PageLogin.js

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ReactNode, useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { useTranslations } from 'next-intl';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(4, 'Password must be at least 4 characters long'),
});

let codeRun = false;

const PageLogin = ({ loginCheck, forgetPassHandler }) => {
  const [langBtnState , setLangBtnState]=  useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen , setNavOpen] =  useState<boolean>(false);
  const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);


  const [langOpen , setLangOpen] =  useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [welcomeBack, setWelcomeBack] = useState(false);


  useEffect(() => {

    if(!codeRun){ 
codeRun = true ;
    console.log('Code run Code run')
    if (typeof window !== "undefined") {

      const isReturningUser = window.localStorage.getItem('hasVisitedBefore2');
      console.log({isReturningUser})
      setWelcomeBack(!!isReturningUser); // Cast the string to a boolean
      if (!isReturningUser) {
        window.localStorage.setItem('hasVisitedBefore2', 'true');
      }
    }
  }

  }, []);

const t =  useTranslations('Index');
  const onSubmit = (data) => {
    // Handle your login logic here
    console.log('Form submitted:', data);
    loginCheck(data.email , data.password);
  };

  return (
    <section>
      <div className='custom-container'>
      <Navigation navOpen={navOpen} langOpen={langOpen} setLangOpen={setLangOpen} setNavOpen={setNavOpen} isHovered={isHovered} setIsHovered={setIsHovered} isLangBtnHovered={isLangBtnHovered} setIsLangBtnHovered={setIsLangBtnHovered} />
        </div>
      <div className="flex flex-col items-center justify-center px-6 mt-[50px] mx-auto  lg:py-0 cera-pro-font ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {welcomeBack ? t('welcomeBack') : t('welcome')}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
                >
                  {t('welcomeOrWelcomeBackPage.yourEmail')}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black text-black placeholder:text-gray-500"
                  placeholder={t('welcomeOrWelcomeBackPage.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message as ReactNode}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
                >
                  {t('welcomeOrWelcomeBackPage.password')}
                </label>
                <input
                  {...register('password')}
                  type="password"
                  id="password"
                  placeholder={t('welcomeOrWelcomeBackPage.passwordPlaceholder')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black text-black placeholder:text-gray-500"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message as ReactNode}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div></div>
                <a
                  href="#"
                onClick={()=>{forgetPassHandler()}}
                className="text-gray-700 hover:underline text-sm font-medium"
                >
                    {t('forgotPassword')}
                </a>
              </div>

              <button
                type="submit"
                className="btn-primary bg-[#2ae8d3] w-full "
              >
                {t('welcomeOrWelcomeBackPage.signIn')}
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a
                  href="#"
                  className="font-medium text-black hover:underline dark:text-black"
                >
                  Sign up
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLogin;

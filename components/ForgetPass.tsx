// PageLogin.js

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ReactNode, useState } from 'react';
import { Navigation } from './Navigation';
import { useTranslations } from 'next-intl';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  
});

const ForgetPass = ({ loginCheck, forgetPassHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Handle your login logic here
    console.log('Form submitted:', data);
    // loginCheck(data.email , data.password);
  };
  const [langBtnState , setLangBtnState]=  useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen , setNavOpen] =  useState<boolean>(false);
  const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);
  const t =  useTranslations('Index');


  const [langOpen , setLangOpen] =  useState<boolean>(false);
  return (
    <section>
        <div className='custom-container'>
      <Navigation navOpen={navOpen} langOpen={langOpen} setLangOpen={setLangOpen} setNavOpen={setNavOpen} isHovered={isHovered} setIsHovered={setIsHovered} isLangBtnHovered={isLangBtnHovered} setIsLangBtnHovered={setIsLangBtnHovered} />
        </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-[50px] lg:py-0 cera-pro-font ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {t('forgetPasswordPage.title')}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                  placeholder= {t('welcomeOrWelcomeBackPage.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message as ReactNode}</p>
                )}
              </div>

            

         
              <button
                type="submit"
                className="btn-primary bg-[#2ae8d3] w-full "
              >
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
  );
};

export default ForgetPass;

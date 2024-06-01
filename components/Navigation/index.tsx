import './navigation.css'
import classNames from 'classnames'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import { CiGlobe } from 'react-icons/ci'
import { Popover } from 'react-tiny-popover'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { LocalActiveType, routes } from '@/lib/routes'
import { languages, locales } from '@/lib/languages'
import { IMAGE_URL } from '@/lib/image_url'
import { usePathname } from 'next/navigation'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const Navigation = ({
  navOpen,
  langOpen,
  setLangOpen,
  setNavOpen,
  isHovered,
  setIsHovered,
  isLangBtnHovered,
  setIsLangBtnHovered,
}: {
  navOpen: boolean
  langOpen: boolean
  setLangOpen: any
  setNavOpen: any
  isHovered: any
  setIsHovered: any
  setIsLangBtnHovered: any
  isLangBtnHovered: any
}) => {
  const [isPending, startTransition] = useTransition()
  const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({ locales })
  const localActive = useLocale()
  const [selectedLanguage, setSelectedLanguage] = useState<LocalActiveType>(localActive as any)

  const [langBtnState, setLangBtnState] = useState(false)

  const router = useRouter()
  const pathName = usePathname()
  const t = useTranslations('Index')
  const changeLanguage = (newLocale) => {
    const newPathName = pathName

    console.log({ newPathName })

    router.push(newPathName, { locale: newLocale })
  }

  return (
    <nav className={'mx-auto flex w-full items-center  justify-between pr-[10px] ' + 'dark'}>
      <div className="relative font-extrabold text-black">
        <Image
          loader={({ src }) => src}
          alt="logo"
          height={70}
          width={120}
          objectFit="contain"
          className=" h-[110px] w-[120px] object-contain 2xl:h-[100px] 2xl:w-[150px]"
          src={`${IMAGE_URL}/assets/day/logo.webp`}
        ></Image>
        <div
          className={`absolute top-0   z-20 h-full w-full cursor-pointer rounded-full`}
          onClick={() => {}}
        ></div>
      </div>

      <div className="mr-[10px] flex items-center gap-[25px]">
        <Popover
          isOpen={langOpen}
          positions={['left', 'top']}
          padding={10}
          onClickOutside={() => setLangOpen(false)}
          content={({ position, nudgedLeft, nudgedTop }) => (
            <div className="languages-box">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={`language ${selectedLanguage === lang.code ? 'selected' : ''}`}
                  onClick={() => changeLanguage(lang.code as LocalActiveType)}
                >
                  <span>{lang.label}</span>
                  <svg
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M20.54 7.225 9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
          )}
        >
          <div className={`lang-btn relative cursor-pointer ${isLangBtnHovered ? 'hovered' : ''}`}>
            <div
              className="inner-lang-btn absolute z-20 h-full w-full cursor-pointer"
              onMouseEnter={() => {
                setIsLangBtnHovered(true)
              }}
              onMouseLeave={() => setIsLangBtnHovered(false)}
              onClick={() => {
                if (!langBtnState) {
                  setLangBtnState(true)
                  setLangOpen(true)
                } else {
                  setLangBtnState(false)
                  setLangOpen(false)
                }
              }}
            ></div>

            <CiGlobe color={'#000000'} />
          </div>
        </Popover>
        <div className={`relative ${'dark'} hamburger-container ${navOpen ? 'navOpen' : ''}`}>
          <div
            className={`extra-nav absolute  z-20 h-full w-full rounded-full duration-[800ms]`}
            onMouseEnter={() => {
              setIsHovered(true)
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setNavOpen(!navOpen)}
          ></div>
          <button className={` menu__icon  ${isHovered || navOpen ? 'hovered-class' : ''}`}>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={classNames('navigation', 'dark')}>
          <input
            type="checkbox"
            className="navigation__checkbox"
            checked={navOpen}
            id="navi-toggle"
          />

          <div className={`navigation__background ${navOpen ? 'navOpen' : ''}`}>&nbsp;</div>

          <nav className="navigation__nav">
            <div className="custom-container flex min-h-[130px] items-center justify-between">
              <div></div>
              <div className={`relative ${'dark'} hamburger-container ${navOpen ? 'navOpen' : ''}`}>
                <div
                  className={`extra-nav absolute  z-20 h-20 w-20 rounded-full duration-[800ms]`}
                  onMouseEnter={() => {
                    setIsHovered(true)
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setNavOpen(!navOpen)}
                ></div>
                <button
                  className={` menu__icon mr-8  ${isHovered || navOpen ? 'hovered-class' : ''}`}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <ul className="navigation__list flex flex-col">
              <Link
                href={routes[selectedLanguage]['home']}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('Home')}</span>
              </Link>
              <Link
                href={routes[selectedLanguage]['about-us']}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('About_Us')}</span>
              </Link>
              <Link
                href={routes[selectedLanguage]['our-studies']}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('Our_Studies')}</span>
              </Link>
              <Link
                href={routes[selectedLanguage]['terms-of-use']}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('Terms_of_Service')}</span>
              </Link>
              <Link
                href={routes[selectedLanguage]['cookies'] as any}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('Cookies_Policy')}</span>
              </Link>
              <Link
                href={routes[selectedLanguage]['privacy']}
                className="navigation__item inline-block"
              >
                <span className="navigation__link">{t('Privacy_Policy')}</span>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

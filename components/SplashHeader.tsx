/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const SplashHeader = ({ checkerRoutes }) => {
  return (
    <header className="flex w-full items-center justify-between py-[2.5rem]">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div
            className="flex items-center justify-between"
            onClick={() => {
              checkerRoutes()
            }}
          >
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="dark:text-grey-900 hidden h-6 text-2xl font-semibold text-titleColorLM dark:text-neutral-100 sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default SplashHeader

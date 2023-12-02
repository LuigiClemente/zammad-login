'use client'
import Spinner from '@/components/Spinner'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
// import { useRouter } from 'next/router'
import siteInfo from '@/data/siteInfo'
import { useRouter } from 'next/navigation'
interface Props {
  children: ReactNode
}

const PageLogin = ({ loginCheck }) => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkForLogins() {
    router.push('/home')
  }
  return (
    <section className="mt-10 h-full pt-10">
      <Spinner />
      <div className="container mt-10 h-full pt-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-blackDark">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="flex w-full flex-wrap items-center justify-center md:mx-6 md:p-12">
                      <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                          <div className="flex items-center justify-between">
                            {typeof siteMetadata.headerTitle === 'string' ? (
                              <div className="hidden h-6 text-2xl font-semibold sm:block">
                                {siteMetadata.headerTitle}
                              </div>
                            ) : (
                              siteMetadata.headerTitle
                            )}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <form>
                      <p className="mb-4">`{`${siteInfo.loginTitle}`}`</p>
                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                'linear-gradient(to right, #1d4b6a, #5ba7db, #328ecc, #0099FF)',
                            }}
                            onClick={() => loginCheck(username, password)}
                          >
                            Log in
                          </button>
                        </div>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">`{`${siteInfo.notAccount}`}`</p>
                        <div>
                          <button
                            type="button"
                            className="border-danger text-danger hover:border-danger-600 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #1d4b6a, #5ba7db, #328ecc, #0099FF)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">`{`${siteInfo.title}`}`</h4>
                    <p className="text-sm">`{`${siteInfo.description}`}`</p>
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
export default PageLogin

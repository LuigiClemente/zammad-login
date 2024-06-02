import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import '../../css/loginForm.css'

import { ClerkProvider } from '@clerk/nextjs'
import LayoutWrapper from '@/components/LayoutWrapper'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { ThemeProviders } from './theme-providers'
import { AppProvider } from 'provider/AppProvider'
import { StateProvider } from 'provider/StateProvider'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// export const metadata: Metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     default: siteMetadata.title,
//     template: `%s | ${siteMetadata.title}`,
//   },
//   description: siteMetadata.description,
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: './',
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: 'en_US',
//     type: 'website',
//   },
//   alternates: {
//     canonical: './',
//     types: {
//       'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   twitter: {
//     title: siteMetadata.title,
//     card: 'summary_large_image',
//     images: [siteMetadata.socialBanner],
//   },
// }

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-lightGreen text-black antialiased dark:bg-lightBlack dark:text-white">
        <ThemeProviders>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ClerkProvider>
              <AppProvider>
                <StateProvider>
                  <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
                  <SectionContainer>
                    <LayoutWrapper>{children}</LayoutWrapper>
                  </SectionContainer>
                </StateProvider>
              </AppProvider>
            </ClerkProvider>
          </NextIntlClientProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
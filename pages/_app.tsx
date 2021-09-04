import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'

import { globalStyles } from '@config/stitches'

import Layout from '@components/Layout'
import { domAnimation, LazyMotion } from 'framer-motion'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles() // compiles stitches global styles

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <IdProvider>
      <LazyMotion features={domAnimation}>
        {getLayout(<Component {...pageProps} />)}
      </LazyMotion>
    </IdProvider>
  )
}
export default MyApp

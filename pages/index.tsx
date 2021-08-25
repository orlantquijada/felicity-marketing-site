import Head from 'next/head'

import { Flex } from '@components'
import Hero from '@components/Landing/Hero'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" css={{ height: '100vh', width: '100vw' }}>
        {/* <View as="header" css={{ position: 'sticky', height: '10vh' }}>
          header
        </View> */}
        <Hero />
      </Flex>
    </>
  )
}

import {
  DownloadSection,
  OrderSteps,
  RecentPostSection,
  Grid,
  View,
} from '@components'
import Hero from '@components/Landing/Hero'
import ContactUs from '@components/ContactUs'
import Waves from 'public/waves.svg'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Wave />
      <RecentPostSection />
      <OrderSteps />
      <DownloadSection />
      <ContactUs />
    </>
  )
}

function Wave() {
  return (
    <View
      css={{
        overflow: 'hidden',
      }}
    >
      <Grid
        css={{
          mt: '-1px',
          width: '100vw',
          height: '100%',
        }}
      >
        <Image src={Waves} alt="wave" />
      </Grid>
    </View>
  )
}

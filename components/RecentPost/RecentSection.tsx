import { Container, View } from '@components'
import RecentCard from './RecentCard'
import { styled } from '@config/stitches'
import Image from 'next/image'
import Tomato from 'public/tomato.png'
import Brocoli from 'public/brocoli.png'

export default function RecentPostSection() {
  return (
    <Container
      size="large"
      css={{
        display: 'grid',
        gapy: '2rem',
        mb: '$7',
        mt: '$9',
      }}
    >
      <View
        css={{
          position: 'relative',
        }}
      >
        <TomatoView>
          <Image src={Tomato} alt="tomato" objectFit="contain" />
        </TomatoView>
        <View style={{ position: 'relative', zIndex: 1 }}>
          <RecentCard direction="row" />
        </View>
      </View>

      <View
        css={{
          position: 'relative',
        }}
      >
        <BrocoliView>
          <Image src={Brocoli} alt="brocoli" objectFit="contain" />
        </BrocoliView>
        <View style={{ position: 'relative', zIndex: 1 }}>
          <RecentCard direction="rowReverse" />
        </View>
      </View>
    </Container>
  )
}

const TomatoView = styled(View, {
  position: 'absolute',
  left: '-3%',
  transform: 'translateY(-20%)',
  width: '6rem',
  height: '6rem',

  '@desktop': {
    width: '20rem',
    height: '20rem',
    transform: 'translateY(-10%)',
    left: '-5%',
  },
})

const BrocoliView = styled(View, {
  position: 'absolute',
  right: '0%',
  transform: 'translateY(-40%)',
  width: '6rem',
  height: '6rem',
  '@desktop': {
    width: '20rem',
    height: '20rem',
    right: '-22%',
    transform: 'translateY(-15%)',
  },
})

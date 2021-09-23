import { styled } from '@config/stitches'
import Image from 'next/image'
import { Container, View, Flex, Grid } from '@components'
import { textStyles } from '@components/Text'
import FoodBowlImg from 'public/foodbowl2.png'
import SliceImg from 'public/slice.png'
import { buttonStyles } from '@components/Button'

const IMAGE_HEIGHT = 65

export default function ErrorScreen() {
  return (
    <Grid
      flow="row"
      css={{
        placeItems: 'center',
        height: '100%',
        py: IMAGE_HEIGHT,
      }}
    >
      <View css={{ backgroundColor: '$primary8', width: '100%' }}>
        <Container
          as={Flex}
          direction="column"
          gap="3"
          css={{
            mt: -(IMAGE_HEIGHT / 2),
            pb: '$6',
          }}
        >
          <Title size={{ '@initial': '12', '@phone': '13' }}>404</Title>
          <Title size={{ '@initial': '7', '@phone': '8' }}>
            Page Not Found
          </Title>
          <Subtitle size={{ '@initial': '4', '@phone': '6' }}>
            Oops! The page that you are looking for could not be found
          </Subtitle>
          <CTA
            href="/"
            variant="primary"
            radius="pill"
            size="large"
            fitContent
            css={{
              fontSize: '$4',
              padding: '1rem 3rem',
              height: 'unset',
              alignSelf: 'center',
            }}
          >
            Go Home
          </CTA>
        </Container>
      </View>

      <Slice>
        <Image src={SliceImg} alt="slice" />
      </Slice>
      <Bowl>
        <Image src={FoodBowlImg} alt="foodbowl" />
      </Bowl>
    </Grid>
  )
}

const Title = styled('h1', {
  ...textStyles,

  textAlign: 'center',
  defaultVariants: {
    color: 'primary4',
    weight: 'bold',
  },
})

const Subtitle = styled('p', {
  ...textStyles,

  textAlign: 'center',
  defaultVariants: {
    color: 'primary5',
    weight: 'medium',
  },
})

const Slice = styled(View, {
  position: 'fixed',
  right: '-100%',
  '@phone': {
    transform: 'translateY(-40%)',
    right: '-3%',
    width: 'max(125px,13vw)',
    top: '13%',
  },
})
const Bowl = styled(View, {
  display: 'none',
  '@phone': {
    position: 'fixed',
    top: '45%',
    left: '-5rem',
    display: 'block',
    width: 'max(150px,12vw)',
  },
})

const CTA = styled('a', buttonStyles, {
  marginTop: '$4',
  marginBottom: '$5',
  '@tablet': { marginBottom: 'unset' },
})

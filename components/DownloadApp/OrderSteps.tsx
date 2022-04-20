import Image from 'next/image'
import { Flex, View, Grid, Container, ScrollReveal } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import Shop from 'public/shop.svg'
import Click from 'public/click.svg'
import Deliver from 'public/deliver.svg'

const data = [
  {
    id: 1,
    imageProps: Shop,
    columnTitle: 'CLICK',
    subtitle: 'Browse through the app and simply click your favorite goods',
  },
  {
    id: 2,
    imageProps: Click,
    columnTitle: 'CONFIRM',
    subtitle: 'Review your orders and check them out the cart',
  },
  {
    id: 3,
    imageProps: Deliver,
    columnTitle: 'COLLECT',
    subtitle: 'Get your order without having to leave your home',
  },
]

export default function OrderSteps() {
  return (
    <View
      as="section"
      css={{
        backgroundColor: '$white1',
        py: '$9',
      }}
    >
      <Container
        size="large2"
        as={Grid}
        css={{
          gapy: '3rem',
          mb: '$5',
          '@desktop': {
            pt: '$5',
          },
        }}
      >
        <ScrollReveal>
          <Header>Order in 3 easy steps!</Header>
        </ScrollReveal>
        <OuterFlex>
          {data.map((data) => (
            <ScrollReveal key={data.id}>
              <FlexCol>
                <Image src={data.imageProps} alt={data.columnTitle} />
                <ColumnTitle>{data.columnTitle}</ColumnTitle>
                <Subtitles>{data.subtitle}</Subtitles>
              </FlexCol>
            </ScrollReveal>
          ))}
        </OuterFlex>
      </Container>
    </View>
  )
}
const Header = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  paddingBottom: '$3',
  defaultVariants: {
    size: '11',
    color: 'primary3',
    weight: 'bold',
  },
})

const ColumnTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  defaultVariants: {
    size: '9',
    color: 'primary1',
    weight: 'bold',
  },
})

const Subtitles = styled('p', {
  ...textStyles,
  textAlign: 'center',
  px: '$9',
  '@desktop': {
    px: '$2',
  },
})
const OuterFlex = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: { gap: '9' },
  '@desktop': {
    flexDirection: 'row',
  },
})

const FlexCol = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: {
    gap: '4',
  },
})

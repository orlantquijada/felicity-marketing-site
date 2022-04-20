import { m } from 'framer-motion'

import { styled } from '@config/stitches'

import { Container, Grid, View, Flex } from '@components'
import { textStyles } from '@components/Text'
import { buttonStyles } from '@components/Button'
import HeroCarousel from './HeroCarousel'
import ScrollReveal from '@components/ScrollReveal'
import { TABLET_SIZE } from 'utils'

export default function Hero() {
  return (
    <View as="section" css={{ flexGrow: 1, backgroundColor: '$white1' }}>
      <Container
        size="large2"
        css={{
          gridTemplateAreas: '"carousel" "content"',

          // sa hero nlng ang padding since kaylangan way padding sa carousel
          padding: 0,

          '@tablet': {
            height: '100vh',
            gridTemplateColumns: '480px 1fr',
            gridTemplateAreas: '"content carousel"',
          },
        }}
        as={Grid}
        gap="4"
      >
        <HeroContent />
        <HeroCarousel />
      </Container>
    </View>
  )
}

function HeroContent() {
  return (
    <Flex
      direction="column"
      justify="center"
      gapY="2"
      css={{ gridArea: 'content', px: '$5' }}
    >
      <SloganText
        as={m.h1}
        size={{
          '@initial': '11',
          '@tablet': '12',
          '@desktop': '13',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
      >
        Experience <EmphasizedSloganText>Effortless </EmphasizedSloganText>
        Grocery Shopping
      </SloganText>
      <CompanyDescription
        as={m.p}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          delay: 0.5,
        }}
      >
        Fill your tables with food made from the freshest produce in the island
        without having to break a bank or a sweat.
      </CompanyDescription>
      <ScrollReveal
        transition={{
          delay:
            typeof window === 'object' && window.innerWidth > TABLET_SIZE
              ? 0.7
              : 0,
        }}
      >
        <CTA
          href="#download"
          variant="primary"
          radius="pill"
          size="large"
          fitContent
          css={{
            fontSize: '$4',
            padding: '1rem 3rem',
            height: 'unset',
          }}
        >
          Get Started Now
        </CTA>
      </ScrollReveal>
    </Flex>
  )
}

const SloganText = styled('h1', {
  ...textStyles,

  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const EmphasizedSloganText = styled('span', {
  ...textStyles,

  fontSize: 'inherit',
  fontWeight: 'inherit',

  defaultVariants: {
    color: 'primary3',
  },
})

const CompanyDescription = styled('p', {
  ...textStyles,

  opacity: 0.85,

  defaultVariants: {
    color: 'primary5',
    size: '4',
  },
})

const CTA = styled('a', buttonStyles, {
  marginTop: '$4',
  marginBottom: '$5',

  '@tablet': { marginBottom: 'unset' },
})

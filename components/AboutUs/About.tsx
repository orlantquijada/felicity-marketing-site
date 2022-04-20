import { Container, View, Flex, ScrollReveal } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import SampleImage from 'public/sample.png'
import Image from 'next/image'
import Logo from '@assets/logo/header-logo.png'
import HalfCircle from './HalfCircle'
import OurTeam from './OurTeam'

export default function AboutUs() {
  return (
    <View
      as="section"
      css={{
        flexGrow: 1,
        background: 'linear-gradient(#CBE5C6,#E5FAF1)',
      }}
    >
      <Container
        size="large2"
        css={{
          display: 'grid',
          justifyContent: 'center',
          pt: '$5',
          '@tablet': {
            height: '125vh',
          },
        }}
      >
        <Title size={{ '@initial': '10', '@tablet': '12', '@desktop': '14' }}>
          ABOUT US
        </Title>
        <Mission />
      </Container>
      <OurTeam />
    </View>
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

function Mission() {
  return (
    <Flex
      gap="6"
      css={{ py: '$8' }}
      direction={{ '@initial': 'column', '@tablet': 'row' }}
      align={{ '@initial': 'center', '@tablet': 'start' }}
    >
      <ScrollReveal>
        <ImageContainer>
          <Behind>
            <HalfCircle fill="#20577A" />
          </Behind>
          <StyledImage src={SampleImage} alt="try" />
        </ImageContainer>
      </ScrollReveal>

      <ContentFlex css={{ '@tablet': { width: '30vw' } }}>
        <ScrollReveal>
          <ContentTitle
            size={{
              '@initial': '9',
              '@desktop': '12',
            }}
          >
            Our <EmphasizedText>Mission</EmphasizedText>
          </ContentTitle>
        </ScrollReveal>
        <ScrollReveal>
          <Description>
            Felicity is not just a name but also the embodiment of the vision
            that its people are striving to create – a Happy City. Here, we
            believe that by providing healthy and fresh raw food without having
            you waste more money, time, and energy, a culture of healthy
            lifestyle will bud from families and the whole of society. We have
            made bonds with farmers from the different parts of the island to
            ensure fresh yet affordable goods for the members.
          </Description>
          <Description>
            A system was also created to give you not just a chance to have your
            foods free for a lifetime but also a chance for you to spend more
            time with your loved ones while still earning a living. Felicity
            will take the hassle out of your life so there is nothing for you to
            experience but a dose of Fresh Happiness Every Day.
          </Description>
        </ScrollReveal>
        <ScrollReveal>
          <Flex
            align="center"
            gap="3"
            justify={{ '@initial': 'center', '@tablet': 'start' }}
          >
            <div style={{ width: 50 }}>
              <Image src={Logo} alt="Felicity Logo" layout="responsive" />
            </div>
            <CompanyName>FELICITY</CompanyName>
          </Flex>
        </ScrollReveal>
      </ContentFlex>
    </Flex>
  )
}

const ContentFlex = styled(Flex, {
  flexDirection: 'column',
  gap: '$4',
})

const StyledImage = styled(Image, {
  borderTopLeftRadius: '200px',
  borderBottomLeftRadius: '200px',
  borderBottomRightRadius: '200px',
  objectFit: 'contain',
})

const ContentTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  '@tablet': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const Description = styled('p', {
  ...textStyles,
  textAlign: 'center',
  '@tablet': { textAlign: 'start' },
})

const EmphasizedText = styled('span', {
  ...textStyles,

  fontSize: 'inherit',
  fontWeight: 'inherit',

  defaultVariants: {
    color: 'primary3',
  },
})

const CompanyName = styled('h1', {
  ...textStyles,

  defaultVariants: {
    color: 'primary4',
    size: '6',
    weight: 'bold',
  },
})

const Behind = styled(View, {
  position: 'absolute',
  alignContent: 'center',
  width: '8rem',
  bottom: '-8%',
  left: '-7%',
  '@tablet': {
    width: '13rem',
    left: '-5%',
  },
})

const ImageContainer = styled(View, {
  userSelect: 'none',
  alignSelf: 'center',
  position: 'relative',
  width: '15rem',
  '@tablet': {
    width: '30rem',
  },
})

import Image from 'next/image'
import { Flex, View, Grid, Container, ScrollReveal } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import Image1 from 'public/Level 1.png'
import Image2 from 'public/Level 2.png'
import Image3 from 'public/Level 3.png'
import Image4 from 'public/Level 4.png'
import Image5 from 'public/Level 5.png'

const data = [
  {
    id: 1,
    imageProps: Image1,
    color: '#35A3A5',
    columnTitle: 'Guest',
    subtitle: 'Level 1',
  },
  {
    id: 2,
    imageProps: Image2,
    color: '#61C295',
    columnTitle: 'Patron',
    subtitle: 'Level 2',
  },
  {
    id: 3,
    imageProps: Image3,
    color: '#20577A',
    columnTitle: 'Fan',
    subtitle: 'Level 3',
  },
]

const data1 = [
  {
    id: 1,
    imageProps: Image4,
    color: '#35A3A5',
    columnTitle: 'Dreamer',
    subtitle: 'Level 4',
  },
  {
    id: 2,
    imageProps: Image5,
    color: '#61C295',
    columnTitle: 'Partner',
    subtitle: 'Level 5',
  },
]

export default function OurTeam() {
  return (
    <View
      as="section"
      css={{
        backgroundColor: '$white1',
        pb: '$9',
      }}
    >
      <Container
        size="large2"
        as={Grid}
        css={{
          gapy: '8rem',
          mb: '$8',
        }}
      >
        <ScrollReveal>
          <Title size={{ '@initial': '10', '@tablet': '12', '@desktop': '14' }}>
            Choose Your Spirit Animal
          </Title>
        </ScrollReveal>
        <OuterFlex>
          {data.map((data) => (
            <ScrollReveal key={data.id}>
              <FlexCol
                css={{
                  '@desktop': {
                    p: '$6 $4',
                    pt: 0,
                    rt: '$pill',
                  },
                }}
              >
                <ImageContainer>
                  <StyledTeamImage
                    src={data.imageProps}
                    alt={data.columnTitle}
                  />
                </ImageContainer>
                <ColumnTitle>{data.columnTitle}</ColumnTitle>
                <Subtitles>{data.subtitle}</Subtitles>
              </FlexCol>
            </ScrollReveal>
          ))}
        </OuterFlex>
        <OuterFlex>
          {data1.map((data) => (
            <ScrollReveal key={data.id}>
              <FlexCol
                css={{
                  '@desktop': {
                    p: '$6 $4',
                    pt: 0,
                    rt: '$pill',
                  },
                }}
              >
                <ImageContainer>
                  <StyledTeamImage
                    src={data.imageProps}
                    alt={data.columnTitle}
                  />
                </ImageContainer>
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

const Title = styled('h1', {
  ...textStyles,
  mt: '$8',
  textAlign: 'center',
  defaultVariants: {
    color: 'primary4',
    weight: 'bold',
  },
})

const StyledTeamImage = styled(Image, {
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  borderTopRightRadius: '50px',
})

const OuterFlex = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: { gap: '9' },
  '@desktop': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const FlexCol = styled(Flex, {
  position: 'center',
  flexDirection: 'column',
  defaultVariants: {
    gap: '5',
  },
})

const ColumnTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  defaultVariants: {
    size: '9',
    color: 'primary4',
    weight: 'bold',
  },
})

const Subtitles = styled('p', {
  ...textStyles,
  textAlign: 'center',
})

const ImageContainer = styled(View, {
  position: 'center',
  alignSelf: 'center',
  width: '12rem',
  pt: '$4',
  filter: 'drop-shadow(-8px 15px 24px rgba(0,0,0,0.18))',
  userSelect: 'none',
  '@tablet': { width: '15rem' },
})

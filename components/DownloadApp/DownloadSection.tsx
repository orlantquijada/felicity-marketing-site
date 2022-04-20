import Image from 'next/image'
import Appstore from 'public/appstore.png'
import Playstore from 'public/googleplay.png'
import Phone from 'public/phone.svg'
import Foodbowl from 'public/foodbowl.png'
import { Link, View, Flex, Container, ScrollReveal } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'

export default function DownloadSection() {
  return (
    <View as="section" css={{ py: 'clamp(4rem, 5vw, 5.5rem)' }} id="download">
      <Container
        as={Flex}
        size="large2"
        justify="between"
        gap="3"
        align="center"
        css={{
          flexDirection: 'column-reverse',

          '@desktop': { flexDirection: 'row' },
        }}
      >
        <Container size="medium" as={FlexCol} css={{ m: 0, p: 0 }}>
          <ScrollReveal>
            <Description>
              No more wasted time when shopping for your veggies, fruits, and
              meat can be done anytime and anywhere with less effort! Join the
              thousands of Filipinos who made the decision to live a more
              comfortable, more productive, healthier, and happier lives every
              single day and enjoy a lot more of perks by becoming a part of the
              Felicity Community. See the difference for yourself and experience
              Fresh Happiness Every Day!
            </Description>
          </ScrollReveal>
          <ScrollReveal>
            <FlexRow>
              <Link
                href="http://facebok.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image src={Appstore} alt="appstore" />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.felicityincorporated.felicity"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image src={Playstore} alt="playstore" />
              </Link>
            </FlexRow>
          </ScrollReveal>
          <ScrollReveal>
            <BigText>Download Our App!</BigText>
          </ScrollReveal>
        </Container>
        <ScrollReveal>
          <View
            css={{
              position: 'relative',
              transform: 'translateX(-10%)',
              '@desktop': { transform: 'translateX(-40%)' },
            }}
          >
            <Behind>
              <Image src={Foodbowl} alt="foodbowl" height="200" width="200" />
            </Behind>
            <Image src={Phone} alt="phone" />
          </View>
        </ScrollReveal>
      </Container>
    </View>
  )
}

const FlexCol = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: {
    gap: '4',
  },
})

const FlexRow = styled(Flex, {
  flexDirection: 'row',
  defaultVariants: {
    gap: '3',
  },
})

const BigText = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '10',
    color: 'primary5',
    weight: 'bold',
  },
})

const Description = styled('p', {
  ...textStyles,

  paddingBottom: '$4',
  defaultVariants: {
    color: 'primary5',
    size: '4',
  },
})

const Behind = styled(View, {
  position: 'absolute',
  right: '-25%',
  top: '50%',
  transform: 'translateY(-40%)',
})

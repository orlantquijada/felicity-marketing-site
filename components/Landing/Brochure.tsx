import Image from 'next/image'

import Container from '@components/Container'
import Flex from '@components/Flex'
import View from '@components/View'
import { buttonStyles } from '@components/Button'
import { styled } from '@config/stitches'

import RetailImage from 'public/assets/Home/Retail01.jpg'
import WholeSale from 'public/assets/Home/Wholesale01.jpg'

export default function Brochure() {
  return (
    <View as="section" css={{ py: 'clamp(4rem, 5vw, 5.5rem)' }} id="brochures">
      <Container
        as={Flex}
        size="large2"
        justify="between"
        gap="3"
        align="center"
        css={{
          flexDirection: 'row',
        }}
      >
        <Container
          size="medium"
          as={FlexCol}
          css={{ display: 'flex', justifyContent: 'center' }}
        >
          <View
            id="retailview1"
            css={{
              borderRadius: '2rem',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <Image
              src={RetailImage}
              height={400}
              width={550}
              alt="retail"
              placeholder="blur"
              objectFit="cover"
            />
          </View>
          <View css={{ display: 'flex', justifyContent: 'center' }}>
            <BrochureButton
              href="https://drive.google.com/file/d/10T05nNAPKNGjnAF8nd_Ojq3lQnbR-hzF/view?usp=sharing"
              target="blank"
              radius="pill"
              size="small"
              fitContent
              css={{
                fontSize: '$2',
                padding: '1rem 3rem',
                height: 'unset',
                color: 'White',
              }}
            >
              Retail Brochure
            </BrochureButton>
          </View>
        </Container>
        <Container
          size="medium"
          as={FlexCol}
          css={{ display: 'flex', justifyContent: 'center' }}
        >
          <View
            css={{
              borderRadius: '2rem',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <Image
              src={WholeSale}
              height={400}
              width={550}
              alt="wholesale"
              placeholder="blur"
              objectFit="cover"
            />
          </View>
          <View css={{ display: 'flex', justifyContent: 'center' }}>
            <BrochureButton
              href="https://drive.google.com/file/d/1UNoAxn0WghTbGFWzunKY7I9KDYbIaRjO/view?usp=sharing"
              target="blank"
              radius="pill"
              size="small"
              fitContent
              css={{
                fontSize: '$2',
                padding: '1rem 3rem',
                height: 'unset',
                color: 'White',
              }}
            >
              Wholesale Brochure
            </BrochureButton>
          </View>
        </Container>
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

const BrochureButton = styled('a', buttonStyles, {
  marginTop: '$4',
  marginBottom: '$5',

  '@tablet': { marginBottom: 'unset' },
})

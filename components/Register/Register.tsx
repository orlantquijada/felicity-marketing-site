import { View } from '@components'
import Container from '@components/Container'
import RegisterForm from '@components/Register/RegisterForm'

export default function ContactUsSection() {
  return (
    <View as="section" css={{ py: '$9', backgroundColor: '$white1' }}>
      <Container>
        <RegisterForm />
      </Container>
    </View>
  )
}

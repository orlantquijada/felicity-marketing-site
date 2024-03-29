import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { styled } from '@config/stitches'

import Button from '@components/Button'
import Grid from '@components/Grid'
import { TextArea, TextField } from '@components/TextField'
import Text, { textStyles } from '@components/Text'
import Flex from '@components/Flex'

import { contact, ContactFields } from 'utils/api'

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFields>({ mode: 'onTouched' })

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <Flex direction="column">
      <ContactUsHeader>Contact Us</ContactUsHeader>
      <Text>
        We want to provide you a great experience which is why we want to hear
        from you. Your feedback helps us cater the events you love and services
        you expect.
      </Text>

      <FormGrid
        as="form"
        onSubmit={handleSubmit((values) => {
          setLoading(true)
          contact(values).then(() => router.push('/thank-you'))
        })}
      >
        <Grid flow={{ '@initial': 'row', '@desktop': 'column' }} gap="4">
          <TextField
            placeholder="Name"
            variant="flushed"
            {...register('name', {
              required: 'Please fill out this field',
            })}
            error={errors.name?.message}
          />
          <TextField
            placeholder="Email"
            variant="flushed"
            {...register('email', {
              required: 'Please fill out this field',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please fill in a valid email',
              },
            })}
            error={errors.email?.message}
          />
        </Grid>

        <TextArea
          placeholder="Message"
          rows={7}
          {...register('message', { required: 'Please fill out this field' })}
          error={errors.message?.message}
          css={{ mt: '$4' }}
        />
        <Button
          type="submit"
          size="large"
          variant="primary"
          loading={loading}
          radius="10"
          css={{
            mt: '$6',
            width: '100%',
            '@desktop': { width: '25%' },
          }}
        >
          Submit
        </Button>
      </FormGrid>
    </Flex>
  )
}

const FormGrid = styled(Grid, {
  borderRadius: '$10',
  mt: '$6',
})

const ContactUsHeader = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '9',
    color: 'primary6',
    weight: 'bold',
  },
})

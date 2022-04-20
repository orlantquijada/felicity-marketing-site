import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { styled } from '@config/stitches'

import { Text, Button, Grid, TextField, Container } from '@components'
import { textStyles } from '@components/Text'
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
    <Container size="medium" css={{ p: '$5' }}>
      <RegisterHeader>Join Us</RegisterHeader>
      <Text>Create Account</Text>

      <FormGrid
        as="form"
        onSubmit={handleSubmit((values) => {
          setLoading(true)
          contact(values).then(() => router.push('/thank-you'))
        })}
      >
        <Grid flow={{ '@initial': 'row', '@desktop': 'column' }} gap="4">
          <TextField
            placeholder="Given Name"
            variant="flushed"
            // {...register('firstName', {
            //   required: 'Please fill out this field',
            // })}
            // error={errors.firstName?.message}
          />
          <TextField
            placeholder="Middle Name"
            variant="flushed"
            // {...register('firstName', {
            //   required: 'Please fill out this field',
            // })}
            // error={errors.firstName?.message}
          />
        </Grid>

        <TextField
          placeholder="Last Name"
          variant="flushed"
          // {...register('lastName', {
          //   required: 'Please fill out this field',
          // })}
          // error={errors.lastName?.message}
        />

        <TextField
          placeholder="Mobile Number"
          variant="flushed"
          {...register('firstName', {
            required: 'Please fill out this field',
            pattern: {
              value:
                /((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/,
              message: 'Please fill in a valid mobile number',
            },
          })}
          error={errors.firstName?.message}
        />

        <Grid flow={{ '@initial': 'row', '@desktop': 'column' }} gap="4">
          <TextField
            placeholder="Password"
            variant="flushed"
            // {...register('email', {
            //   required: 'Please fill out this field',
            // })}
            // error={errors.email?.message}
          />
          <TextField
            placeholder="Confirm Password"
            variant="flushed"
            // {...register('email', {
            //   required: 'Please fill out this field',
            // })}
            // error={errors.email?.message}
          />
        </Grid>
        <TextField
          placeholder="Referral Code"
          variant="flushed"
          // {...register('lastName', {
          //   required: 'Please fill out this field',
          // })}
          // error={errors.lastName?.message}
        />
        <Button
          type="submit"
          size="large"
          variant="primary"
          loading={loading}
          radius="10"
          css={{
            mt: '$2',
            width: '100%',
            '@desktop': { width: '25%' },
          }}
        >
          Submit
        </Button>
      </FormGrid>
    </Container>
  )
}

const FormGrid = styled(Grid, {
  borderRadius: '$10',
  mt: '$6',
  gap: '$4',
})

const RegisterHeader = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '9',
    color: 'primary6',
    weight: 'bold',
  },
})

import React from 'react'
import { Title, Container } from '../components'

export default function EmailPage({ email }) {
  return (
    <Container>
      <Title
        heading='Check your email'
        subheading={`We've sent a link to your email address: ${email}`}
      ></Title>
    </Container>
  )
}

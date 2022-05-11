import React from 'react'
import { Title, Container, Form } from '../components'

const Login = () => {
  return (
    <Container>
      <Title
        heading='Sign In'
        subheading="Welcome back, you've been missed!"
      ></Title>

      <Form login />
    </Container>
  )
}

export default Login

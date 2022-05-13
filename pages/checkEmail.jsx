import React from 'react'
import { Title, Container, AnchorButton, Card, Button } from '../components'

export default function EmailPage({ email }) {
  const subheading = () => {
    return (
      <div>
        <span>
          {`We've sent a link to your email address: `}
          <AnchorButton
            anchorTitle='test@gmail.com'
            link='test@gmail.com'
          ></AnchorButton>
        </span>
      </div>
    )
  }

  return (
    <Container>
      <Card>
        <Title heading='Check your email' subheading={subheading()}></Title>

        <Button>Skip now</Button>

        <div className='text-center'>
          {`Didn't receive an email?  `}
          <button className='text-blue-500'>Resend</button>
        </div>
      </Card>
    </Container>
  )
}

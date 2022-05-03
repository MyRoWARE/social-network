import React from 'react'
import { Title, Container, AnchorButton, Card } from '../components'

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

        <button>Skip Now</button>

        <div className='text-center'>
          {`Didn't receive an email?`} <button>Resend</button>
        </div>
      </Card>
    </Container>
  )
}

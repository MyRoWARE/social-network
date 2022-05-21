import { Title, Container, AnchorButton, Card, Button } from '../components';

const EmailPage = () => {
  const subheading = () => (
    <div>
      <span>
        {`We've sent a link to your email address: `}
        <AnchorButton anchorTitle="test@gmail.com" link="test@gmail.com" />
      </span>
    </div>
  );

  return (
    <Container>
      <Card>
        <Title heading="Check your email" subheading={subheading()} />

        <Button>Skip now</Button>

        <div className="text-center">
          {`Didn't receive an email?  `}
          <button type="button" className="text-blue-500">
            Resend
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default EmailPage;

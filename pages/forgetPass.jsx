import React from "react";
import {
  Title,
  Container,
  Card,
  TextInput,
  Button,
  AnchorButton,
} from "../components";

export default function ForgetPass() {
  return (
    <Container>
      <Card>
        <Title
          heading="Forgot password?"
          subheading="Enter your details to receive a rest link "
        ></Title>

        <TextInput type="email" />
        <Button>Send</Button>
        <AnchorButton anchorTitle="< Back to Sign In" link="signin" />
      </Card>
    </Container>
  );
}

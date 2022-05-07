import React from "react";
import { Title, Container, Card, TextInput } from "../components";

export default function ForgetPass() {
  return (
    <Container>
      <Card>
        <Title
          heading="Forgot password?"
          subheading="Enter your details to receive a rest link "
        ></Title>

        <TextInput type="email" />
      </Card>
    </Container>
  );
}

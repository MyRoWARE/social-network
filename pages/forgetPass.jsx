import React from "react";
import { Title, Container, Card, Form } from "../components";

export default function ForgetPass({ email }) {
  const subheading = () => {
    return (
      <Container>
        <Card>
          <Title
            heading="Forgot password?"
            subheading="Enter your details to receive a rest link "
          ></Title>

          <Form />
        </Card>
      </Container>
    );
  };
}

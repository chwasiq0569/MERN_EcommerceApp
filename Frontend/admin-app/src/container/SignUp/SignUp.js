import React from "react";
import Layout from "./../../components/Layout/Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "./../../components/UI/Input/Input";
const SignUp = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Row>
              <Col md={{ span: 6 }}>
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  value=""
                  onChange={() => {}}
                />
              </Col>
              <Col md={{ span: 6 }}>
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  value=""
                  onChange={() => {}}
                />
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 12 }}>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value=""
                  onChange={() => {}}
                />
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 12 }}>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange={() => {}}
                />
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUp;

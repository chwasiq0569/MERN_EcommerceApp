import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from './../../components/UI/Input/Input';
const SignIn = () => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3 }}>
            <Form>
            <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value=""
                  onChange={() => {}}
           />

              <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange={() => {}}
                />
             
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignIn;

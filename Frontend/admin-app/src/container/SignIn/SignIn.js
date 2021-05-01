import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from './../../components/UI/Input/Input';
import {connect, useDispatch} from 'react-redux';
import {loginRequest, loggingInRequest} from './../../redux/auth/authActions';

const SignIn = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    console.log("CLICKED")
    const user = {
      email: email,
      password: password
    }
    dispatch(loggingInRequest(user))
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={ userLogin }>
            <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
           />

              <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
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
// const mapStateToProps = state => {
//   return {       
//       state: state.auth
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     loginRequest: (user) => dispatch(loginRequest(user))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignIn;

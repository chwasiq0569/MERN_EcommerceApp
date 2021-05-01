import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from './../../components/UI/Input/Input';
import {connect, useDispatch} from 'react-redux';
import loginRequest from './../../redux/auth/authActions';

const SignIn = (props) => {

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    console.log("CLICKED")
    const user = {
      email: 'wasiq@gmail.com',
      password: "123456"
    }
    dispatch(loginRequest(user))
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

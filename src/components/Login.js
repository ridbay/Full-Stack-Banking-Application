import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { validateFields } from "../utils/common";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const fieldsToValidate = [{ email }, { password }];

    const allFieldsEntered = validateFields(fieldsToValidate);
    if (!allFieldsEntered) {
      this.setState({
        errorMsg: {
          sigin_error: "Please fill all the fields.",
        },
      });
    } else {
      this.setState({
        errorMsg: {
          sigin_error: "",
        },
      });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { errorMsg } = this.state;
    return (
      <div className="login-page">
        <h1>Banking Application</h1>
        <div className="login-form">
          <form onSubmit={this.handleLogin}>
            {errorMsg && errorMsg.sigin_error && (
              <p className="errorMsg centered-message">
                {errorMsg.sigin_error}
              </p>
            )}
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <div className="action-items">
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Link to="/register" className="btn btn-secondary">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Login);

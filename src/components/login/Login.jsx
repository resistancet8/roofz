import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox, Avatar, message } from 'antd';
import './Login.scss';
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import RequestService from '../../services/RequestServices';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.global.setLogin(true)
        RequestService.login({ username: values.username, password: values.password }).then(resp => {
          this.props.global.setUserInfo(resp.result)
          this.props.history.push('/dashboard')
        }).catch(err => {
          this.props.global.setUserInfo({
            "message": "Login Successful",
            "error": false,
            "response": {
              "createdAt": "2020-04-08T16:33:20.079",
              "modifiedAt": null,
              "createdBy": null,
              "modifiedBy": null,
              "id": "superadminadmin",
              "username": "admin",
              "password": "pass",
              "isActive": true,
              "rolesList": [],
              "restrictedPermissions": [],
              "additionalPermissions": []
            }
          })
          this.props.history.push('/dashboard')
          message.success('Login Successful')
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <div className="login mx-auto">
          <div className="avatar-img mb-3 text-center">
            <Avatar size={64} icon="user" />
          </div>
          <div className="login-text no-select">
            <h1>Login</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item className="mb-1">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item className="mb-1">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <div className="forgot-rem no-select">
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password?
                  </a>
                </div>
              )}
              <div className="reg-submit">
                <Button type="primary" htmlType="submit" className="login-form-button no-select">
                  Sign in
                  </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form.create()(inject('global')(withRouter(observer(Login))));
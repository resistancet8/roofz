import React, { Component, useState } from 'react';
import { CloseOutlined, UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'
import { Modal } from 'semantic-ui-react';
import { Input, Button, Form } from 'antd';

import './Register.scss';

const Register = ({ open, close, form }) => {
  const { getFieldDecorator } = form;

  // 0 is login, 1 is register
  let [currentActiveTab, changeActiveTab] = useState(0)

  const loginUser = () => {
    form.validateFields(['login-email', 'login-password'], (err, values) => {
      if (!err) {
        alert("login")
      }
    })
  }

  const registerUser = () => {
    form.validateFields(['register-name', 'register-email', 'register-password', 'register-confirm-password', 'register-phone'], (err, values) => {
      if (!err) {
        alert("register")
      }
    })
  }

  return (
    <Modal open={open}
      content='Call Benjamin regarding the reports.' closeOnEscape={false} closeOnDimmerClick={false}
      onClose={close} size="small" className="register-login-modal">
      <div className="close-modal" onClick={close}>
        <CloseOutlined />
      </div>
      <Modal.Content>
        <div className="tabs mb-4">
          <div className={`login ${currentActiveTab == 0 && 'active'}`} onClick={e => changeActiveTab(0)}>
            <span>Login</span>
          </div>
          <div className={`register ${currentActiveTab == 1 && 'active'}`} onClick={e => changeActiveTab(1)}>
            <span>Register</span>
          </div>
        </div>
        <div className="content">
          {currentActiveTab == 0 && <div className="login">
            <Form>
              <Form.Item>
                {getFieldDecorator('login-email', {
                  rules: [{ message: 'Please enter first name!' }],
                  initialValue: ''
                })(<Input size="large" placeholder="Email/Phone number" prefix={<UserOutlined />} />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('login-password', {
                  rules: [{ message: 'Enter your password' }],
                  initialValue: ''
                })(<Input.Password size="large" placeholder="Enter your password" prefix={<LockOutlined />} />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" onClick={loginUser}> Login </Button>
              </Form.Item>
            </Form>
          </div>}
          {currentActiveTab == 1 && <div className="register">
            <Form>
              <Form.Item>
                {getFieldDecorator('register-name', {
                  rules: [{ message: 'Enter your name' }],
                  initialValue: ''
                })(<Input size="large" placeholder="Enter your name" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('register-email', {
                  rules: [{ message: 'Enter your email' }],
                  initialValue: ''
                })(<Input size="large" placeholder="Enter your email" prefix={<UserOutlined />} />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('register-password', {
                  rules: [{ message: 'Enter your password' }],
                  initialValue: ''
                })(<Input.Password size="large" placeholder="Enter your password" prefix={<LockOutlined />} />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('register-confirm-password', {
                  rules: [{ message: 'Confirm your password' }],
                  initialValue: ''
                })(<Input.Password size="large" placeholder="Confirm your password" prefix={<LockOutlined />} />)}
              </Form.Item>
              <Form.Item>

                {getFieldDecorator('register-phone', {
                  rules: [{ message: 'Enter your phone numbe' }],
                  initialValue: ''
                })(<Input size="large" placeholder="Enter your phone number" prefix={<PhoneOutlined />} />)}
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" onClick={registerUser}> Register </Button>
                <p className="mt-1">By clicking you will be agreeing to <span style={{ color: '#2185d0' }}>Terms & Conditions</span></p>
              </Form.Item>
            </Form>
          </div>}
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Form.create()(Register);
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Redirect } from "react-router-dom";
import { Spin } from "antd";

export default function Protected(Children) {
  @inject("global")
  @observer
  class AuthenticatedComponent extends Component {
    render() {
      const { isLoggedIn, loading } = this.props.global
      return (
        <div className="authComponent">
          {isLoggedIn ? (
            <Spin spinning={loading}>
              <Children {...this.props} />
            </Spin>
          )
            : (
              <Redirect
                to="/login"
              />
            )}
        </div>
      );
    }
  }
  return AuthenticatedComponent;
}
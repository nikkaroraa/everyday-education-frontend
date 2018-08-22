import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Icon,
  Input,
  Row,
  Col,
  Card,
} from 'antd';

import CenteredForm from '../StyledComponents/CenteredForm';
import LargeFormItem from '../StyledComponents/LargeFormItem';
import LargeFormButton from '../StyledComponents/LargeFormButton';


class Signup extends Component {
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2em',
        }}
      >
        <Col span={10}>
          <div>
            <h1
              style={{
                textAlign: 'center',
              }}
            >
              Everyday Education
            </h1>
          </div>
          <div style={{ marginTop: '2em' }}>
            <Card>
              <h2
                style={{
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Signup
              </h2>
              <CenteredForm onSubmit={this.onSignup}>
                <LargeFormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                  })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />)}
                </LargeFormItem>
                <LargeFormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
                </LargeFormItem>
                <LargeFormItem>
                  <LargeFormButton type="primary" htmlType="submit">
                    SIGN UP
                  </LargeFormButton>
                </LargeFormItem>
              </CenteredForm>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalSignupForm = Form.create()(Signup);

Signup.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default WrappedNormalSignupForm;

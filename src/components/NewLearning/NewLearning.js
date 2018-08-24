import React, { Component } from 'react';
import {
  Card,
  Row,
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';


const FormItem = Form.Item;
const { TextArea } = Input;

const FlexCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


class NewLearning extends Component {
  render() {
    const { form: { getFieldDecorator } } = this.props;
    const dateFormat = 'DD MMM, YYYY';
    const currentDate = moment().format(dateFormat);
    return (
      <FlexCenteredDiv
        style={{
          backgroundColor: '#EEEEEE',
          minHeight: '100vh',
        }}
      >
        <Card style={{ width: '50vw' }}>
          <Row>
            <h1>What did you learn?</h1>
          </Row>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('date', {
                  rules: [{ required: true, message: 'Please input the date!' }],
                })(
                  <DatePicker
                    defaultValue={moment(currentDate)}
                    format={dateFormat}
                  />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input addonBefore="@" placeholder="Username" />,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('Learnings', {
                  rules: [{ required: true, message: 'Please input the learnings that you want to add!' }],
                })(
                  <TextArea placeholder="Learnings" autosize={{ minRows: 4 }} />,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">
                Add Learning
              </Button>
            </Form>
          </Row>
        </Card>
      </FlexCenteredDiv>
    );
  }
}

NewLearning.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
  }).isRequired,
};

const WrappedNewLearningForm = Form.create()(NewLearning);


export default WrappedNewLearningForm;

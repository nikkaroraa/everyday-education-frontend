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
import gql from 'graphql-tag';
import {
  Mutation,
} from 'react-apollo';
import { NavLink } from 'react-router-dom';

import routes from '../../config/routes';


const ADD_LEARNING = gql`
  mutation addLearning($date: DateTime!, $username: String!, $learningDescription: String!) {
    addLearning(
      date: $date,
      username: $username,
      learningDescription: $learningDescription,
    ) {
      id
      date
      username
      learningDescription
      createdAt
    }
  }
`;

const GET_LEARNINGS = gql`
  {
    learnings {
      id
      date
      username
      learningDescription
      createdAt
    }
  }
`;


const FormItem = Form.Item;
const { TextArea } = Input;

const FlexCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


class AddLearning extends Component {
  handleSubmit = (addLearning) => {
    const { form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const {
          date,
          username,
          learningDescription,
        } = values;
        addLearning({
          variables: {
            date,
            username,
            learningDescription,
          },
        });
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const dateFormat = 'DD MMM, YYYY';
    const currentDate = moment();

    return (
      <FlexCenteredDiv
        style={{
          backgroundColor: '#EEEEEE',
          minHeight: '100vh',
        }}
      >
        <Card style={{ width: '50vw' }}>
          <Row>
            <NavLink to={routes.GetLearnings}>
              View All Learnings
            </NavLink>
          </Row>
          <Row>
            <h1>What did you learn?</h1>
          </Row>
          <Row>
            {/*
              TODO: No 'learnings' object found
              because it seems that we haven't fetched learnings yet,
              as GET_LEARNINGS query hasn't fired until now
            */}
            <Mutation
              mutation={ADD_LEARNING}
              update={(cache, { data: { addLearning } }) => {
                const { learnings } = cache.readQuery({ query: GET_LEARNINGS });
                cache.writeQuery({
                  query: GET_LEARNINGS,
                  data: { learnings: learnings.concat([addLearning]) },
                });
              }}
            >
              {(addLearning, { loading, error }) => (
                <div>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.handleSubmit(addLearning);
                    }}
                  >
                    <FormItem>
                      {getFieldDecorator('date', {
                        initialValue: moment(currentDate, dateFormat),
                        rules: [{ required: true, message: 'Please input the date!' }],
                      })(
                        <DatePicker
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
                      {getFieldDecorator('learningDescription', {
                        rules: [{ required: true, message: 'Please input the learnings that you want to add!' }],
                      })(
                        <TextArea placeholder="Learnings" autosize={{ minRows: 4 }} />,
                      )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">
                      Add Learning
                    </Button>
                  </Form>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error :( Please try again</p>}
                </div>
              )}
            </Mutation>
          </Row>
        </Card>
      </FlexCenteredDiv>
    );
  }
}

AddLearning.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
  }).isRequired,
};

const WrappedAddLearningForm = Form.create()(AddLearning);


export default WrappedAddLearningForm;

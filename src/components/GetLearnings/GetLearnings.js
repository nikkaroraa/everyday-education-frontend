import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';


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

class GetLearnings extends Component {
  render() {
    return (
      <Fragment>
        <Link to={routes.AddLearning}>Add Learning</Link>
        <Query query={GET_LEARNINGS}>
          {
            ({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return (
                <ul>
                  {
                    data.learnings.map(({ id, date, username, learningDescription, createdAt }) => {
                      const formattedDate = moment(date).format('DD MMM, YYYY');
                      const formattedCreationDate = moment(createdAt).format('DD MMM, YYYY');
                      return (
                        <li key={id}>
                          <p>Date: {formattedDate}</p>
                          <p>Username: {username}</p>
                          <p>Learning: {learningDescription}</p>
                          <p>Created At: {formattedCreationDate}</p>
                        </li>
                      );
                    })
                  }
                </ul>
              );
            }
          }
        </Query>
      </Fragment>
    );
  }
}


export default GetLearnings;

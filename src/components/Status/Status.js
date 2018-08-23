import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const getStatusQuery = gql`
  {
    status {
      statusCode
      working
    }
  }
`;


const Status = () => (
  <Query query={getStatusQuery}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <p>Loading....</p>;
        }

        if (error) {
          return <p>Error :(</p>;
        }

        const {
          status: {
            statusCode,
            working,
          },
        } = data;
        return (
          <Fragment>
            <p>Status Code: {statusCode}</p>
            <p>Working: {working === true ? 'true' : 'false' }</p>
          </Fragment>
        );
      }
    }
  </Query>
);


export default Status;

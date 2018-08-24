import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { URLS } from './config/constants';


const client = new ApolloClient({
  uri: URLS.BACKEND_URL,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();

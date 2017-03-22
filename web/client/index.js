import React from 'react';
import ReactDOM from 'react-dom';
// import Relay from 'react-relay';

import { ApolloProvider, ApolloClient, createNetworkInterface, gql, graphql } from 'react-apollo';

const btoa = (str) => {
  const buffer = new Buffer(str, 'binary');
  return buffer.toString('base64');
};

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:1227',
});

const USERNAME = 'editdash';
const PASSWORD = 'edit!@lQ1#5N1';

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = `Basic ZWRpdGRhc2g6ZWRpdCFAbFExIzVOMQ==`;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});

class Story extends React.Component {
  render() {
    const { story, data } = this.props;

    console.log('>>>', data);

    return <div>hello</div>;
  }
}

const StoryContainer = graphql(gql`
  query {
    stories(site: VIEW, limit: 4) {
      id
      url
      headline
    }
  }
`)(Story);

ReactDOM.render(
  <ApolloProvider client={client}>
    <StoryContainer/>
  </ApolloProvider>,
  document.getElementById('app'),
);

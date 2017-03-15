import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class Story extends React.Component {
  render() {
    const { story } = this.props;

    return <div>{story.url}</div>;
  }
}

const StoryContainer = Relay.createContainer(Story, {
  fragments: {
    stories: () => Relay.QL`
      fragment on Story {
        url
        headline
      }
    `
  }
});

const storyRoute = {
  queries: {
    // Routes declare queries using functions that return a query root. Relay
    // will automatically compose the `user` fragment from the Relay container
    // paired with this route on a Relay.RootContainer
    stories: () => Relay.QL`
      # In Relay, the GraphQL query name can be optionally omitted.
      query { stories(id: $storyID) }
    `,
  },
  params: {
    // This `userID` parameter will populate the `$userID` variable above.
    storyID: '1',
  },
  // Routes must also define a string name.
  name: 'storyRoute',
};

const story = {
  url: "https://www.google.com"
};

ReactDOM.render(
  <Relay.RootContainer
    Component={StoryContainer}
    route={storyRoute}
  />,
  document.querySelector('#app')
);

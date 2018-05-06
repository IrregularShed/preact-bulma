import { h, Component } from 'preact';
import { Heading, Button, Box, Level } from 'react-bulma-components';

export default class Profile extends Component {
  state = {
    time: Date.now(),
    count: 10
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { time, count }) {
    return (
      <Box>
        <Heading size={1}>Profile: {user}</Heading>
        <Heading subheading size={3}>This is the user profile for a user named {user}.</Heading>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <Level>
          <Level.Side>
            <Level.Item>
              <Button color="primary" onClick={this.increment}>Click Me</Button>
            </Level.Item>
            <Level.Item>
              Clicked {count} times.
            </Level.Item>
          </Level.Side>
        </Level>
      </Box>
    );
  }
}

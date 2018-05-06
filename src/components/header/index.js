import { h, Component } from 'preact';
import { Navbar } from 'react-bulma-components';

export default class Header extends Component {
  render() {
    return (
      <Navbar color="info">
        <Navbar.Brand>
          <Navbar.Item href="/">
            <h1>Preact App</h1>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Item href="/profile">Me</Navbar.Item>
            <Navbar.Item href="/profile/john">John</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

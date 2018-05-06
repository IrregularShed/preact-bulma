import { h, Component } from 'preact';
//import { Link } from 'preact-router/match';
//import style from './style';
import { Navbar } from 'react-bulma-components';

export default class Header extends Component {
	render() {
		return (
			<Navbar color="info">
				<Navbar.Brand>
					<Navbar.Item href="/">
						<h1>Preact App</h1>
					</Navbar.Item>
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
	/*	render() {
			return (
				<header class={style.header}>
					<h1>Preact App</h1>
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/profile">Me</Link>
						<Link activeClassName={style.active} href="/profile/john">John</Link>
					</nav>
				</header>
			);
		}*/
}

import { h, Component } from 'preact';
import {Box, Heading} from 'react-bulma-components';

export default class Home extends Component {
	render() {
		return (
			<Box>
				<Heading size={1}>Home</Heading>
				<Heading subtitle size={4}>This is the Home component.</Heading>
			</Box>
		);
	}
}

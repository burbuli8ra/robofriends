import React, {Component, Fragment} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render () {
		return (
			<Fragment>
				<h1 className='f1'>RoboFriends</h1>
				<CounterButton color={'#000000'} />
			</Fragment>
		);
	}
}

export default Header;
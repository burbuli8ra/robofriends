import React, { Component } from 'react';

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.count !== nextState.count;
	}

	updateCount = () => {
		this.setState(state => {
			return {count: state.count + 1};
		});
	};

	render () {
		return (
			<button
				className="fw6 pa3 ba br-pill b--green bg-light-green"
				style={{color: this.props.color}}
				onClick={this.updateCount}
				data-test="counter"
			>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;
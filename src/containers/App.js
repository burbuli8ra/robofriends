import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './actions';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
  return {
  	searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
};

// Triggers the action
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: ({ target: {value} }) => dispatch(setSearchField(value)),
    onRobotsRequest: () => dispatch(requestRobots())
  }
};

class App extends Component {
  render() {
    return <MainPage { ...this.props } />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

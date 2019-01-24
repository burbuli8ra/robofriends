import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import { apiCall } from "../api/api";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import '../styles/App.css';

const mapStateToProps = state => {
  return {
  	// If we had more than stores, we would have to specify the store as well
    // searchField: state.searchRobots.searchField
    searchField: state.searchField
  }
};

// Triggers the action
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: ({ target: {value} }) => dispatch(setSearchField(value))
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(users => {this.setState({ robots: users })});
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return !robots.length ?
      <h1 className='f2 tc'>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

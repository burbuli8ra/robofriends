import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './actions';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import '../styles/App.css';

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
  componentDidMount() {
    this.props.onRobotsRequest();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return isPending ?
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

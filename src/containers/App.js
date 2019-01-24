import React, { Component } from 'react';
import { apiCall } from "../api/api";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(users => {this.setState({ robots: users })});
  }

  onSearchChange = ({ target: {value} }) => {
    this.setState({ searchField: value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return !robots.length ?
      <h1 className='f2 tc'>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;

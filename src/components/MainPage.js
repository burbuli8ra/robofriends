import React, { Component } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import CardList from './CardList';
import '../styles/MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRobotsRequest();
  }

  filterRobots = () => {
    const {searchField, robots} = this.props;

    return robots.filter(robot => (
      robot.name.toLowerCase().includes(searchField.toLowerCase()))
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
      <h1 className='f2 tc'>Loading...</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;

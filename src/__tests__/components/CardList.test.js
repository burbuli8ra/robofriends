import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../../components/CardList';

describe('CardList Component', () => {
  it('should render CardList component', () => {
    const mockRobots = [{
      id: 1,
      name: 'John Snow',
      username: 'John Snow',
      email: 'johnsnow@gmail.com'
    }];

    const wrapper = shallow(<CardList robots={ mockRobots } />);

    expect(wrapper).toMatchSnapshot();
  });
});

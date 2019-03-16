import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

describe('Card Component', () => {
  it('should render Card component', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Scroll from '../../components/Scroll';

describe('Scroll Component', () => {
  it('should render Scroll component', () => {
    const wrapper = shallow(<Scroll />);

    expect(wrapper).toMatchSnapshot();
  });
});

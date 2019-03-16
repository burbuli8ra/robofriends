import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox';

describe('SearchBox Component', () => {
  it('should render SearchBox component', () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper).toMatchSnapshot();
  });
});

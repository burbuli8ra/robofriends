import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header Component', () => {
  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not update Header component', () => {
    const mockNextProps = {};
    const mockNextState = {};

    expect(wrapper.instance().shouldComponentUpdate()).toBeFalsy();
  });
});

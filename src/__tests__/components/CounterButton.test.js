import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../../components/CounterButton';

let wrapper, mockColor;

beforeEach(() => {
  mockColor = 'blue';
  wrapper = shallow(<CounterButton color={ mockColor } />);
});

describe('CounterButton Component', () => {
  it('should render CounterButton component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update on click', () => {
    expect(wrapper.state('count')).toEqual(0);

    wrapper.find('[data-test="counter"]').simulate('click');
    expect(wrapper.state('count')).toEqual(1);

    wrapper.find('[data-test="counter"]').simulate('click');
    expect(wrapper.state('count')).toEqual(2);

    wrapper.find('[data-test="counter"]').simulate('keypress');
    expect(wrapper.state('count')).toEqual(2);

    expect(wrapper.props().style.color).toEqual('blue');
  });

  it('should not update counter', () => {
    const mockNextProps = {
      color: 'blue'
    };

    const mockNextState = {
      count: 0
    };

    expect(wrapper.instance().shouldComponentUpdate(mockNextProps, mockNextState)).toBeFalsy;
  });
});

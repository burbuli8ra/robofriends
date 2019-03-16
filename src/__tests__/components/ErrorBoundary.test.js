import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../components/ErrorBoundary';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ErrorBoundary />);
});
describe('ErrorBoundary Component', () => {
  it('should render ErrorBoundary component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error component', () => {
    const mockErrorState = {
      hasError: true
    };

    expect(wrapper.instance().componentDidCatch()).toMatchSnapshot();
  });
});

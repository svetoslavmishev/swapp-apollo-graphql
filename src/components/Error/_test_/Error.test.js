import React from 'react';
import { shallow } from 'enzyme';
import Error from '../Error';

describe('<Error />', () => {
  it('renders <Error /> component without error', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});

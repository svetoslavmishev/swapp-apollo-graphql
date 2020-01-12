import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../themeContext';
import SignIn from '../SignIn';

describe('<SignIn />', () => {
  it('renders <SignIn /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <SignIn />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

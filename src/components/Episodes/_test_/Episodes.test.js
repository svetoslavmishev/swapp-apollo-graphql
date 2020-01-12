import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../themeContext';
import Episodes from '../Episodes';

describe('<Episodes />', () => {
  it('renders <Episodes /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <Episodes />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

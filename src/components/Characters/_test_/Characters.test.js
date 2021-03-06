import React from 'react';
import { shallow } from 'enzyme';
import Characters from '../Characters';
import { ThemeContext, theme } from '../../../themeContext';

describe('<Characters />', () => {
  it('renders <Characters /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <Characters />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

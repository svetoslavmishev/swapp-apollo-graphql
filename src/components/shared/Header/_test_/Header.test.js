import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import Header from '../Header';

describe('<Header />', () => {
  it('renders <Header /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <Header />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

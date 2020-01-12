import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../themeContext';
import Starship from '../Starship';

describe('<Starship />', () => {
  it('renders <Starship /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <Starship />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

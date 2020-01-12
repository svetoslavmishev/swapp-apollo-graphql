import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import ItemCard from '../ItemCard';

describe('<ItemCard />', () => {
  it('renders <ItemCard /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <ItemCard />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

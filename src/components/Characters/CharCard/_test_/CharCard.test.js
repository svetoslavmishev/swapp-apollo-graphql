import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import CharCard from '../CharCard';

describe('<CharCard />', () => {
  it('renders <CharCard /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <CharCard />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

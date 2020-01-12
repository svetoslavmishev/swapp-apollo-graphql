import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import StarshipRadarChart from '../StarshipRadarChart';

describe('<StarshipRadarChart />', () => {
  it('renders <StarshipRadarChart /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <StarshipRadarChart />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

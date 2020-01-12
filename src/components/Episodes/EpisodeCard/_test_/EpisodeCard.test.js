import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import EpisodeCard from '../EpisodeCard';

describe('<EpisodeCard />', () => {
  it('renders <EpisodeCard /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <EpisodeCard />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

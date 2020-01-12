import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext, theme } from '../../../../themeContext';
import EpisodeDetails from '../EpisodeDetails';

describe('<EpisodeDetails />', () => {
  it('renders <EpisodeDetails /> without error', () => {
    const wrapper = shallow(
      <ThemeContext.Provider value={theme}>
        <EpisodeDetails />
      </ThemeContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

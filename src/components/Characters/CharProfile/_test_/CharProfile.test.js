import React from 'react';
import { shallow } from 'enzyme';
import CharProfile from '../CharProfile';
import { ApolloProvider } from '@apollo/react-hooks';

describe('<CharProfile />', () => {
  it('renders <CharProfile /> component without error', () => {
    const wrapper = shallow(
      <ApolloProvider>
        <CharProfile />
      </ApolloProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

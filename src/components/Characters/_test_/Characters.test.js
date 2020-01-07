import React from 'react';
import { shallow } from 'enzyme';
import Characters from '../Characters';
import { ApolloProvider } from '@apollo/react-hooks';

describe('<Characters />', () => {
  it('renders <Characters /> component without error', () => {
    const wrapper = shallow(
      <ApolloProvider>
        <Characters />
      </ApolloProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

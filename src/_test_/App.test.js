import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../client';

describe('<App />', () => {
  it('renders <App /> without error', () => {
    const wrapper = shallow(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

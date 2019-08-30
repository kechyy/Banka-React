import React from 'react';
import { mount, shallow } from './enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/components/App';
import HomeContent from '../src/components/HomeContent';
import { Provider } from 'react-redux';
import store from '../src/store';



describe('Sample Test', () => {
  it('Should return a successful sample test', () => {
    expect(true).toBeTruthy();
})
  it('Should render App without crashing', () => {
  const Wrapper = mount(<App />);

    expect(toJson(Wrapper)).toMatchSnapshot();
  })

  it('should render home without crashing', () => {
  const Wrapper = mount(<App />);
    expect(Wrapper).toBeDefined();
    expect(toJson(Wrapper)).toMatchSnapshot();

  })
})
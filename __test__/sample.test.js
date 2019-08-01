import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';

Enzyme.configure({ adapter: new Adapter() })

describe('My App Component', () => {
  it('Should return text', () => {
    const Wrapper = shallow(<App />);
    const text = Wrapper.find('h1');
    expect(text.text()).toBe('Welcome to React Banka Application');
  })
  it('Should be false', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
})
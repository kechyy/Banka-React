import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from './enzyme';
import CreateAccount from '../src/components/CreateAccount';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


const mockStore = configureMockStore([thunk]);
let store;
const initialSate = {
  data: [],
  error: null,
  status: 'rest'
};

const props = {
  isAuthenticated: true,
  getAccountAction: jest.fn(),
  accountAction: jest.fn(),
  userProfile: jest.fn()
};

const renderWithEnzymes = state => {
  store = mockStore({
    authReducer: {
      error: null,
      isAuthenticated: false,
      user: {},
      status: 'rest'
    },
   
    accountReducer: {
      account: [],
      error: null,
      status: 'rest'
    },
    profileReducer: {
      profile: {},
      status: 'rest'
    },
    CreateAccount: {
      ...state
    }
  });
  return mount(
    <Provider store={store}>
      <Router>
        <CreateAccount {...props} />
      </Router>
    </Provider>
  );
};


describe('CreateAccount', () => {
  afterEach(() => {
    jest.clearAllMocks();
    store = null;
  });

  it('should have 4 input on create account', () => {
    const wrapper = renderWithEnzymes();

    expect(wrapper.find('input').length).toBe(4);
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().type
    ).toBe('text');
    expect(
      wrapper
        .find('input')
        .at(1)
        .props().type
    ).toBe('text');
    expect(
      wrapper
        .find('input')
        .at(2)
        .props().type
    ).toBe('email');
    expect(
      wrapper
        .find('input')
        .at(3)
        .props().type
    ).toBe('submit');
  });

  it('should have 1 select', () => {
    const wrapper = renderWithEnzymes();
    const field = wrapper.find('select').first();
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual('type');
  });

  it('should have a submit input', () => {
    const wrapper = renderWithEnzymes();
    const button = wrapper.find("input[type='submit']");
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual('');
  });

  it('should render CreateAccount Component', () => {
    const wrapper = renderWithEnzymes();
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should submit a valid form', () => {
    const wrapper = renderWithEnzymes();
    const event = {
      preventDefault: jest.fn()
    };
    const typeInput = wrapper.find("select[name='type']");
    typeInput.simulate('change', {
      target: {
        name: 'type',
        value: 'savings'
      }
    });
   
    wrapper.find('form').simulate('submit', event);
    expect(wrapper.find('CreateAccount').state('type')).toEqual('savings');

  });
});
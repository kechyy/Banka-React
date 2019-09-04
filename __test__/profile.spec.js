import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from './enzyme';
import Profile from '../src/components/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


const mockStore = configureMockStore([thunk]);
let store;
const initialSate = {
  profile: {},
  status: 'rest'
};

const props = {
  isAuthenticated: true,
  profileAction: jest.fn(),
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
    profileReducer: {
      profile: {},
      status: 'rest'
    },
    accountReducer: {
      account: [],
      error: null,
      status: 'rest'
    },
    Profile: {
      ...state
    }
  });
  return mount(
    <Provider store={store}>
      <Router>
        <Profile {...props} />
      </Router>
    </Provider>
  );
};


describe('Profile', () => {
  afterEach(() => {
    jest.clearAllMocks();
    store = null;
  });

  it('should have 1 table on profile page', () => {
    const wrapper = renderWithEnzymes();

    expect(wrapper.find('table').length).toBe(1);
   
  });

  it('should render Profile Component', () => {
    const wrapper = renderWithEnzymes();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
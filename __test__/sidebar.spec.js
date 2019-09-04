import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from './enzyme';
import SideBar from '../src/components/SideBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


const mockStore = configureMockStore([thunk]);
let store;
const initialSate = {
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
    SideBar: {
      ...state
    }
  });
  return mount(
    <Provider store={store}>
      <Router>
        <SideBar {...props} />
      </Router>
    </Provider>
  );
};


describe('SideBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
    store = null;
  });

  it('should have 1 table on SideBar', () => {
    const wrapper = renderWithEnzymes();
    expect(wrapper.find('ul').length).toBe(2);
   
  });

  it('should render SideBar Component', () => {
    const wrapper = renderWithEnzymes();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
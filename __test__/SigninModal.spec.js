import React from 'react';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import store from '../src/store';
import { mount, shallow } from './enzyme';
import SignInModal from '../src/components/SignInModal';

const mockStore = configureMockStore([thunk]);
const renderWithEnzymes = state => {
  const store = mockStore({
    authReducer: {
      error: null,
      isAuthenticated: false,
      user: {},
      status: 'rest'
    },
    modalStatus: {
      signinDisplay: 'none',
      signupDisplay: 'none',
      page: '',
    },
    SignInModal: {
      ...state
    }
  });
  return mount(
    <Provider store={store}>
      <Router>
        <SignInModal {...props} />
      </Router>
    </Provider>
  );
};

const props = {
  authAction: jest.fn(),
  status: '',
  isAuthenticated: false,
  error: null,
  location: { url: '/user-dashboard' },
  history: { push: jest.fn() },
  closeModal:jest.fn(),
  modalToggle2:jest.fn(),
  modalToggle:jest.fn(),
  signinDisplay:'block',
  page:'signin'

};


describe('Signin component', () => {

  it('renders without crashing', () => {
    const wrapper = renderWithEnzymes();
    expect(wrapper).toBeDefined();
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toBeDefined();
    const field = wrapper.find('input').first();
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual('email')

  });

  it('renders one form', () => {
    const wrapper = renderWithEnzymes();

    expect(wrapper.find('div')).toBeTruthy();
    expect(wrapper.find('h1').text()).toEqual('LOGIN HERE');
    expect(wrapper.find('form')).toBeTruthy();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders 2 input fields and 1 submit button', () => {
    const wrapper = renderWithEnzymes();

    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('input').at(0).props().type).toBe('email');
    expect(wrapper.find('input').at(1).props().type).toBe('password');
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').at(0).props().type).toBe('submit');

    
  });
});
import React from 'react';
import { mount, shallow } from './enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SignUpModal from '../src/components/SignUpModal';

import { userToken } from '../__mocks__/mockData';

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
    SignUpModal: {
      ...state
    }
  });
  return mount(
    <Provider store={store}>
      <Router>
        <SignUpModal {...props} />
      </Router>
    </Provider>
  );
};

const props = {
  authAction: jest.fn(),
  status: 'rest',
  isAuthenticated: false,
  error: null,
  location: { url: '/user-dashboard' },
  history: { push: jest.fn() },
  closeModal:jest.fn(),
  modalToggle2:jest.fn(),
  modalToggle:jest.fn(),
  signupDisplay:'block',
  page:'signup',
  signinDisplay: 'none'

};


describe('Signup component', () => {
 
  it('renders without crashing', () => {
   const wrapper =renderWithEnzymes();

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders one form', () => {
    const wrapper =renderWithEnzymes();




    expect(wrapper.find('h1').text()).toEqual('USER SIGN UP PAGE');
    expect(wrapper.find('SignUpModal')).toBeTruthy();
    expect(wrapper.find('form')).toBeTruthy();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders 4 input fields and 1 submit button ', () => {
    const wrapper =renderWithEnzymes();

    // console.log('new wrapper >>', wrapper.debug());

    expect(wrapper.find('input').length).toBe(5);
    expect(wrapper.find('input').at(0).props().type).toBe('text');
    expect(wrapper.find('input').at(1).props().type).toBe('text');
    expect(wrapper.find('input').at(2).props().type).toBe('email');
    expect(wrapper.find('input').at(3).props().type).toBe('password');
    expect(wrapper.find('input').at(4).props().type).toBe('password');
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').at(0).props().type).toBe('submit');
  });

  it('should submit a valid form', () => {
    const wrapper = renderWithEnzymes();
    const event = {
      preventDefault: jest.fn()
    };
    const typeInputFirstName = wrapper.find("input[name='firstName']");
    typeInputFirstName.simulate('change', {
      target: {
        name: 'firstName',
        value: 'Nkechi'
      }
    });
    const typeInputlastName = wrapper.find("input[name='lastName']");
    typeInputlastName.simulate('change', {
      target: {
        name: 'lastName',
        value: 'Ogbonna'
      }
    });
    const typeInputEmail = wrapper.find("input[name='email']");
    typeInputEmail.simulate('change', {
      target: {
        name: 'email',
        value: 'kech@gmail.com'
      }
    });
    const typeInputPassword = wrapper.find("input[name='password']");
    typeInputPassword.simulate('change', {
      target: {
        name: 'password',
        value: 'kech@123'
      }
    });
    const typeInputCPassword = wrapper.find("input[name='cpassword']");
    typeInputCPassword.simulate('change', {
      target: {
        name: 'cpassword',
        value: 'kech@123'
      }
    });
    
    wrapper.find('form').simulate('submit', event);
    expect(wrapper.find('SignUpModal').state('firstName')).toEqual('Nkechi');
    expect(wrapper.find('SignUpModal').state('lastName')).toEqual('Ogbonna');
    expect(wrapper.find('SignUpModal').state('email')).toEqual('kech@gmail.com');
    expect(wrapper.find('SignUpModal').state('password')).toEqual('kech@123');
    expect(wrapper.find('SignUpModal').state('cpassword')).toEqual('kech@123');
  });
})
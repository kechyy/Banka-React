// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import Enzyme, { mount, shallow } from './enzyme';
// import toJson from 'enzyme-to-json';
// import SignUpModal from '../src/components/SignUpModal';

// const createStore = (signinDisplay = 'none', signupDisplay = 'none', page = '') => {
//   const content = {
//     modalStatus: {
//       signinDisplay: 'none',
//       signupDisplay: 'none',
//       page: ''
//     }
//   };
//   const middlewares = [thunk];
//   const mockStore = configureStore(middlewares);
//   const store = mockStore({
//     modalStatus: { ...content, signinDisplay, signupDisplay, page }
//   });
//   return store;
// };


// const props = {
//   modalToggle: jest.fn(),
//   modalToggle2: jest.fn(),
//   closeModal: jest.fn(),
//   page: 'signup'
// };

// describe.only('SignUp Modal', () => {  
//   it('renders signup modal without crashing', () => {
//     const Wrapper = mount(
//             <Provider store={createStore()}>
//               <SignUpModal {...props} />
//             </Provider>
//           );
//     expect(wrapper.find('SignUpModal')).toBeTruthy();
//     expect(wrapper.find('div')).toBeTruthy();
//     expect(Wrapper.find('div').length).toBeGreaterThan(1);
//     expect(toJson(Wrapper)).toMatchSnapshot();
    
//   })

//   it('renders five input fields ', () => {
//     const wrapper = setUp();
//     expect(wrapper.find('input').length).toBe(5);
//     expect(wrapper.find('input').at(0).props().type).toBe('text');
//     expect(wrapper.find('input').at(1).props().type).toBe('text');
//     expect(wrapper.find('input').at(2).props().type).toBe('email');
//     expect(wrapper.find('input').at(3).props().type).toBe('password');
//     expect(wrapper.find('input').at(4).props().type).toBe('password');
//     expect(wrapper.find('button').length).toBe(1);
//     expect(wrapper.find('button').at(0).props().type).toBe('submit');
//   });
// })


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
  beforeEach(() => {
    location = {
      search: `token=${userToken}`,
      url: '/'
    };
  });
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
})
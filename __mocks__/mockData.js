import jwt from 'jsonwebtoken';

const secret = 'nkechi';

export const userToken = `Bearer ${jwt.sign(
  {
    id: 1,
    email: 'example@gmail.com',
    type: 'user'
  },
  secret,
  { expiresIn: '1 hour' }
)}`;

export const expiredToken = `Bearer ${jwt.sign(
  {
    id: 1,
    email: 'example@gmail.com',
    type: 'user'
  },
  secret,
  { expiresIn: -1 }
)}`;

export default {
  authResponse: {
    data: {
      id: 1,
      username: 'Kech123',
      email: 'kech123@andela.com',
      type: 'user',
      token: userToken
    }
  }
};
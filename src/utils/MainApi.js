import { getToken } from './token';
import { BASE_URL } from './auth';

const response = (res) => { // функция обработки ответа
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

const getHeaders = () => { // функция обработки заголовков
  const token = getToken('jwt');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: getHeaders()
  })
  .then(response)
};
export const BASE_URL = 'http://api.newsexplorer.students.nomoredomains.monster';

// функция обработки ответа
const response = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

// регистрация пользователя
export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
    name,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res;
    }
    return Promise.reject(res);
  });

// авторизация пользователя
export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then(response);

// проверка токена
export const checkToken = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then(response);

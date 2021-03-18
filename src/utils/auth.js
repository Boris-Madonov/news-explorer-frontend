export const BASE_URL = 'http://178.154.208.34';

const response = (res) => { // функция обработки ответа
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const register = (email, password, name) => { // регистрация пользователя
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name,
    })
  })
  .then((res) => {
    if (res.ok) {
      return res;
    }
    return Promise.reject(res);
  });
};

export const authorize = (email, password) => { // авторизация пользователя
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(response);
};

export const checkToken = (token) => { // проверка токена пользователя
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(response);
}
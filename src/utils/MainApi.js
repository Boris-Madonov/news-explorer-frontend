import { getToken } from './token';
import { BASE_URL } from './auth';

// функция обработки ответа
const response = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

// функция обработки заголовков
const getHeaders = () => {
  const token = getToken('jwt');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// получение информации о пользователе
export const getUserInfo = () => fetch(`${BASE_URL}/users/me`, {
  headers: getHeaders(),
})
  .then(response);

// получение списка сохраненных статей
export const getSavedArticles = () => fetch(`${BASE_URL}/articles`, {
  method: 'GET',
  headers: getHeaders(),
})
  .then(response);

// сохранить статью
export const saveArticle = (article, keyword) => fetch(`${BASE_URL}/articles`, {
  method: 'POST',
  headers: getHeaders(),
  body: JSON.stringify({
    keyword,
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    source: {
      name: article.source.name,
    },
    url: article.url,
    urlToImage: article.urlToImage,
  }),
})
  .then(response);

// удалить статью
export const deleteArticle = (id) => fetch(`${BASE_URL}/articles/${id}`, {
  method: 'DELETE',
  headers: getHeaders(),
})
  .then(response);

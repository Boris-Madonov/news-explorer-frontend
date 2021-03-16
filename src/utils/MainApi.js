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

export const getSavedArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: getHeaders()
  })
  .then(response)
};

export const saveArticle = (article, keyword) => {
  return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        keyword: keyword,
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
  .then(response)
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
  })
  .then(response)
};
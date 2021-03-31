const BASE_URL = 'https://nomoreparties.co/news/v2';
const apiKey = 'f1d32e395d6545608c5714ec37c3a91a';
const pageSize = '100';

const date1 = new Date(Date.now()); // текущая дата
const date2 = new Date(Date.now() - 604800000); // текущая дата - 7 дней

const currentDateFrom = `${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()}`; // перевод даты в формат работы с API
const currentDateTo = `${date2.getFullYear()}-${date2.getMonth() + 1}-${date2.getDate()}`; // перевод даты в формат работы с API

const response = (res) => { // функция обработки ответа
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export default function getNewsArticles(searchText) {
  fetch(`${BASE_URL}/everything?language=ru&q=${searchText}&from=${currentDateFrom}&to=${currentDateTo}&pageSize=${pageSize}&apiKey=${apiKey}`, {
    method: 'GET',
  })
    .then(response);
}

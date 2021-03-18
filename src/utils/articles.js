const ARTICLES_KEY = 'newsArticles';

export const setArticles = (articles) => localStorage.setItem(ARTICLES_KEY, articles);

export const getArticles = () => localStorage.getItem(ARTICLES_KEY);

export const removeArticles = () => localStorage.removeItem(ARTICLES_KEY);
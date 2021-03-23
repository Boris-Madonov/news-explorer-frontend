const KEYWORD_KEY = 'keyword';

export const setKeyword = (keyword) => localStorage.setItem(KEYWORD_KEY, keyword);

export const getKeyword = () => localStorage.getItem(KEYWORD_KEY);

export const removeKeyword = () => localStorage.removeItem(KEYWORD_KEY);

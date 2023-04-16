import axios from 'axios';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const BOOKMARK_QUOTE = 'BOOKMARK_QUOTE';

export const fetchRandomQuote = (tag) => {
  return (dispatch) => {
    const url = tag ? `https://api.quotable.io/random?tag=${tag}` : 'https://api.quotable.io/random';
    return axios.get(url).then((response) => {
      const { content, author, tags } = response.data;
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: { content, author, tags } });
    });
  };
};

export const fetchTags = () => {
  return (dispatch) => {
    return axios.get('https://api.quotable.io/tags').then((response) => {
      dispatch({ type: FETCH_TAGS_SUCCESS, payload: response.data });
    });
  };
};

export const bookmarkQuote = (quote) => {
  return { type: BOOKMARK_QUOTE, payload: quote };
};

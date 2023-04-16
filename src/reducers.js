import { FETCH_QUOTE_SUCCESS, FETCH_TAGS_SUCCESS, BOOKMARK_QUOTE } from './actions';

export const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        content: action.payload.content,
        author: action.payload.author,
        tags: action.payload.tags,
      };
    default:
      return state;
  }
};

export const tagReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export const bookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case BOOKMARK_QUOTE:
      return [...state, action.payload];
    default:
      return state;
  }
};

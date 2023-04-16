import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { quoteReducer, tagReducer, bookmarkReducer } from './reducers';
import { fetchRandomQuote, fetchTags, bookmarkQuote } from './actions';
import QuoteGenerator from './components/QuoteGenerator';

import NotFound from './components/NotFound';
import BookmarkList from './components/BookMarkList';

// Create the Redux store
const rootReducer = combineReducers({
  quote: quoteReducer,
  tags: tagReducer,
  bookmarks: bookmarkReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

// Fetch the list of tags and dispatch the action
store.dispatch(fetchTags());

// Fetch a random quote and dispatch the action
store.dispatch(fetchRandomQuote());

// Add a bookmarked quote to the state and dispatch the action
const addBookmark = (quote) => {
  store.dispatch(bookmarkQuote(quote));
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
           
          <Route exact path="/" element={<QuoteGenerator addBookmark={addBookmark}/>}/>
          
          <Route path="/bookmarks" element={<BookmarkList/>}/>
           
          
          <Route path="*" element={<NotFound/>}/>
            
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

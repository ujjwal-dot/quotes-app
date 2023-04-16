import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRandomQuote } from '../actions'
import '../style.css'
const QuoteGenerator = ({ addBookmark }) => {
    const [selectedTag, setSelectedTag] = useState('');
    const quote = useSelector((state) => state.quote);
    const tags = useSelector((state) => state.tags);
    const dispatch = useDispatch();
  
    const handleTagChange = (event) => {
      setSelectedTag(event.target.value);
      dispatch(fetchRandomQuote(event.target.value));
    };
  
    const handleNewQuote = () => {
      dispatch(fetchRandomQuote(selectedTag));
    };
  
    const handleBookmark = () => {
      addBookmark(quote);
    };
  
    return (
      <div className="quote-generator">
        <div className="quote-container">
          <div className="quote-text">{quote.content}</div>
          <div className="quote-author">{quote.author}</div>
          <div className="quote-tags">
            {quote.tags &&
              quote.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
          </div>
        </div>
        <div className="quote-actions">
          <div className="tag-dropdown">
            <select value={selectedTag} onChange={handleTagChange}>
              <option value="">Select a tag</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
          <button className="new-quote-button" onClick={handleNewQuote}>
            New Quote
          </button>
          <button className="bookmark-button" onClick={handleBookmark}>
            Bookmark
          </button>
        </div>
      </div>
    );
  };
  
  export default QuoteGenerator;
  
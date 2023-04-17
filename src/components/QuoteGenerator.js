import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRandomQuote } from '../actions'
import '../style.css'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { IconName, MdBookmarkBorder } from "react-icons/md";
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
               
                <div className="quote-author">- {quote.author}</div>
                <MdBookmarkBorder className='book-mark' onClick={handleBookmark} />

               
              
            </div>
            <div className="quote-actions">
                <div className="tag-dropdown">
                    <select value={selectedTag} onChange={handleTagChange} style={{ border: "none", borderRadius: '20px', fontSize: '0.8em',textAlign:'center' }} >

                        {tags.map((tag) => (
                            <option key={tag.id} value={tag.name} >
                                {tag.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="new-quote-button" onClick={handleNewQuote}>
                    Next Quote
                </button>


            </div>
        </div>


    );
};

export default QuoteGenerator;

import React from 'react';
import { useSelector } from 'react-redux';
import '../style.css'
import { Link } from 'react-router-dom';


const BookMarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div className="bookmark-list">
      <Link to={'/'} className='new-quote-button'>Home</Link>

        
      <h1>Bookmarks</h1>
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
              <div className="bookmark-text">{bookmark.content}</div>
              <div className="bookmark-author">{bookmark.author}</div>
              <div className="bookmark-tags">
                {bookmark.tags &&
                  bookmark.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No bookmarks</div>
      )}
    </div>
  );
};

export default BookMarkList;

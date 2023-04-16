import React from 'react';
import { useSelector } from 'react-redux';
import '../style.css'
import { Link } from 'react-router-dom';


const BookMarkList = () => {
    const bookmarks = useSelector((state) => state.bookmarks);

    return (
        <div>

            <div className="bookmark-list">

                {bookmarks.length > 0 ? (
                    <ul>
                        {bookmarks.map((bookmark, index) => (
                            <li key={index}>
                                <div className="bookmark-text">{bookmark.content}</div>
                                <div className="bookmark-author">- {bookmark.author}</div>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>No bookmarks</div>
                )}
            </div>
        </div>
    );
};

export default BookMarkList;

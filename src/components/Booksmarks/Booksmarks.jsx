import PropTypes from 'prop-types';
import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Booksmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-xl ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-4xl p-4 text-center'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className='text-2xl text-center '>Booksmarked Blog:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark = {bookmark} 
                
                ></Bookmark>)
            }
        </div>
    );
};

Booksmarks.propTypes ={
      bookmarks: PropTypes.array,
      readingTime: PropTypes.number
}
export default Booksmarks;
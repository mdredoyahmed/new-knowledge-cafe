import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]) ;

  const [readingTime  , setReadingTime] = useState(0) ;

  const handleAddToBookmark = blog =>{
       const newBookmarks = [...bookmarks ,blog] ;
       setBookmarks(newBookmarks ) ;
  }

  const handleMarkAsRead = (id ,time) =>{
     const newReadingTime = readingTime + time ;
     setReadingTime(newReadingTime) ;
     //  remove the read blog from bookmar
    //  console.log('remove Bookmark',id);

     const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) ;
     setBookmarks(remainingBookmarks);
  }



  return (
    <>
      
      
      <Header></Header>
     <div className='md:flex max-w-7xl  mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
      handleMarkAsRead = {handleMarkAsRead}></Blogs>
      <Booksmarks bookmarks={bookmarks} 
       readingTime = {readingTime}
      ></Booksmarks>
     </div>
     
    </>
  )
}

export default App

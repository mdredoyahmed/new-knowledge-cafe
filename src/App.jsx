import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    console.log('bookmarks adding soon ')
  }

  return (
    <>
      
      
      <Header></Header>
     <div className='md:flex max-w-7xl  mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Booksmarks></Booksmarks>
     </div>
     
    </>
  )
}

export default App

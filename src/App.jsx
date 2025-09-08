import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Header></Header>
     <div className='md:flex'>
      <Blogs></Blogs>
      <Booksmarks></Booksmarks>
     </div>
     
    </>
  )
}

export default App

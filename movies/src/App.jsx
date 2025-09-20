import { useState } from 'react'
import {Routes,BrowserRouter} from 'react-router-dom'
import {Navigation} from './components/Navigation'
import {HomePage} from './pages/HomePage'
import {SearchPage} from './pages/SearchPage'
import {MovieDetailsPage} from './pages/MovieDetailsPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <route path="/" element={<HomePage/>} />
        <route path="/search" element={<SearchPage/>} />
        <route path="/movie/:id" element={<MovieDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

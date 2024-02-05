import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import NavBar from './pages/navBar';
import Home from './pages/Home'
import Container from './pages/Container'
function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Container/>}>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

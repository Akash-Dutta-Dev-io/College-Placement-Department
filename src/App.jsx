import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { Route,Routes } from 'react-router-dom'
import './Components/register.css';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
      </div>
  )
}

export default App

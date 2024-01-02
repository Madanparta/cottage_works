import React from 'react';
import { Routes,Route } from 'react-router-dom';
import WelcomePage from '../screen/WelcomePage';
import Register from '../screen/Register';
import Login from '../screen/Login';


const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default Main

import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import WelcomePage from '../screen/WelcomePage';
import Register from '../screen/Register';
import Login from '../screen/Login';
import Profile from '../screen/Profile';

import Dashbord from './Dashbord';
import Homepreneur from '../screen/Homepreneur';
import Invester from '../screen/Invester';
import Customer from '../screen/Customer';
import ForgotPassword from '../screen/ForgotPassword';
import Admin from '../screen/Admin';
import { _id } from '../utils/credential';
import PrivateRout from './PrivateRout';

const Main = () => {
  const [roles,setRole]=useState(null);
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage setRole={setRole}/>}/>
        <Route path='/register' element={<Register roles={roles}/>}/>
        <Route path='/login' element={<Login roles={roles}/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>

        {/* privat rout */}
        <Route path='/' element={<PrivateRout/>}>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/dashbord/admin' element={<Admin/>}/>
          <Route path='/dashbord/homepreneur' element={<Homepreneur/>}/>
          <Route path='/dashbord/invester' element={<Invester/>}/>
          <Route path='/dashbord/customer' element={<Customer/>}/>  
        </Route>
      </Routes>
    </>
  )
}

export default Main

import React from 'react';
import { Routes,Route } from 'react-router-dom';
import WelcomePage from '../screen/WelcomePage';
// import Register from '../screen/Register';
// import Login from '../screen/Login';
import Profile from '../screen/Profile';

import Dashbord from './Dashbord';
import Homepreneur from '../screen/Homepreneur';
import Invester from '../screen/Invester';
import Customer from '../screen/Customer';
import Admin from '../screen/Admin';
import PrivateRout from './PrivateRout';

const Main = ({roles,contact,setContact ,setAboutPage,aboutPage}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage roles={roles} contact={contact} setContact={setContact} aboutPage={aboutPage} setAboutPage={setAboutPage}/>}/>
        {/* <Route path='/register' element={<Register roles={roles}/>}/>
        <Route path='/login' element={<Login roles={roles}/>}/> */}
        {/* <Route path='/forgotpassword' element={<ForgotPassword roles={roles}/>}/> */}

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

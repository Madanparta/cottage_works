import React, { useState } from 'react';
import Login from './Login';

const ForgotPassword = ({roles}) => {
const [forgortPassword,setForgotPassword]=useState(true);


  return (
    <>
      <Login roles={roles} forgortPassword={forgortPassword}/>
    </>
  )
}

export default ForgotPassword

import React, { useEffect } from 'react'
import { token,role } from '../utils/credential';
const Dashbord = () => {

    useEffect(()=>{
        if(!token){
          localStorage.removeItem('user')
            window.location.assign('/login')
        }
    },[])
  return (
    <>
      {
        role === 'homepreneur' && window.location.assign('/dashbord/homepreneur')
      }
      {
        role === 'invester' && window.location.assign('/dashbord/invester')
      }
      {
        role === 'customer' && window.location.assign('/dashbord/customer')
      }
      {
        role === 'admin' && window.location.assign('/dashbord/admin')
      }
    </>
  )
}

export default Dashbord

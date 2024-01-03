import React, { useEffect } from 'react'
import { token,role } from '../utils/credential'
import Homepreneur from '../screen/Homepreneur'
import Invester from '../screen/Invester'
import Customer from '../screen/Customer'
import Admin from '../screen/Admin'

const Dashbord = () => {

    useEffect(()=>{
        if(!token){
            window.location.assign('/login')
        }
    },[])
  return (
    <>
      {
        role === 'homepreneur' && <Homepreneur/>
      }
      {
        role === 'invester' && <Invester/>
      }
      {
        role === 'customer' && <Customer/>
      }
      {
        role === 'admin' && <Admin/>
      }
    </>
  )
}

export default Dashbord

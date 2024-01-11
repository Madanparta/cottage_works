import React, { useEffect, useState } from 'react'
import { token,role, BASE_BACKEND_URL, _id } from '../utils/credential';
import toast from 'react-hot-toast';


const Dashbord = () => {

  // const [userData,setUserData]=useState([]);
  // const [role,setRole]=useState('')
  // const [approval,setApproval]=useState(false);

    useEffect(()=>{
        if(!token){
          localStorage.removeItem('user')
          window.location.assign('/login')
        }else{
          // getDatas();
          // findingApprovalOrNot()
        }
    },[token])

      // const getDatas = async()=>{
      //   try {
      //       const response = await fetch(`${BASE_BACKEND_URL}/api/users`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
      //       const data = await response.json()
      //       if(data){
      //         setUserData(data?.data)
      //       }
      //   } catch (error) {
      //       toast.error(error)
      //   }
      // }

      // const findingApprovalOrNot = () => {
      //   userData.find((info)=>{
      //     if(info._id === _id){
      //       console.log(info.role)
      //     }
      //   })
      // }

    // toast.success('your account approved..🚀') : toast.error("your account still pending hop's approved soon.!! 🤞 ")
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

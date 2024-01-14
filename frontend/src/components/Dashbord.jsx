import React, { useEffect, useState } from 'react'
import { token,_id,role, BASE_BACKEND_URL } from '../utils/credential';
import toast from 'react-hot-toast';
import Bean from '../images/Bean Eater-1s-200px.svg';


const Dashbord = () => {

  const [userData,setUserData]=useState([]);
  const [userole,setRole]=useState('')
  const [approval,setApproval]=useState(true);

    useEffect(()=>{
        if(!token){
          localStorage.removeItem('user')
          window.location.assign('/login')
        }else{
          getDatas();
        }
    },[token])

      const getDatas = async()=>{
        try {
            const response = await fetch(`${BASE_BACKEND_URL}/api/users`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
            const data = await response.json()
            if(data){
              setUserData(data?.data)
            }
        } catch (error) {
          toast.error(error)
        }
      }

      const findingRoleApprovalOrNot = () => {
        userData.find((info)=>{
          if(info._id === _id){
            setRole(info.role)
            setApproval(info.approved)
          }
        })
      }

      useEffect(()=>{
        if(!userData){
          window.location.assign('/login')
          localStorage.removeItem('user')
        }
        let setAppro,setRejec
        findingRoleApprovalOrNot()
        userole === 'admin' && window.location.assign(`/dashbord/${userole}`)
        if(approval){
          setAppro = setTimeout(()=>{
            role === userole && window.location.assign(`/dashbord/${userole}`)
          },500)
        }else{
          toast.error("your account still pending hop's approved soon.!! 🤞 ")
          setRejec = setTimeout(()=>{
            window.location.assign(`/dashbord/customer`)
          },1000) 
        }

        return () => {
          clearTimeout(setAppro)
          clearTimeout(setRejec)
        }
      },[userData])
  return (
    <section className='flex justify-center items-center w-full h-full'>
    <img src={Bean} alt="loading svg" />
    </section>
  )
}

export default Dashbord

import { useFormik } from 'formik';
import {signInValidation} from '../schema';
import {NavLink} from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { BASE_BACKEND_URL } from '../utils/credential';


const Login = ({roles,setLogStatus,logStatus}) => {
  const [forgortPassword,setForgotPassword] = useState(false);

  const initialValues={
    email:'',
    password:'',
}
const [passwordShow,setPasswordShow] = useState(false);

const {values,touched,handleBlur,handleChange,handleSubmit,errors} = useFormik({
    initialValues:initialValues,
    validationSchema:signInValidation,
    onSubmit:async(values,action)=>{
      try {
          let response;
          forgortPassword? response = await axios.put(`${BASE_BACKEND_URL}/api/pasforgt`,values) : response = await axios.post(`${BASE_BACKEND_URL}/api/log`,values);
            
            if(response.status === 200){
              !forgortPassword && localStorage.setItem('user',JSON.stringify(response.data));
              forgortPassword ? toast.success(`${roles} re-set password succesfully..🚀`) :toast.success(`${roles} loged succesfully..🚀`)
                action.resetForm();
                setTimeout(() => {
                    window.location.assign(forgortPassword ? '/login' :'/dashbord');
                }, 400);
            }
        } catch (error) {
            toast.error('somthing woring in registration', error);
        }
    }
})
// console.log(forgortPassword)
  return (
    <div className='absolute border bg-[#ffffffda] w-full h-full md:w-3/12 md:h-fit md:p-4 md:top-20 md:right-40 top-0 right-0 p-10 drop-shadow-lg shadow-2xl rounded-md hover:-translate-y-2 duration-500 ease-in-out'>
      <h2 className='text-2xl mt-4 '>{forgortPassword ? `re-set password (${roles})`:`Log your account (${roles})`}</h2>
      <form className='mt-5 text-center w-full' onSubmit={handleSubmit}>

        {/* email */}
        <div className='mb-5'>
            <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow shadow-green-500' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {
                errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
            }
        </div>

        {/* password */}
        <div className=' relative'>                     
            <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow shadow-green-500' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            <span className={`absolute top-1.5 right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye className='text-green-500' onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash className='text-green-500' onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
            {
                errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
            }
        </div>


        {/* form footer */}
        <section className='mb-3 md:pr-10 text-center'>
            <div className='w-full flex flex-col justify-end items-end gap-2 text-end'>
                <NavLink onClick={()=>setForgotPassword(!forgortPassword)} className='cursor-pointer inline-block hover:underline text-sm w-fit'>{forgortPassword? 'return to login':"forgot password.."}</NavLink>
                {!forgortPassword && <NavLink onClick={()=>setLogStatus(!logStatus)} className='cursor-pointer inline-block hover:underline text-sm w-fit'>you don't have account?</NavLink>}
            </div>
            <button className='mt-6 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-green-600 rounded-md text-white hover:bg-green-700 focus::bg-green-800 active:bg-green-900 duration-300 ease-in-out' type='submit'>{forgortPassword?"re-set password" :"Sign In"}</button>
        </section>

      </form>
    </div>
  )
}

export default Login

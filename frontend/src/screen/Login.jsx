import { useFormik } from 'formik';
import regLogPNG from '../images/login1.jpg';
import {signInValidation} from '../schema';
import {NavLink} from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { BASE_BACKEND_URL } from '../utils/credential';


const Login = ({roles}) => {
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
            const response = await axios.post(`${BASE_BACKEND_URL}/api/log`,values);
            
            if(response.status === 200){
              localStorage.setItem('user',JSON.stringify(response.data));
                toast.success(`${roles} loged succesfully..🚀`)
                action.resetForm();
                setTimeout(() => {
                    window.location.assign('/dashbord');
                }, 400);
            }
        } catch (error) {
            toast.error('somthing woring in registration', error);
        }
    }
})
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
      <section className='w-full h-[94.5vh]'>
        <img className='w-full h-full z-10 md:block hidden shadow-top-md' src={regLogPNG} alt='sml-scren-bg'/>

        <div className='absolute w-full h-full md:w-3/12 md:h-3/6 md:p-4 md:top-5 md:right-40 top-0 right-0 p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md'>
            <h2 className='text-2xl mt-4 text-white'>Create your account</h2>
            <form className='mt-5 text-center w-full text-white' onSubmit={handleSubmit}>

              {/* email */}
              <div className='mb-5'>
                  <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                  {
                      errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                  }
              </div>

              {/* password */}
              <div className='mb-5 relative'>                     
                  <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                  <span className={`absolute top-1.5 right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                  {
                      errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                  }
              </div>


              {/* form footer */}
              <section className='mb-5 md:pr-10 text-center'>
                  <div className='w-full text-end flex flex-col gap-2'>
                      <NavLink to={'/forgotpassword'} className='cursor-pointer inline-block hover:underline text-white text-sm'>forgot password..</NavLink>
                      <NavLink to={'/register'} className='cursor-pointer inline-block hover:underline text-white text-sm'>you don't have account?</NavLink>
                  </div>
                  <button className='mt-6 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Sign In</button>
              </section>

            </form>
        </div>
      </section>
    </section>
  )
}

export default Login

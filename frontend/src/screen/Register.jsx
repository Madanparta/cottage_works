import { useFormik } from 'formik';
import {signupValidation} from '../schema';
import {NavLink} from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { BASE_BACKEND_URL } from '../utils/credential';


const Register = ({roles,setLogStatus,logStatus}) => {

    const initialValues={
        name:'',
        email:'',
        phone_number:'',
        age:'',
        password:'',
        address:'',
        city:'',
        district:'',
        state:'',
        role:roles,
    }

    const [passwordShow,setPasswordShow] = useState(false);

    const {values,touched,handleBlur,handleChange,handleSubmit,errors} = useFormik({
        initialValues:initialValues,
        validationSchema:signupValidation,
        onSubmit:async(values,action)=>{
            try {
                const response = await axios.post(`${BASE_BACKEND_URL}/api/reg`,values);
                
                if(response.status === 200){
                    toast.success(response.data.success)
                    action.resetForm();
                    setTimeout(() => {
                        window.location.assign('/login')
                    }, 400);
                }
            } catch (error) {
                toast.error('somthing woring in registration', error);
            }
        }
    })
  return (
    <div className='absolute border bg-[#ffffffda] w-full h-full md:w-fit md:h-fit md:p-4 md:top-5 md:right-40 top-0 right-0 p-10 rounded-md shadow-2xl hover:-translate-y-2 duration-500 ease-in-out'>
            <h2 className='text-2xl mt-4'>Create your account ({roles})</h2>
            <form className='mt-5 text-center w-full' onSubmit={handleSubmit}>

                {/* name */}
                <div className='mb-3 w-full'>
                    <input type='text' placeholder='Name' name='name' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.name && touched.name ? (<small className='block text-start p-1 text-red-500'>{errors.name}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* email */}
                <div className='md:flex'>
                    <div className='mb-3'>
                        <input type='email' placeholder='email@gmail.com' name='email' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.email && touched.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>

                    {/* password */}
                    <div className='mb-3 relative'>                     
                        <input type={`${passwordShow?"text":"password"}`} placeholder='*******' name='password' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <span className={`absolute top-1.5 right-3 text-gray-600 cursor-pointer ${errors.password && touched.password ?"top-[15%]":""}`}>{passwordShow ?<FaEye className='text-purple-500' onClick={()=>setPasswordShow(!passwordShow)}/>:<FaEyeSlash className='text-purple-500' onClick={()=>setPasswordShow(!passwordShow)}/>}</span>
                        {
                            errors.password && touched.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>
                </div>

                {/* phone number */}
                <div className='md:flex'>
                    <div className='mb-3'>
                        <input type='tel' placeholder='+91 ..........' name='phone_number' autoComplete='off' pattern="[0-9]{10}" className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.phone_number && touched.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>

                    {/* age */}
                    <div className='mb-3'>
                        <input type='number' min='18' placeholder='age' name='age' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.age && touched.age ? (<small className='block text-start p-1 text-red-500'>{errors.age}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                        }
                    </div>

                </div>

                {/* address */}
                <div className='mb-3'>
                    <input type='text' placeholder='#address' name='address' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.address} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.address && touched.address ? (<small className='block text-start p-1 text-red-500'>{errors.address}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* city */}
                <div className='mb-3'>
                    <input type='text' placeholder='City' name='city' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.city && touched.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* Distict */}
                <div className='mb-3'>
                    <input type='text' placeholder='District' name='district' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.district && touched.district ? (<small className='block text-start p-1 text-red-500'>{errors.district}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* state */}
                <div className='mb-3'>
                    <input type='text' placeholder='State' name='state' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm shadow-purple-500' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.state && touched.state ? (<small className='block text-start p-1 text-red-500'>{errors.state}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>


                {/* form footer */}
                <section className='mb-3 md:pr-10'>
                    <div className='w-full text-end'>
                        <NavLink onClick={()=>setLogStatus(!logStatus)} className='cursor-pointer inline-block hover:underline text-black'>already have an account?</NavLink>
                    </div>
                    <button className='mt-6 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-purple-600 rounded-md text-white hover:bg-purple-700 focus::bg-red-800 active:bg-purple-900 duration-300 ease-in-out' type='submit'>Submit registration</button>
                </section>

            </form>
        </div>
  )
}

export default Register

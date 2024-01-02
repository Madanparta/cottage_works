import { useFormik } from 'formik';
import regLogPNG from '../images/login1.jpg';
import {signupValidation} from '../schema';
import {NavLink} from 'react-router-dom';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

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
}

const Register = () => {
    const [passwordShow,setPasswordShow] = useState(false);

    const {values,touched,handleBlur,handleChange,handleSubmit,errors} = useFormik({
        initialValues:initialValues,
        validationSchema:signupValidation,
        onSubmit:async(values,action)=>{

        }
    })
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
      <section className='w-full h-[94.5vh]'>
        <img className='w-full h-full z-10 md:block hidden shadow-top-md' src={regLogPNG} alt='sml-scren-bg'/>

        <div className='absolute w-full h-full md:w-fit md:h-fit md:p-4 md:top-5 md:right-40 top-0 right-0 p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md'>
            <h2 className='text-2xl mt-4 text-white'>Create your account</h2>
            <form className='mt-5 text-center w-full'>

                {/* name */}
                <div className='mb-5 w-full'>
                    <input type='text' placeholder='Name' name='name' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.name && touched.name ? (<small className='block text-start p-1 text-red-500'>{errors.name}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* email */}
                <div className='md:flex'>
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
                </div>

                {/* phone number */}
                <div className='mb-5'>
                    <input type='number' placeholder='+91 ..........' name='phone_number' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.phone_number && touched.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* address */}
                <div className='mb-5'>
                    <input type='text' placeholder='#address' name='address' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.address && touched.address ? (<small className='block text-start p-1 text-red-500'>{errors.address}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* city */}
                <div className='mb-5'>
                    <input type='text' placeholder='City' name='city' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.city && touched.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* Distict */}
                <div className='mb-5'>
                    <input type='text' placeholder='District' name='district' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.district} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.district && touched.district ? (<small className='block text-start p-1 text-red-500'>{errors.district}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>

                {/* state */}
                <div className='mb-5'>
                    <input type='text' placeholder='State' name='state' autoComplete='off' className='w-full border-b-2 bg-transparent px-2 py-1 outline-none rounded-md shadow-sm' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                    {
                        errors.state && touched.state ? (<small className='block text-start p-1 text-red-500'>{errors.state}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
                    }
                </div>


                {/* form footer */}
                <section className='mb-5 md:pr-10'>
                    <div className='w-full text-end'>
                        <NavLink to={'/login'} className='cursor-pointer inline-block hover:underline text-white'>already have an account?</NavLink>
                    </div>
                    <button className='mt-6 mb-2 drop-shadow-md w-[80%] py-1 hover:tracking-widest text-md bg-red-600 rounded-md text-white hover:bg-red-700 focus::bg-red-800 active:bg-red-900 duration-300 ease-in-out' type='submit'>Submit registration</button>
                </section>

            </form>
        </div>
      </section>
    </section>
  )
}

export default Register

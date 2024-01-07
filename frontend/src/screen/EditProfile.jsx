import { useFormik } from 'formik';
import { userEditingValidation } from '../schema';
import {  useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { BASE_BACKEND_URL, _id, name,userData } from '../utils/credential';
import toast from 'react-hot-toast';

const initialValues = {
  name:userData.name,
  age:userData.age,
  district:userData.district,
  role:userData.role,
  state:userData.state,
  email:userData.email,
  password:'',
  phone_number:userData.phone_number,
  address:userData.address,
  city:userData.city,
};
const EditProfile = ({isEditing,setIsEditing}) => {
  const {id} = useParams();

  const {errors,handleBlur,handleChange,handleSubmit,values} = useFormik({
    initialValues:initialValues,
    validationSchema:userEditingValidation,
    onSubmit: async(values,action)=>{
      try {
        await Axios.put(`${BASE_BACKEND_URL}/api/edit/${id}`,values)
            .then((res)=>{
                localStorage.setItem("user",JSON.stringify(res.data));  
            });
            toast.success(" User editing updated successfully");
            action.resetForm()
        
      } catch (error) {
        toast.error('Error during editing profile:', error);
      }
    }
  })

  const backProfle = () => {
    setIsEditing(!isEditing);
    window.location.assign(`/profile/${_id}`)
  }
  return (
    <>

            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>

              <label htmlFor="name">
                Name : <input type='text' id='name' name='name' placeholder='Name' disabled className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={name}/>
              {
                errors.name ? (<small className='block text-start p-1 text-red-500'>{errors.name}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="role">
                Role : <input type='text' id='role' name='role' placeholder='role' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm capitalize' disabled value={userData.role}/>
                {
                errors.role ? (<small className='block text-start p-1 text-red-500'>{errors.role}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>
              
              <label htmlFor="email">
                Email : <input type='email' id='email' name='email' placeholder='updatemail@gmail.com' disabled className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.email ? (<small className='block text-start p-1 text-red-500'>{errors.email}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="password">
                Password : <input type='password' id='password' name='password' placeholder='password' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.password ? (<small className='block text-start p-1 text-red-500'>{errors.password}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="phone_number">
                Phone Number : <input type='number' id='phone_number' name='phone_number' placeholder='+91 ..........' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.phone_number} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.phone_number ? (<small className='block text-start p-1 text-red-500'>{errors.phone_number}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="address">
                Address : <input type='text' id='address' name='address' placeholder='address' className=' capitalize border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={values.address} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.address ? (<small className='block text-start p-1 text-red-500'>{errors.address}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="city">
                City : <input type='text' id='city' name='city' placeholder='City' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm capitalize' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
              {
                errors.city ? (<small className='block text-start p-1 text-red-500'>{errors.city}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="district">
                District : <input type='text' id='district' name='district' placeholder='District' disabled className='capitalize border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm' value={userData.district}/>
                {
                errors.district ? (<small className='block text-start p-1 text-red-500'>{errors.district}</small>):(<small className='block text-start p-1 opacity-0'>console</small>)
              }
              </label>

              <label htmlFor="state">
                State : <input type='text' id='state' name='state' placeholder='State' className='border-b-2 px-2 py-1 outline-none rounded-md shadow-sm text-sm capitalize' disabled value={userData.state}/>
              </label>

              <button type='submit' className='mt-8 duration-200 ease-in-out w-full py-1 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 text-white font-semibold shadow-md'>Update Edited Profile</button>
              <p  onClick={backProfle} className="transition duration-200 ease-in-out cursor-pointer text-center w-full px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600 shadow-md">Goto profile</p>
            </form>
            </>
  )
}

export default EditProfile

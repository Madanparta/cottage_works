import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { token } from '../utils/credential';
import { CiLogout } from "react-icons/ci";
import { userData } from '../utils/credential';
import EditProfile from './EditProfile'

const Profile = () => {
    const navigate = useNavigate(); 
    const [isEditing,setIsEditing]=useState(false);
    const { role,_id } = userData;
  
    // console.log(_id)
  
    const back_to_dashbord =()=>{
      navigate('/dashbord')
    }
  
    const handleEditClick = () => {
      setIsEditing(!isEditing);
    }
    const logOut =()=>{
      localStorage.removeItem('user')
      window.location.assign('/login')
    }
  return (
    <section className='h-full w-full p-10'>
      <div className='flex flex-col gap-2 mb-5'>
        <p  onClick={back_to_dashbord} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-gray-400 text-white font-bold hover:bg-gray-500 active:bg-gray-600  ${isEditing?"cursor-not-allowed":"cursor-pointer"}`}>back to dashbord</p>
        <p  onClick={logOut} className={`transition duration-200 ease-in-out cursor-pointer w-fit px-2 py-1 rounded-md bg-red-400 text-white font-bold hover:bg-red-500 active:bg-red-600  ${isEditing?"cursor-not-allowed":"cursor-pointer"}`} title='logout'><CiLogout className='text-xl'/></p>
      </div>

      <div className='p-5 flex justify-center'>

        <div className=''>
          <h1 className='text-2xl mb-5 font-semibold'>User <span className='capitalize'>{role}</span> Profile {isEditing && 'editing.'}</h1>

          <div className='flex flex-col'>
            {!isEditing ?
            (<> <p className='text-lg font-light mt-2 capitalize'>Name : {userData.name}</p>
            <p className='text-lg font-light mt-2 capitalize'>Role : {userData.role}</p>
            <p className='text-lg font-light mt-2'>Phone number : {userData.phone_number}</p>
            <p className='text-lg font-light mt-2'>Email : {userData.email}</p>
            <p className='text-lg font-light mt-2 capitalize'>Address : #{userData.address},{userData.city},{userData.district}</p>
            <p className='text-lg font-light mt-2 capitalize'>State : {userData.state}</p> 
            {!isEditing?<Link onClick={handleEditClick} to={`/profile/${_id}`} className='mt-8 text-center duration-200 ease-in-out border w-full py-1 rounded-md bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 text-white font-semibold shadow-md'>Edit Profile</Link>:"Edit Profile"}
            </>):
            (
                <EditProfile isEditing={isEditing} setIsEditing={setIsEditing}/>
            )}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Profile

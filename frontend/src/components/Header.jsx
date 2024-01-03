import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { userData } from "../utils/credential";


const Header = () => {
  const [showManu,setShowManu]=useState(false);
  return (
    <section className='w-full flex justify-between items-center border py-2 px-4 sm:px-4 md:px-10 sticky top-0 left-0 shadow-lg bg-white z-50'>
      <div className=''>
        <h1 className="text-2xl drop-shadow font-semibold cursor-pointer">Cottage works</h1>
      </div>

      <nav className="md:hidden">
        <HiMiniBars3BottomRight className="text-3xl drop-shadow cursor-pointer" onClick={()=>setShowManu(!showManu)} />
      </nav>
      {/* mobile size nav */}
    {showManu && <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center flex-col gap-5 capitalize md:hidden bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white">
      <TbArrowForwardUpDouble onClick={()=>setShowManu(!showManu)} className="text-2xl cursor-pointer font-light drop-shadow" />
      {userData.token? 
      <>
        <p className="flex justify-center items-center gap-2 capitalize cursor-pointer">{userData.name}<HiUser /></p>
        <NavLink className="hover:font-medium hover:underline drop-shadow cursor-pointer">logOut</NavLink>
      </> 
      :
      <>
        <NavLink to='register' onClick={()=>setShowManu(!showManu)} className="hover:font-medium hover:underline drop-shadow cursor-pointer">register</NavLink>
        <NavLink to='login' onClick={()=>setShowManu(!showManu)} className="hover:font-medium hover:underline drop-shadow cursor-pointer">login</NavLink>
      </>}
    </div>}

      <nav className='text-lg font-extralight drop-shadow hidden md:block'>
        {userData.token? <p className="flex justify-center items-center gap-2 capitalize cursor-pointer">{userData.name}<HiUser /></p> :<p><NavLink to='register' className="cursor-pointer hover:text-blue-800">register</NavLink>/<NavLink to='login' className="cursor-pointer hover:text-blue-800">login</NavLink></p>}
      </nav>
    </section>
  )
}

export default Header

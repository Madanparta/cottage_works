import { useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { _id, token, userData } from "../utils/credential";


const Header = ({roles,setRole,contact,setContact,setAboutPage,aboutPage}) => {
  const [showManu,setShowManu]=useState(false);

  const logoClickHandle = () => {
    if(token){
      window.location.assign('/dashbord')
    }else{
      window.location.assign('/')
    }
  }

  const handleHomepreneurButton =() => {
    setRole('homepreneur');
    setContact(false);
    setAboutPage(false)
  }
  const handleInvesterButton =() => {
    setRole('invester');
    setContact(false);
    setAboutPage(false)
  }
  const handleCustomerButton =() => {
    setRole('customer');
    setContact(false);
    setAboutPage(false)
  }
  const handleContactUs =() => {
    setContact(!contact);
    setAboutPage(false)
  }
  const handleAboutPage =() => {
    setAboutPage(!aboutPage);
    setContact(false);
  }
  return (
    <section className='w-full flex justify-between items-center border py-2 px-4 sm:px-4 md:px-10 sticky top-0 left-0 shadow-lg bg-white z-50'>
      <div className=''>
        <h1 onClick={logoClickHandle} className="text-2xl drop-shadow font-semibold cursor-pointer">Cottage works</h1>
      </div>

       {/* mobile size nav */}
      <nav className="md:hidden">
        <HiMiniBars3BottomRight className="text-3xl drop-shadow cursor-pointer" onClick={()=>setShowManu(!showManu)} />
      </nav>
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
        {userData.token? <NavLink to={`/profile/${_id}`} className="flex justify-center items-center gap-2 capitalize cursor-pointer">{userData.name}<HiUser /></NavLink> :
        (<div className="flex flex-row gap-3">
          <NavLink onClick={handleAboutPage} className="transition rounded-sm py-0 px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100">About</NavLink>
          <NavLink onClick={handleContactUs} className="transition rounded-sm py-0 px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100">Contact us</NavLink>
          <NavLink to='/' onClick={handleHomepreneurButton} className="transition rounded-sm py-0 px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100">Homepreneur</NavLink>
          <NavLink to='/' onClick={handleInvesterButton} className="transition rounded-sm py-0 px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100">Investor</NavLink>
          <NavLink to='/' onClick={handleCustomerButton} className="transition rounded-sm py-0 px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100">Customer</NavLink>
          {/* <p className="transition py-0 rounded-sm px-2 ease-in-out duration-300 hover:text-white hover:bg-indigo-500 hover:-translate-y-1 hover:scale-100"><NavLink to='register' className="cursor-pointer hover:text-blue-800">register</NavLink>/<NavLink to='login' className="cursor-pointer hover:text-blue-800">login</NavLink></p> */}
          </div>)}
      </nav>
    </section>
  )
}

export default Header

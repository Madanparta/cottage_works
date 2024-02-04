import { useState } from 'react';
import welcomepge from '../images/welcomepge.jpg';
import Login from './Login';
import Register from './Register';
import ContactUs from './ContactUs';
import About from './About';

const WelcomePage = ({roles,contact,setContact,setAboutPage,aboutPage}) => {
  const [logStatus,setLogStatus]=useState(false)

  
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
        <section className='w-full h-[94.5vh]'>
            <img className='w-full h-full z-10 md:block hidden shadow-top-md object-contain' src={welcomepge} alt='sml-scren-bg'/>

            <div className='absolute top-1/3 md:top-10 left-10 md:left-10 text-center p-5'>
                <h2 className='text-3xl font-mono drop-shadow-xl md:text-8xl'>Cottage works</h2>
                <p className='text-xl font-mono drop-shadow md:text-3xl'>Chase your path..</p>
            </div>

          {!logStatus?<Login roles={roles} setLogStatus={setLogStatus} logStatus={logStatus}/>:<Register setLogStatus={setLogStatus} logStatus={logStatus} roles={roles}/>}

          <div className={`absolute top-0 right-0 bg-purple-400 rounded-bl-[100%] text-center p-5 ${contact?'w-full h-4/6':''}`} style={{ opacity: contact ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            {contact && <ContactUs setContact={setContact}/>}
          </div>

          <div className={`absolute top-0 right-0 bg-indigo-500 rounded-bl-[100%] text-center p-5 ${aboutPage?'w-full h-4/6':''}`} style={{ opacity: aboutPage ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            {aboutPage && <About/>}
          </div>
        </section>
    </section>
  )
}

export default WelcomePage

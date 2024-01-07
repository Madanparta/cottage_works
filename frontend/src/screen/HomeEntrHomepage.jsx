import React from 'react'
import { HomeEntrpID, userData } from '../utils/credential'

const HomeEntrHomepage = () => {
    const {name}=userData;
  return (
    <>
      <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl mb-5">hello {name}!!. your ID : {HomeEntrpID}</h2>

      <p style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-lg mb-5">congratulations on you register <span className='cursor-pointer hover:underline'>"home entrepreneur"</span></p>
      <p style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-lg mb-5">You can present your ideas, view investor offers or your products.</p>

      <p style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-lg mb-5 text-green-700">Make your choice!!</p>
    </>
  )
}

export default HomeEntrHomepage

import React, { useEffect, useState } from 'react'
import InvesterSearch from './InvesterSearch';
import SearchEntpreneur from './SearchEntpreneur';
import SearchEntpreneurIdea from './SearchEntpreneurIdea';
import ViewBusinessFundReq from './ViewBusinessFundReq';
import { BASE_BACKEND_URL, token } from '../utils/credential';
import toast from 'react-hot-toast';

const Invester = () => {
  const [selectedComponent,setSelectedComponent]=useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component)
  }

// SearchEntpreneur
  const [findingEntr,setFindEntr]=useState([]);
  const [entrSearch,setEntrSearch]=useState();

  const findingEntreprueData = async () => {
      try {
          const response = await fetch(`${BASE_BACKEND_URL}/api/users`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
          const entprData = await response.json();

          if(entprData){
              setFindEntr(entprData?.data)
          }
      } catch (error) {
          toast.error('something wrong.! '+error)
      }
  }


// SearchEntpreneurIdea
  const [entrepreneurIdea,setEntrepreneurIdea]=useState([])

  const findingEntreprue = async () => {
      try {
          const response = await fetch(`${BASE_BACKEND_URL}/api/homeEntr`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
          const homeEntr = await response.json();

          if(homeEntr){
              setEntrepreneurIdea(homeEntr?.home)
          }
      } catch (error) {
          toast.error('something wrong.! '+error)
      }
  }

  useEffect(()=>{
      if(token){
        findingEntreprueData()
          findingEntreprue()
      }else{
          window.location.assign('/login')
          localStorage.removeItem('user')
      }
  },[token])

  return (
    <section className='w-full h-[94.5vh] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>

        <section className='w-full h-[94.5vh] flex'>
            {/* side bar */}
            <aside className='w-2/12 h-full bg-gradient-to-r from-gray-100 to-gray-300 shadow flex flex-col items-center px-3 pt-10 pb-6'>

                {/* category types... */}
                <div className='w-full h-[90%] py-2'>
                    <h2 onClick={()=>handleComponentClick(null)} className='text-xl drop-shadow w-full text-center py-2 rounded-t-md bg-blue-700 cursor-pointer'>Invester</h2>

                    <ul className='capitalize text-center text-black text-lg w-full h-[90%] overflow-y-auto '>
                      <li onClick={()=>handleComponentClick(<SearchEntpreneur findingEntr={findingEntr} entrSearch={entrSearch} setEntrSearch={setEntrSearch}/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Search Homepreur</li>
                      <li onClick={()=>handleComponentClick(<SearchEntpreneurIdea entrepreneurIdea={entrepreneurIdea} findingEntr={findingEntr}/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Check Homepreur idea</li>
                      <li onClick={()=>handleComponentClick(<ViewBusinessFundReq entrepreneurIdea={entrepreneurIdea} findingEntr={findingEntr}/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">View Business fund request</li>
                    </ul>
                </div>

            </aside>

            {/* main section */}
            <section className='w-10/12 h-full'>
                
                {/* welcome face.. */}
                <div className='w-[70%] h-full pt-10'>
                  {
                    selectedComponent === null ? <InvesterSearch/> : selectedComponent
                  }
                </div>
            </section>
        </section>

    </section>
  )
}

export default Invester

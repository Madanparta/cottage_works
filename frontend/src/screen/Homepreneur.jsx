import { useContext, useEffect, useState } from "react"
import PresentIdea from "./PresentIdea"
import HomeEntrHomepage from "./HomeEntrHomepage";
import HomeEntBusinessCateg from "./HomeEntBusinessCateg";
import HomeEnterBusinessOffers from "./HomeEnterBusinessOffers";
import HomeEnterSellProduct from "./HomeEnterSellProduct";
import { BASE_BACKEND_URL, _id, token } from "../utils/credential";
import toast from "react-hot-toast";


const Homepreneur = () => {
  const [selectedComponent,setSelectedComponent]=useState(null);
  const [categories,setCategories]=useState()
  const [selectBusinessCateg,setSelectBusinessCateg]=useState(null)

  const handleComponentClick = (component) => {
    setSelectedComponent(component)
  }

  useEffect(()=>{
    if(token){
      getBusinessCategory()
    }else{
        window.location.assign('/login')
    }
  },[categories])

  const getBusinessCategory = async()=>{
    try {
        const response = await fetch(`${BASE_BACKEND_URL}/admin/category`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
        const data = await response.json()
        if(data){
            setCategories(data?.data[0]?.category)
        }
    } catch (error) {
        toast.error(error)
    }
  }



  return (
    <section className='w-full h-[94.5vh] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>

        <section className='w-full h-[94.5vh] flex'>
            {/* side bar */}
            <aside className='w-full md:w-2/12 h-full bg-gradient-to-r from-gray-100 to-gray-300 shadow flex flex-col items-center px-3 pt-10 pb-6'>

                {/* category types... */}
                <div className='w-full h-[90%] py-2'>
                    <h2 onClick={()=>handleComponentClick(null)} className='text-xl drop-shadow w-full text-center py-2 rounded-t-md bg-blue-700 cursor-pointer'>Homepreneur</h2>

                    <ul className='capitalize text-center text-black text-lg w-full h-[90%] overflow-y-auto '>
                      {/* <li onClick={()=>handleComponentClick(<HomeEntBusinessCateg categories={categories} setSelectBusinessCateg={setSelectBusinessCateg}/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Business Categories</li> */}
                      <li onClick={()=>handleComponentClick(<PresentIdea selectBusinessCateg={selectBusinessCateg}/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Present My Idea</li>
                      <li onClick={()=>handleComponentClick(<HomeEnterBusinessOffers/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">View Invester Offers</li>
                      <li onClick={()=>handleComponentClick(<HomeEnterSellProduct/>)} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Sell Products</li>
                    </ul>
                </div>

            </aside>

            {/* main section */}
            <section className='md:w-10/12 h-full'>
                
                {/* welcome face.. */}
                <div className='w-[70%] h-full pt-10'>
                  {
                    selectedComponent === null ? <HomeEntrHomepage/> : selectedComponent
                  }
                </div>
            </section>
        </section>

    </section>
  )
}

export default Homepreneur

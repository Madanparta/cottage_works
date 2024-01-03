import { RiSendPlaneFill } from "react-icons/ri";
import AdminBusinessCategory from "./AdminBusinessCategory";
import { useState } from "react";
import toast from 'react-hot-toast';
import { BASE_BACKEND_URL, token } from "../utils/credential";

const Admin = () => {
    const [categoriesValue,setCategoriesValue]=useState({
        name_of_category:[''],
    })

    const inputCategoryHandling=async(e)=>{
        e.preventDefault()
        try {
            // console.log(categoriesValue)
            // const response = await fetch(`${BASE_BACKEND_URL}/api/category`,{method:'POST',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify({categoriesValue:categoriesValue})})
            // const data = await response.json()
            // console.log(data)
            // if(data){}
        }catch (error) {
            toast.error(error)
        }
    }

  return (
    <section className='w-full h-[94.5vh] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>

        <section className='w-full h-[94.5vh] flex'>
            {/* side bar */}
            <aside className='w-2/12 h-full bg-gradient-to-r from-gray-100 to-gray-300 shadow flex flex-col items-center px-3 pt-10 pb-6'>

                {/* category types... */}
                <div className='w-full h-[90%] py-2'>
                    <h2 className='text-xl drop-shadow w-full text-center py-2 rounded-t-md bg-blue-700 '>Create Business Categories.</h2>

                    {/* sub categories' */}
                    <div className='text-lg w-full h-[90%] overflow-y-auto text-center text-black'>
                        <div className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointer">
                            <AdminBusinessCategory/>
                        </div>
                    </div>
                </div>

                {/* create category types. */}
                <div className='w-full h-[10%] py-4'>

                    <form onSubmit={inputCategoryHandling} className="w-full h-full flex flex-row">
                        <input className='w-full text-black text-lg ps-3 rounded-s-md drop-shadow cursor-pointer outline-none' type="text" placeholder='Enter Categories..' name='name_of_category' id='name_of_category' value={categoriesValue.name_of_category} onChange={(e)=>setCategoriesValue({...categoriesValue,name_of_category:e.target.value})}/>
                        <button className='px-2 bg-blue-700 rounded-r-md drop-shadow focus:bg-blue-800 active:bg-blue-900' type='submit' ><RiSendPlaneFill className="text-4xl" /></button>
                    </form>                    
                </div>

            </aside>

            {/* main section */}
            <section className='w-10/12 h-full'>
                
            </section>
        </section>

    </section>
  )
}

export default Admin

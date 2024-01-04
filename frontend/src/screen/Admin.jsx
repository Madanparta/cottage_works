import { RiSendPlaneFill } from "react-icons/ri";
import AdminBusinessCategory from "./AdminBusinessCategory";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { BASE_BACKEND_URL, token } from "../utils/credential";

const Admin = () => {
    const [newCategory,setNewCategory]=useState('');
    const [categories,setCategories]=useState([])

    const inputCategoryHandling=async(e)=>{
        e.preventDefault()
        console.log(newCategory)
        try {
            const response = await fetch(`${BASE_BACKEND_URL}/admin/category`,{method:'POST',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify({category:newCategory})})
            const data = await response.json()
            if(data){
                toast.success(`${newCategory} created succesfully..`)
                setNewCategory('')
            }
        }catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        if(token){
            getCategories()
        }else{
            window.location.assign('/login')
        }
    },[newCategory])

    const getCategories = async()=>{
        try {
            const response = await fetch(`${BASE_BACKEND_URL}/admin/category`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
            const data = await response.json()
            if(data){
                setCategories(data?.data[0]?.category)
                // console.log(data.data[0].category)
            }
        } catch (error) {
            toast.error(error)
        }
    }
    // console.log(categories)
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
                        {
                            categories && categories.map((category,index)=>(
                                <div key={index} className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer">
                                    <AdminBusinessCategory category={category}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* create category types. */}
                <div className='w-full h-[10%] py-4'>

                    <form onSubmit={inputCategoryHandling} className="w-full h-full flex flex-row">
                        <input className='w-full text-black text-lg ps-3 rounded-s-md drop-shadow cursor-pointer outline-none' type="text" placeholder='Enter Categories..' name='name_of_category' id='name_of_category' value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}/>
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

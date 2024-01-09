import toast from 'react-hot-toast';
import { BASE_BACKEND_URL, role, token } from '../utils/credential';
import { useEffect, useState } from 'react';

const SearchEntpreneur = ({findingEntr,entrSearch,setEntrSearch}) => {


    const roleEntr = findingEntr && findingEntr.filter((info)=>info.role === 'homepreneur');
    const searchEntr = findingEntr && roleEntr.filter((sr)=>sr.name.toLowerCase().includes(entrSearch && entrSearch.toLowerCase()) || sr.email.toLowerCase().includes(entrSearch && entrSearch.toLowerCase()))

    // searching..

    if(findingEntr === undefined){
        return window.location.assign('/login')
    } 
        
  return (
    <section className='w-full md:w-[142%] h-full'>
        <div className="w-full h-fit px-2 py-3  flex justify-center pb-20">
            <div className="w-9/12 md:w-6/12 h-fit flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 outline-none rounded-l-lg border-r-2 border-gray-600 px-5 py-1 bg-gray-50 shadow-sm text-black"
                name="search"
                id="search"
                value={entrSearch}
                onChange={(e)=>setEntrSearch(e.target.value)}
              />
              <button
                className="bg-gray-700 h-10 px-3 rounded-r-lg shadow-md font-bold hover:bg-gray-600 active:bg-gray-500 duration-100 ease-in-out"
                type="submit"
              >
                Search
              </button>
            </div>
        </div>

        {/* table */}
        <div className="w-full h-fit border bg-white relative text-black">
            <table className='w-full h-full'>
                <thead className='w-full h-full'>
                    <tr className='border'>
                        <th className='w-1/12 border py-1'>SL No</th>
                        <th className='w-2/12 border py-1'>Name</th>
                        <th className='w-1/12 border py-1'>Age</th>
                        <th className='w-3/12 border py-1'>Email</th>
                        <th className='w-2/12 border py-1'>Phone Number</th>
                        <th className='w-3/12 border py-1'>Address</th>
                    </tr>
                </thead>
                <tbody className='w-full h-full text-center'>
                    {
                        roleEntr.map((info,index)=>(
                            <tr key={info._id} className='border'>
                                <td className='w-1/12 border'>{index}</td>
                                <td className='w-2/12 border'>{info.name}</td>
                                <td className='w-1/12 border'>{info.age}</td>
                                <td className='w-3/12 border'>{info.email}</td>
                                <td className='w-2/12 border'>{info.phone_number}</td>
                                <td className='w-3/12 border overflow-hidden'>#{info.address},{info.city},{info.district},{info.state}.</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default SearchEntpreneur

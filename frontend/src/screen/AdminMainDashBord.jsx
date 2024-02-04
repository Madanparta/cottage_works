import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BASE_BACKEND_URL, token } from '../utils/credential';


const AdminMainDashBord = ({info,index,feedback,feedbackShow}) => {
  const {_id,name,role,email} = info;
  const [approval,setApproval]=useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const updateApproval = async()=> {
    try {
      const requestSend = await fetch(`${BASE_BACKEND_URL}/api/approval/${_id}`,{method:'PUT',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify({approved:approval})})
      const data = await requestSend.json();

      if(data){
        toast.success('succesfully ',data.approved)
      }
    } catch (error) {
      toast.error('someting went to worng.!!',error);
    }
  }

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };


  if(role === 'admin'){return}
  // ;setNotification('your account approved..🚀');
  return (
    <>
        <td className="border w-1/12 py-1 hover:bg-gray-700 active:bg-gray-600">{index}</td>
        <td className="border w-2/12 py-1 hover:bg-gray-700 active:bg-gray-600">{name}</td>
        <td className="border w-1/12 py-1 hover:bg-gray-700 active:bg-gray-600">{role === 'homepreneur' ? _id && `HOM${_id.slice(-4)}` : role === 'invester' ? _id && `INV${_id.slice(-4)}` : _id && `CUT${_id.slice(-4)}`}</td>
        <td className="border w-2/12 py-1 hover:bg-gray-700 active:bg-gray-600">{role}</td>
        <td className="border w-2/12 py-1 hover:bg-gray-700 active:bg-gray-600">{email}</td>
        <td className="border w-2/12 py-1 whitespace-nowrap">
          <button onClick={()=>{setApproval(true);updateApproval()}} className={`py-1 px-4 bg-green-700 hover:bg-green-800 active:bg-green-900 text-white rounded drop-shadow mx-2 ${approval === true && 'disabled:opacity-15 hover:cursor-not-allowed'}`}>Approval</button>
          <button onClick={()=>{setApproval(false);updateApproval()}} className={`py-1 px-4 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white rounded drop-shadow mx-2 ${approval === false && 'disabled:opacity-15 hover:cursor-not-allowed'}`}>Reject</button>
        </td>
        <td onClick={openDialog} className="border w-2/12 whitespace-nowrap py-1 hover:bg-gray-700 active:bg-gray-600">{role === 'homepreneur' ? feedback.feedback && feedback.feedback.length >= 20 ? feedback.feedback.slice(0,20)+"..." : feedback.feedback : "---"}</td>


        {feedback?.feedback !== undefined ? isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center text-black">
          <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeDialog}></div>
          <div className="bg-white p-8 rounded shadow-lg z-10">
            <h1 className="text-2xl mb-4">Customer Feedback</h1>
            <p>{feedback?.feedback}</p>
            <button onClick={closeDialog} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      ):""}
    </>
  )
}

export default AdminMainDashBord




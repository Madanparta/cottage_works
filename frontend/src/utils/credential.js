// export const BASE_BACKEND_URL = 'https://cottage-works.onrender.com'

export const BASE_BACKEND_URL = 'http://localhost:5000';

export const {token,role,_id,name} = JSON.parse(localStorage.getItem("user")) || {token:null}

export const userData = JSON.parse(localStorage.getItem("user")) || { user: null }

export const HomeEntrpID = _id && `HOM${_id.slice(-4)}` ;
export const InvesterID = _id && `INV${_id.slice(-4)}` ;
export const CustomerID = _id && `CUT${_id.slice(-4)}` ;
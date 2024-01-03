export const BASE_BACKEND_URL = 'http://localhost:5000';

export const {token,role} = JSON.parse(localStorage.getItem("user")) || {token:null}

export const userData = JSON.parse(localStorage.getItem("user")) || { user: null }
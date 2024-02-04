import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import {Toaster} from 'react-hot-toast';
import { useState } from 'react';

const App = () => {
  const [roles,setRole]=useState(null);
  return (
    <>
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/>
      <Header roles={roles} setRole={setRole}/>
      <Main roles={roles} setRole={setRole}/>
    </BrowserRouter>
    </>
  )
}

export default App


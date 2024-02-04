import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import {Toaster} from 'react-hot-toast';
import { useState } from 'react';

const App = () => {
  const [roles,setRole]=useState('customer');
  const [contact,setContact]=useState(false);
  const [aboutPage,setAboutPage]=useState(false)
  return (
    <>
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/>
      <Header roles={roles} setRole={setRole} setContact={setContact} contact={contact} aboutPage={aboutPage} setAboutPage={setAboutPage}/>
      <Main roles={roles} setRole={setRole} contact={contact} setContact={setContact} aboutPage={aboutPage} setAboutPage={setAboutPage}/>
    </BrowserRouter>
    </>
  )
}

export default App


import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/>
      <Header/>
      <Main/>
    </BrowserRouter>
    </>
  )
}

export default App


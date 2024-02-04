import welcomepge from '../images/welcomepge.jpg';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
        <section className='w-full h-[94.5vh]'>
            <img className='w-full h-full z-10 md:block hidden shadow-top-md object-contain' src={welcomepge} alt='sml-scren-bg'/>
            

            <div className='absolute top-1/3 md:top-10 left-10 md:left-10 text-center p-5 hover:-translate-y-1 duration-500 ease-in-out'>
                <h2 className='text-3xl font-mono drop-shadow-xl md:text-8xl'>Cottage works</h2>
                <p className='text-xl font-mono drop-shadow md:text-3xl'>Chase your path..</p>

            </div>
        </section>
    </section>
  )
}

export default WelcomePage

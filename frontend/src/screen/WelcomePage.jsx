import welcomepge from '../images/welcomepge.jpg';
import { Link } from 'react-router-dom';

const WelcomePage = ({setRole}) => {
  const handleHomepreneurButton =() => {
    setRole('homepreneur');
    
  }
  const handleInvesterButton =() => {
    setRole('invester');
  }
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
        <section className='w-full h-[94.5vh]'>
            <img className='w-full h-full z-10 md:block hidden shadow-top-md object-contain' src={welcomepge} alt='sml-scren-bg'/>
            

            <div className='absolute top-1/3 md:top-10 left-10 md:left-10 text-center p-5 hover:-translate-y-1 duration-500 ease-in-out'>
                <h2 className='text-3xl font-mono drop-shadow-xl md:text-8xl'>Cottage works</h2>
                <p className='text-xl font-mono drop-shadow md:text-3xl'>Chase your path..</p>

                <div className='flex gap-5 justify-center items-center mt-3'>
                    <Link to='/login' onClick={handleHomepreneurButton} className='px-2 py-1 border rounded-md cursor-pointer text-lg md:text-xl capitalize shadow-md shadow-yellow-500 bg-[#365b66be] hover:bg-[#365b66d5] active:bg-[#365b66]'>Homepreneur</Link>
                    <Link to='/login' onClick={handleInvesterButton} className='px-2 py-1 border rounded-md cursor-pointer text-lg md:text-xl capitalize shadow-md shadow-yellow-500 bg-[#385a66b4] hover:bg-[#385a66e0] active:bg-[#385a66]'>investor</Link>
                </div>
            </div>
        </section>
    </section>
  )
}

export default WelcomePage

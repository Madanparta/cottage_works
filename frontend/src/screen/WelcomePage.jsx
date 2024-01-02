import bg from '../images/bg.jpg';
import smbg from '../images/login.png'

const WelcomePage = () => {
  return (
    <section className='w-full h-full relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 md:bg-none'>
        <section className='w-full h-[94.5vh]'>
            {/* <img className='w-full h-full z-10 md:block hidden shadow-top-md' src={bg} alt='bg-image'/> */}
            <img className='w-full h-full z-10 md:block hidden shadow-top-md' src={smbg} alt='sml-scren-bg'/>

            <div className='absolute top-1/3 md:top-1/3 left-10 md:left-20 text-center p-5 shadow-2xl rounded-sm bg-transparent hover:-translate-y-1 duration-200 ease-in-out'>
                <h2 className='text-3xl font-mono drop-shadow md:text-5xl'>Cottage works</h2>
                <p className='text-xl font-mono drop-shadow md:text-3xl'>Chase your goals</p>

                <div className='flex gap-5 justify-center items-center mt-3'>
                    <button className='px-2 py-1 border rounded-md cursor-pointer text-lg md:text-xl capitalize drop-shadow bg-green-50 hover:bg-green-200 active:bg-green-300'>Homepreneur</button>
                    <button className='px-2 py-1 border rounded-md cursor-pointer text-lg md:text-xl capitalize drop-shadow bg-red-50 hover:bg-red-200 active:bg-red-300'>investor</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default WelcomePage

import React from 'react'
import Footer from '../Components/Footer'
import Use from '../Components/Use'

const Home = () => {
  return (
    <>
     <Use/>

     <div className=' flex justify-center flex-col gap-20 text-center'>
      <h1 className='pt-[30px] mb-[30px] font-bold '>Welcome to My Todo App</h1>
        <div className='flex justify-center mb-3'>
      <ul className='bg-blue-200 text-black w-2/6'>
        <li className='py-2'>clean the house</li>
        <li className='py-2'>where wego </li>
        <li className='py2'>for`ever we can</li>
        <li className='py-2'>Allways we play that</li>
        <li className='py-2'>Just do it men</li>
      </ul>
      </div>
   
    </div>
     <Footer/>
    </>
   
  )
}

export default Home

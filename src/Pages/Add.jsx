import React from 'react'

const Add = () => {
  return (
   
    <div className='flex justify-center my-[50px] font-bold'>
      <form className='flex flex-col border border-[aqua]  p-5 rounded-md'>
        <input className=' outline-none border border-black rounded-md pl-2  mb-3 text-green-300' type="text" placeholder='enter Name ' />
        <textarea className='outline-none border border-black rounded-md pl-2' name="" id="" placeholder='enter your Message' ></textarea>
      </form>
    </div>
   
  )
}

export default Add

import React from 'react'

const Todo = ({name,action}) => {
  return (
    <div className=' border-s-black'>
    <div className='text-center text-black bg-rose-300 py-2 '>
    <h2>{name}</h2>
    <p>{action}</p>

    </div>
    </div>
  )
}

export default Todo

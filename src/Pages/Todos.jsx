import React from 'react'
import Todo from './Todo'

const Todos = () => {
  return (
    
    <div className='grid grid-cols-3 mt-4 gap-2  flex-col  '>

<Todo name="clean" action="evry day iwill clean the house"/>
<Todo name="wash"action="evry day iwill wash our body" />
<Todo  name="developer" action=" iwill be agood developer tomorrow"/>
<Todo name="driver" action="iwill use my car to morrow"/>
<Todo name="sleep" action="evry day iwill sleep well becouse of better parents"/>



    </div>
    
  )
}

export default Todos

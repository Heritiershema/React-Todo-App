
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-violet-900 text-white py-4 px-3 items-center'>
        <h1 className='text-4xl'>Logo</h1>
      <ul className='flex gap-3 text-2xl font-bold'>
        <li><Link to="/home" target='_blank'>Home</Link></li>
        <li><Link to="/todos" target='_blank'>Todos</Link></li>
        <li><Link to="/add" target='_blank'>Add</Link></li>
      </ul>
     
    </div>
    <Outlet/>
    </>
  
  )
}

export default Navbar

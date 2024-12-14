import { Outlet } from "react-router"


const TodoNav = () => {
  return (
  <>
    <div className="bg-[aqua] text-center p-3">
      <h1 className="text-green-700 text-xl font-bold">Todo<span className="text-gray-900 text-2xl font-extrabold">clean</span></h1>
    </div>
    <Outlet/>
  </>
  
  )
}

export default TodoNav

import { useState } from "react"


const Use = () => {
    const [ like , setLike]=useState(0)
          const [paragraph , setParagraph]=useState(false)
    let par = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas doloribus at dolor non repellat perferendis deserunt sed voluptatibus porro!"
    if(!paragraph){
        par = par.substring(0,30) +"..."
    }
    return (

    <>
    
      <p>like:{like}</p>
      <button className="bg-black text-white p-1 m-2" onClick={()=> setLike(like+1)}>see more </button><br></br>
      <button  className="bg-yellow-200  text-black p-1 m-2" onClick={()=> setParagraph(paragraph => !paragraph)}>see {!paragraph? 'more' : "less"}</button>
      <p>{par}</p>
    </>
  )
}

export default Use

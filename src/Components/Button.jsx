import {  useState } from "react"

export default function Button (){
    
   const [clique,setClickCount] = useState(0)
    const handleClique =()=>{
        
        setClickCount(clique+1)
      
    }
    const resetClique =()=>{
        setClickCount(0)
      
    }
    return(
        <>
        <p> clique {clique} time</p>
        <button
        onClick={handleClique}>
        clique 
        </button>
        <button
        onClick={resetClique}>
        reset 
        </button>
 </>
    )
}
import { useEffect, useState } from "react"
 function Clock(){
    const [date,setDate] = useState(new Date());
    useEffect(()=>{
      const interval = setInterval(() => tick() , 1000)
      return () => {clearInterval(interval)}
    },[])
    const tick =()=>{
        setDate(new Date());
    }
    return(
        <h1>{date.toLocaleTimeString()}</h1>
    )
}
export default Clock;
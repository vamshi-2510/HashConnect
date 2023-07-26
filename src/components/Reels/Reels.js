import React from 'react'
import { useEffect ,useState} from 'react'
const Reels = () => {

var a=5
  useEffect(()=>{
    a+=1 
    console.log(a)
  },[])
  
  return (
    <div>
      {a}
      Reels
    </div>
  )
}

export default Reels
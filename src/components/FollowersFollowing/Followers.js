import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Followers.css'
const Followers = () => {
    const navigate=useNavigate()

    const OthersData = useSelector(state => state.storeOthers.data)

    let [data,setData]=useState(OthersData.followers)
    let a=()=>{
        setData(OthersData.followers)
    }
    let b=()=>{
        setData(OthersData.following)
    }

  return (
    <div>
        <div className="row heading row-cols row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-5">
            <div className="col">
                <button className='b3' onClick={a}>
                    <h5>Followers</h5>
                </button>
            </div>
            <div className="col" >
                <button className='b3' onClick={b}>
                    <h5>Following</h5>
                </button>
            </div>
        </div>
        <div className="actualData">
            {data.length==0?
            <h6 className='mt-3 text-center'>No data Found</h6>
            :
            <ul>
                {
                    data.map((ele,idx)=>
                    <li className="listElement" key={idx}>
                        {ele}
                    </li>
                    )
                }
            </ul>}
        </div>
    </div>
  )
}

export default Followers
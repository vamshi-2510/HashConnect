import React, { useEffect, useState } from 'react'
import './Requests.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import '../Search/Search.css'
import { Outlet } from 'react-router-dom'
import {
  removePendingRequest,
  removePendingRequest1

} from '../../slices/OthersSlice'
const Requests = () => {

  const dispatch = useDispatch()

  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.storeUser)

  const PendingRequests = useSelector(state => state.storeOthers.data.PendingRequests)

  const acceptRequest = (obj) => {
    const f = async () => {
      dispatch(removePendingRequest(obj.sender))
      await axios.post('http://localhost:5000/requests/acceptRequest', obj)
    }
    f()
  }

  const deleteRequest = (obj) => {
    const f = async () => {
      dispatch(removePendingRequest1(obj.sender))
      await axios.post('http://localhost:5000/requests/deleteRequest', obj)
    }
    f()
  }
  return (
    <div>

      {PendingRequests.length > 0 ?
        <div>
          {
            PendingRequests.map((ele, idx) =>
              <div className="req d-flex justify-content-center mt-3">
                <div >
                  {ele}
                </div>
                <div className='ms-5'>
                  <div className="row">
                    <div className="col">
                      <button className="followButton" onClick={() => acceptRequest({ acceptor: userData.username, sender: ele })}>
                        confirm
                      </button>
                    </div>
                    <div className="col">
                      <button className="followButton" onClick={() => deleteRequest({ acceptor: userData.username, sender: ele })}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        :
        <div>
          <h1 className='text-center mt-5 text-light'>No requests found</h1>
        </div>
      }
    </div>
  )
}

export default Requests
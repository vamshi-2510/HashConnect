import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
import { useForm } from 'react-hook-form'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useState } from 'react';
const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [users, setUser] = useState([])

  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.storeUser)

  let following = useSelector(state => state.storeOthers.data.following)


  const sendFollowRequest = (followObj) => {

    const f = async () => {
      let response = await axios.post("http://localhost:5000/requests/sendRequest", followObj)
      setUser([])
    }
    f()
  }

  const [flag,setFlag] = useState(false);
  const onFormSubmit = (searchObj) => {

    const f = async () => {
      let result = await axios.get("http://localhost:5000/user/getUser/" + searchObj.username)
      let response = result.data

      if (response.message == "no users  found") {
        setUser([])
      }
      else {
        
        let x=following.find(ele=>ele==response.payload[0].username)
       
        if(x!=undefined) setFlag(true)
        setUser(response.payload)

      }
    }
    f()
   
    
  }
  return (


    <div className='mainbody2 mt-3'>
      <Form onSubmit={handleSubmit(onFormSubmit)} className="" >
        <div className='row'>
          <div className="col-11">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="label" type="text" placeholder="search" {...register("username", { required: true })} />
            </Form.Group>
          </div>
          <div className="col-1">
            <Button className="button2" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </Form>
      {users.length > 0 ?
        <div>
          {
            users.map((ele, idx) =>
              <div className="req d-flex justify-content-center mt-3">
                <div >
                  {ele.username}
                </div>
                <div className='ms-5'>
                  {flag == true ?
                    <button className="followButton2" >
                     following
                    </button>
                    :
                    <button className="followButton" onClick={() => { sendFollowRequest({ sender: userData.username, receiver: ele.username }) }}>
                      follow {flag}
                    </button>
                  }
                </div>
              </div>
            )
          }
        </div>
        :
        <div>
          No users Found
        </div>
      }
      <Outlet />
    </div >
  )
}

export default Search
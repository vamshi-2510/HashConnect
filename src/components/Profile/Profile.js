import React from 'react'
import ProfilePic from '../../images/profilepic.jpg'
import instagramName from '../../images/instagramName.png'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import defaultProfilePic from '../../images/defaultProfilePic.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getPostsData } from '../../slices/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import logo from '../../images/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Profile = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.storeUser)

  const OthersData = useSelector(state => state.storeOthers.data)

  const postsData = useSelector(state => state.storePosts.postsData.MyPosts)

  const profilePic = useSelector(state => state.storePosts.postsData.profilePic)

  const Bio = useSelector(state => state.storePosts.postsData.Bio)
  const navigate = useNavigate()

  const handelEditProfile = () => {
    navigate('../EditProfile')
  }


  return (
    <div>
      {
        (isFulfilled == true) ?
          <div>
            <div className="mainbody w-75 mx-auto">
              <div className="d-flex justify-content-start mt-3">
                <img src={logo} className="image21" alt="" />
              </div>
              <div className="row mt-1">
                <div className="col-3 ">
                  {profilePic == null ?
                    <img src={defaultProfilePic} className="image2 mt-3" alt="" />
                    :
                    <img src={profilePic} className="image2 mt-3" alt="" />
                  }
                </div>
                <div className="col-9 ">
                  <div className="row">
                    <div className="col-10">{userData.username}</div>

                    <div className="col-2">
                      <>
                        <button onClick={handleShow} className="i4">
                          <FontAwesomeIcon className='ms-4 i4' icon={faGear} />
                        </button>
                       
                      

                        <Offcanvas className='offCanvasBody'show={show} onHide={handleClose} placement={'bottom'}>
                          <Offcanvas.Header closeButton className='d-flex justify-content-end closeButton'>
                          </Offcanvas.Header>
                          <Offcanvas.Body >
                            <ul>
                              <li>
                                <Link className="items">Settings</Link>
                              </li>
                              <li>
                                <Link className="items">Your Activity</Link>
                              </li>
                              <li>
                                <Link className="items">Archive</Link>
                              </li>
                              <li>
                                <Link className="items" to="/">Logout</Link>
                              </li>
                              
                            </ul>
                            
                          </Offcanvas.Body>
                        </Offcanvas>
                      </>

                    </div>
                    <div className="row mt-3">
                      <div className="col-3">{postsData.length+" "}Posts</div>
                      <div className="col-4">
                        <Link to="../FollowersFollowing" className="l4">
                        {OthersData.followers.length + "  "}Followers
                        </Link>
                      </div>
                      <div className="col-5">
                        <Link to="../FollowersFollowing" className="l4">
                        {OthersData.following.length + " "}Following</Link>
                      </div>
                    </div>
                    <div className='mt-3'>
                      {Bio == undefined ?
                        <div>

                        </div>
                        :
                        <div>
                          <h6>{Bio}</h6>
                        </div>
                      }
                    </div>
                    <div>

                      <button className='editbutton mt-3' onClick={handelEditProfile}>edit profile</button>

                    </div>
                  </div>
                </div>
              </div>

              <div className="postsBodyInProfile">
                <div className="row row-cols row-cols-sm-1 row-cols-md-2  row-cols-lg-3">
                  {
                    postsData.map((ele, idx) =>
                      <div className='col p-2' id={idx}>
                        <img className="postInProfile" src={ele.url} alt="" />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            You have not yet logged in
          </div>
      }
    </div>

  )
}

export default Profile

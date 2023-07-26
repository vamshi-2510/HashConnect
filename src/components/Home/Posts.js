import React from 'react'
import './Posts.css'
import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { getPostsData } from '../../slices/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useAsyncError } from 'react-router-dom'
import { useState } from 'react'
const Posts = () => {
    let { userData,
        isPending,
        isFulfilled,
        isRejected,
        isError,
        errMsg, } = useSelector(state => state.storeUser)

    let [posts, setPosts] = useState([])
    useEffect(() => {

        let f = async () => {
            let response = await axios.get('http://localhost:5000/posts/getPostsOfFollowing/' + userData.username)
            let data = response.data
            console.log(data)
            if (data.message == 'posts found') {
                
                setPosts(data.payload)
            }

        }
        f()
    }, [])
    console.log(posts)

    return (
        <div className="PostsBody">
            {
                posts.map((ele, idx) =>

                    <div className="Post">
                        <div className="row top">
                            <div className="col-2">
                                <img src={ele.profilePic} className=" postProfile"alt="" />
                            </div>
                            <div className="col-9">
                                <h6>{ele.username}</h6>
                            </div>
                            <div className="col-1">
                                <FontAwesomeIcon className='ms-4' icon={faEllipsisVertical} />
                            </div>
                            <div className='mt-3'>
                                <img className="image5" src={ele.image} alt="" />
                            </div>
                            <div >
                                <div className="row mt-3">
                                    <div className="col-4 d-flex justify-content-around">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faComment} />
                                        <FontAwesomeIcon icon={faShare} />
                                    </div>
                                    <div className="col-7"></div>
                                    <div className="col-1">
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                    <div className="description">
                                        {ele.captions}
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Posts

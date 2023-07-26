import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import './EditProfile.css'
import { getPostsData } from '../../slices/PostsSlice';

const EditProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm()
    let { userData,
        isPending,
        isFulfilled,
        isRejected,
        isError,
        errMsg, } = useSelector(state => state.storeUser)

    let [img, setImg] = useState(null);
    let [Bio, setBio] = useState(null)

    const onImageSelect = (event) => {

        setImg(event.target.files[0]);

    };
    const onBioChange = (event) => {
        setBio(event.target.value)
    }


    const handelEditProfile = (postObj) => {

        let formData = new FormData();
        //append values to it
        formData.append("username", userData.username);
        formData.append("photo", img);
        formData.append("Bio", Bio)


        const f = async () => {
            let res = await axios.put("http://localhost:5000/posts/updateProfile", formData)
            let x = { ...userData, id: userData.username }
            dispatch(getPostsData(x))
            alert(res.data.message)
            navigate('../Profile')
        }
        f()
    }
    const f = () => {
        navigate('../Profile')
    }

    return (
        <div>
            <div className="editProfileBody">

                <Form onSubmit={handleSubmit(handelEditProfile)} className="fbody2">
                    <div className=" top1 d-flex justify-content-between">
                        <div className="btn" onClick={f}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <h6>
                            Edit Profile
                        </h6>
                        <Button className="btn" style={{ backgroundColor: "white", border: "none", color: "black" }} type="submit">
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Profile Pic</Form.Label>
                        <Form.Control type="file" placeholder="Upload your Post" {...register("photo", { required: true })}
                            onChange={(event) => onImageSelect(event)} />
                        {errors.photo && <p className='text-danger'>*photo required</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control type="text" placeholder="" {...register("Bio", { required: true })} onChange={(event) => onBioChange(event)} />
                        {errors.Bio && <p className='text-danger'>*Bio required</p>}
                    </Form.Group>
                </Form>
            </div>



        </div>
    )
}

export default EditProfile
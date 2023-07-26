import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form'
import './AddPost.css'
import axios from 'axios'
import { useState } from 'react';
import logo from '../../images/logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPostsData } from '../../slices/PostsSlice';
const AddPost = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  let { userData,
    isPending,
    isFulfilled,
    isRejected,
    isError,
    errMsg, } = useSelector(state => state.storeUser)

  let [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onImageSelect = (event) => {

    setImg(event.target.files[0]);

  };

  const handleAddPost = (postObj) => {

    let formData = new FormData();
    //append values to it
    formData.append("username", userData.username);
    formData.append("photo", img);
    console.log(formData)
    const f = async () => {
      let res = await axios.post("http://localhost:5000/posts/addPost", formData)
      let x = { ...userData, id: userData.username }
      dispatch(getPostsData(x))
      alert(res.data.message)
      navigate('../')
    }
    f()
  }

  return (
    <div>
      <Form className='addPostFormBody' onSubmit={handleSubmit(handleAddPost)}>
        <img src={logo}  className="w-75 d-block mx-auto"alt="" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post</Form.Label>
          <Form.Control type="file" placeholder="Upload your Post" {...register("photo", { required: true })}
            onChange={(event) => onImageSelect(event)} />
          {errors.photo && <p className='text-danger'>*photo required</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Add Captions</Form.Label>
          <Form.Control type="text" placeholder="" {...register("captions")} />
        </Form.Group>

        <Button className="button mt-4" type="submit">
          Upload
        </Button>
      </Form>

    </div>
  )
}

export default AddPost
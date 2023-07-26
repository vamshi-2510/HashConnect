import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginForm.css'
import { useForm } from 'react-hook-form'
import instagramName from '../../images/instagramName.png'
import logo from '../../images/logoWhite.png'
import profilepic from '../../images/profilepic.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../slices/UserSlice';
import { getOthersData } from '../../slices/OthersSlice';
import { getPostsData } from '../../slices/PostsSlice';
const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate=useNavigate()

    const dispatch = useDispatch()

    
    
    const onFormSubmit = (userObj) => {
        dispatch(getUserData(userObj))
        dispatch(getOthersData(userObj))
        dispatch(getPostsData(userObj))
        navigate('/Dashboard')
    }
    return (
        <div>
            <div className="mainbody">

                <div className="formbody2">
                    <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <img src={logo} alt="" className="img-fluid image" />
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Usename/ Email / Phone"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="name@example.com" {...register("id", { required: true })} />
                            {errors.id && <p className='text-danger'>*required</p>}
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <p className='text-danger'>*password required</p>}
                        </FloatingLabel>

                        <Button className="button" type="submit">
                            Submit
                        </Button>
                        <div className='textOne'>
                            Don't have an account?
                            <a href="/Register">Sign up</a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
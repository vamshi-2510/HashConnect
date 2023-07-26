import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegistrationForm.css'
import { useForm } from 'react-hook-form'
import instagramName from '../../images/instagramName.png'
import axios from 'axios'
import logo from '../../images/logoWhite.png'
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate=useNavigate();

    const onFormSubmit = (userObj) => {
        
        const f=async()=>{
            let result=await axios.post("http://localhost:5000/user/createUser",userObj)
            let response=result.data.message 
            if(response=="username already exists, choose another one"){
                alert("username already exists, choose other")
            }
            else{
                alert("Registration success..")
                navigate('/')
            }
        }
        f()

    }
    return (
        <div >
            <div className="mainbody">
                
                <div className="formbody1">
                    <Form onSubmit={handleSubmit(onFormSubmit)}>
                    <img src={logo} alt="" className="img-fluid image" />
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Usename"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="name@example.com" {...register("username", { required: true })} />
                            {errors.username && <p className='text-danger'>*username required</p>}
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Full Name"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="Password" {...register("name", { required: true })} />
                            {errors.username && <p className='text-danger'>name required</p>}
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Email"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="email" placeholder="Password" {...register("email", { required: true })} />
                            {errors.username && <p className='text-danger'>*email required</p>}
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Phone Number"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="Password"  {...register("phone")} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.username && <p className='text-danger'>*password required</p>}
                        </FloatingLabel>

                        <Button className="button" type="submit">
                            Submit
                        </Button>
                        <div className='textOne'>
                            Have an account?
                            <a href="/">Log in</a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
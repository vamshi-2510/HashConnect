import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons'
import instagramName2 from '../../images/instagramName2.png'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='main1'>
            <div className="row">
                <div className="col-10 text`">
                    <img src={logo} className="image21" alt="" />
                </div>
                <div className="col-1">
                    <Link to="Requests" >
                        <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
                    </Link>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faMessage} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
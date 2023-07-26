import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faAdd, faVideo, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './Navbar.css'
const BottomNavbar = () => {
    return (
        <div className=''>
            <div className="row main2">
                <div className="col">
                    <Link to="">
                    <FontAwesomeIcon  className="i1" icon={faHome} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="Search">
                    <FontAwesomeIcon className="i1" icon={faSearch} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="AddPost">
                    <FontAwesomeIcon className="i1"  icon={faAdd} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="Reels">
                    <FontAwesomeIcon className="i1" icon={faVideo} />
                    </Link>
                </div>
                <div className="col">
                    <Link to="Profile">
                    <FontAwesomeIcon className="i1" icon={faUser} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default BottomNavbar
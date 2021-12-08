import React from 'react'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import login from '../asset/login.png'



const Navbar = ({ user }) => {


    const logout = () => {

        window.open("http://localhost:5000/auth/logout", "_self");
    };

    return (

        <div id="contain">
            <div id="nav">
                {user ? (<>
                    <span id="logo" />

                    <Link exect to="/" activeClassName="One" className="link1">Menu</Link>
                    <Link to="/Location" activeClassName="One" className="link1">Reviews</Link>
                    <Link to="/Reservation" activeClassName="One" className="link1">Reservation</Link>
                    <Link to="/About" activeClassName="One" className="link1">About</Link>
                    <div className="username"> <Avatar  alt="google" src={user.photos[0].value} />

                        <span className="listItem">{user.displayName}</span>

                        <Link to="/Login" activeClassName="One"
                            className="link1" onClick={logout}>Logout</Link>

                    </div>

                </>) : (
                    <Link className="link" to="Login">
                        <img src={login} alt="google" />
                    </Link>
                )}

            </div>


        </div >
    )
}

export default Navbar

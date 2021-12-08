import React from 'react'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import finalg from '../asset/finalg.png';
import facebook from '../asset/facebook.png';
import github from '../asset/github.gif';
import TextField from '@mui/material/TextField';
import chef from '../asset/chef.png'

const Login = () => {


    const google = () => {

        window.open("http://localhost:5000/auth/google", "_self")

    }
    const gitac = () => {

        window.open("http://localhost:5000/auth/github", "_self")

    }


    return (
        <div className="login">

            <span className="cimg"> <img src={chef} alt="google" className="ci" /></span>

            <h1 className="logintitle">Choose a login Method</h1>

            <div className="wrapper">


                <div className="left">

                    <div className="loginButton">

                        <div>  <IconButton onClick={google}> <img src={finalg} alt="google" className="ganim" /></IconButton> </div>
                        <div  > <IconButton> <img src={facebook} alt="google" className="ganim" /> </IconButton></div>
                        <div > <IconButton onClick={gitac}><img src={github} alt="google" className="ganim" /> </IconButton> </div>

                    </div>
                </div>

                <div className="center">

                    <div className="line" />

                    <div className="or">OR</div>

                </div>

                <div className="right">

                    <TextField label="Username" variant="filled" color="success" focused />
                    <TextField label="Password" variant="filled" color="success" focused />
                    <Button variant="contained" color="success">Login</Button>

                </div>



            </div>


        </div>
    )
}

export default Login



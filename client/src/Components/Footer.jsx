import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
    return (
        <div id="footer">



            <div id="cont">

                <span>Conditions of Use ,@2021 Uncle Sam's Kitchen All Rights Reserved.</span>

                <span id="social">
                    <IconButton > <FacebookIcon /></IconButton>
                    <IconButton > <TwitterIcon /></IconButton>
                    <IconButton > <InstagramIcon /></IconButton>
                    <IconButton > <WhatsAppIcon /></IconButton>
                </span>



            </div>

        </div>
    )
}

export default Footer

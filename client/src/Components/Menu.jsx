import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';




const Menue = ({ name, description, image,price }) => {



    return (
        

            <div id="card">

                <div id="head">
                    <h3 >{name}</h3> <IconButton id="butt"> <MoreVertIcon /> </IconButton>  <br />
                </div>
                <img src={image} alt="google" id="img" /><br />

                <p id="para"> {description}

                </p><br />

                <div id="baton">


                    <IconButton id="butt2"><FavoriteIcon /></IconButton>   <IconButton id="butt2"><ShareIcon /></IconButton> 
                    <span id="price">{price}</span>
                </div>


            </div>
      
    )
}

export default Menue;

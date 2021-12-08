import React from 'react';
import Api from '../Api';
import Menu from './Menu';

const Menuone = () => {
    return (


        <div id="main">
            {
                Api.map((val) => <Menu key={val.id} name={val.name} description={val.description} image={val.image} price={val.price} />)
            }
        </div>


    )
}

export default Menuone;

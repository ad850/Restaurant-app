import React from 'react'

const onsubmit = (event) => {

    event.preventDefault();

    alert("form is submmited");
}

const Reservation = () => {

    return (
        <div id="rs">


            <form onSubmit={onsubmit}>
                <div className="rcenter">
                    <input type="text" placeholder="Enter name" name="fname" className="inp" />
                    <input type="text" placeholder="Enter sname" name="lname"  className="inp"/>
                    <input type="email" placeholder="Enter email" name="email"  className="inp"/>
                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" className="inp"/>
                    <input type="submit" ></input>

                </div>
            </form>

        </div>


    )
}

export default Reservation

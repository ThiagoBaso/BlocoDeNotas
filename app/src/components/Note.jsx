import React from "react";
import './style.scss'

const Note = () => {
    return(
        <div className="noteContainer">
                <div className="headerNote">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="note">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis dignissimos magnam, nisi eius voluptate pariatur voluptas quas! Nostrum placeat quas itaque? Reprehenderit expedita consequuntur aperiam explicabo ea! Consequatur, natus.</p>
                </div>
                <div className="buttonNote">
                    <p>created: 27/07/2007</p>
                </div>
            </div>
    )
}

export default Note;
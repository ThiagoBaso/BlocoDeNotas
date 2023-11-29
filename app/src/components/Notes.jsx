import React from "react"
import Note from "./Note"
import "./style.scss"

const Notes = () => {
    return(
        <div className="NotesContainer">
           <Note/>
           <Note/>
           <Note/>
        </div>
    )
}

export default Notes;
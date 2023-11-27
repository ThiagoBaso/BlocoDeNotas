import React from "react";
import { auth } from "../services/firebaseConfig";
import { signOut } from "firebase/auth";
import "./style.scss"

const Navbar = () => {

    const userSingOut = () => {
        signOut(auth)
    }

    return(
        <div className="navContainer">
            <h1>Bloco De Notas</h1>
            <button onClick={userSingOut} style={{margin:"20px"}}>Sair</button>
        </div>
    )
}

export default Navbar;
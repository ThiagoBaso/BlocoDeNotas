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
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/6466/6466067.png" alt="" />
            <h1>Bloco De Notas</h1>
            <button onClick={userSingOut} style={{margin:"20px"}}>Sair</button>
        </div>
    )
}

export default Navbar;
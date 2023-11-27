import { auth } from "../services/firebaseConfig";
import { signOut } from "firebase/auth";
import {React} from "react";
import "./style.scss";


export function Home() {

    const userSingOut = () => {
        signOut(auth)
    }

    return(
        <div className="LoginContainer">
            <button onClick={userSingOut} style={{margin:"20px"}}>Sair</button>
        </div>
    )
}

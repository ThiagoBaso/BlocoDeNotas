import {React} from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Notes from "../components/Notes";
import "./style.scss";

export function Home() {

    return(
        <div className="HomeContainer">
            <Navbar/>

            <div className="body">
                <Leftbar/>
                <Notes/>
            </div>
        </div>
    )
}

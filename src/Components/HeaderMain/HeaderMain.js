import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css"
import {AiFillPlusCircle} from "react-icons/ai"

export default function HeaderMain(){
    return(
        <header>
            <div className="container">

                <div className="logo">
                    <h1>Anotações</h1>
                </div>

                <div className="btn-new-post">
                    <Link to="/post">
                        <button>Criar Nota <AiFillPlusCircle/></button>
                        
                    </Link>
                </div>
            </div> 
        </header>
    )
}
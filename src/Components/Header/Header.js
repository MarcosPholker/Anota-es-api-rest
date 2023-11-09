import React from "react";
import { Link } from "react-router-dom";
import {IoArrowBackCircleOutline} from "react-icons/io5"
import "./Header.css";

export default function Header(){
    return(
        <header>
            <div className="container">

                <div className="logo">
                    <h1>Cruder</h1>
                </div>

                <div className="btn-new-post">
                    <Link to="/">
                     <IoArrowBackCircleOutline style={{fontSize:'2rem'}}/>
                    </Link>
                </div>
            </div> 
        </header>
    )
}
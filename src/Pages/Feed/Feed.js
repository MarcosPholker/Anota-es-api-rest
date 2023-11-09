import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import {BsThreeDotsVertical} from "react-icons/bs"
import "./feed.css"

import axios from "axios"


export default function Feed() {
    
    const [posts, setPosts] = useState([])

    //apos a renderização do componente
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
            setPosts(response.data)
        })
        .catch(()=> console.log('error'))
    }, [])
    
    return (
        <div>
            <HeaderMain />

            <main>
                <div className="cards">
                    {posts.map((post, key) => {
                        return(
                            <div className="card">
                        
                            <header>
                                <h2>{post.title}</h2>
                                <div>
                                    <BsThreeDotsVertical/>
                                </div>
                            </header>
    
                            <div className="line"></div>
                            <p>
                                {post.description}
                            </p>
                            <div className="btns">
                                <div className="btn-edit">
                                    <Link to="/edit">
                                        <button>Editar</button>
                                    </Link>
                                </div>
                                <div className="btn-readmore">
                                    <Link to="/lermais">
                                        <button>Ler mais</button>
                                    </Link>
                                </div>
                                <div className="btn-delete">
                                    <button>Deletar</button>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                    
                </div>
            </main>
        </div>
    )
}
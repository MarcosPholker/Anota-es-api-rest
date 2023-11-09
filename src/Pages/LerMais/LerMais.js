import React from "react";
import Header from "../../Components/Header/Header.js";
import {BsThreeDotsVertical} from "react-icons/bs";

export default function LerMais(){
    return(
        <div>
            <Header />
            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>Curso consumindo api</h2>
                            <div>
                                <BsThreeDotsVertical/>
                            </div>
                        </header>

                        <div className="line"></div>
                        <p>
                            Nessa vamos estilizar a página principal da aplicação que é o feed, 
                            também vamos estilizar a página lermais, e no vídeo que vem vamos 
                            criar o formulário.
                            Nessa vamos estilizar a página principal da aplicação que é o feed, 
                            também vamos estilizar a página lermais, e no vídeo que vem vamos 
                            criar o formulário.
                            Nessa vamos estilizar a página principal da aplicação que é o feed, 
                            também vamos estilizar a página lermais, e no vídeo que vem vamos 
                            criar o formulário.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header.js";
import axios, * as others from 'axios';

import "./style.css";

import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"  

const validationPost = yup.object({
    title: yup.string().required("O título é obrigatório").max(40, "maximo de 40 caracteres"),
    description: yup.string().required("A Descrição é obritória").max(150, "maximo de 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "maximo de 500 caracteres")
})

export default function Post(){

    let history = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = values => axios.post("https://jsonplaceholder.typicode.com/todos/", values)
    .then(() => {
        console.log('certo')
        console.log(values)
        history("/")
    }).catch(()=>{
        console.log('error')
    })


    return(

        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <hr/>
                    <br/>
                    <div className="cord-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Titulo</label>
                                <input 
                                type="text" 
                                placeholder="titulo"
                                name="title"
                                {...register("title")}
                                />
                                <p className="erro-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Descrição</label>
                                <input 
                                type="text" 
                                placeholder="Descrição"
                                name="description"
                                {...register("description")}
                                />
                                <p className="erro-message">{errors.description?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Conteudo</label>
                                <textarea 
                                type="text" 
                                placeholder="Conteudo de texto"
                                name="content"
                                {...register("content")}
                                />
                                <p className="erro-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </main>
        </div>
        
    )
}
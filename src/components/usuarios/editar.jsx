//Katia Montserrat Paredes Hernández TI03SM-23

'use client'
import Link from "next/link";
import axios from "axios";
export default function EditarUsuario({id}){
    // async function editar() {
    //     //console.log("Estas en borrar"+id);
    //     const url="http://localhost:3000/usuarios/editarUsuario/"+id;
    //     // const respuesta=await axios.delete(url);
    //     window.location.replace("/usuarios/editar/"+id);
    // }    
    return(
        <Link href={`/usuarios/editar/${id}`}>editar</Link>
    );
}
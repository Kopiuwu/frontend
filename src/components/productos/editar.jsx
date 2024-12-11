//Katia Montserrat Paredes Hernández TI03SM-23

'use client'
import Link from "next/link";
import axios from "axios";
export default function EditarProductos({id}){
    // async function editar() {
    //     //console.log("Puedes editar: "+id);
    //     const url="http://localhost:3000/usuarios/editarUsuario/"+id;
    //     // const respuesta=await axios.delete(url);
    //     window.location.replace("/usuarios/editar/"+id);
    // }    
    return(
        <Link href={`/productos/editar/${id}`}>editar</Link>
    );
}
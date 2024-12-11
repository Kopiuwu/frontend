//Katia Montserrat Paredes Hernández TI03SM-23

'use client'
import Link from "next/link";
import axios from "axios";
export default function EditarProducto({id}){
    async function nuevoProducto() {
        //console.log("Puedes borrar:"+id);
        const url="http://localhost:3000/productos/nuevoProducto";
        // const respuesta=await axios.delete(url);
        window.location.replace("/productos/nuevo");
    }
    return(
        <button href="" onClick={nuevoProducto}>Nuevo Producto</button>
    );
}
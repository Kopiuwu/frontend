//Katia Montserrat Paredes Hernández TI03SM-23

'use client'
import Link from "next/link";

export default function EditarVenta({ idVenta, idProd, idUsu }) {
    return (
        <Link href={`/ventas/editar/${idVenta}?id_prod=${idProd}&id_usu=${idUsu}`}><button className="btn btn-outline-success">Editar</button></Link>
    );
}

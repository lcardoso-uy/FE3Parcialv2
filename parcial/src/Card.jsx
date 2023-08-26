import { useState } from "react";

function Card({nombre,raza,valida}){

    let contenido = '';
    switch (valida){
        case 'S':
            contenido = (
                <div>
                    {nombre}
                    {raza}
                </div>
            );
            break;
        case 'N':
            contenido = 
            <p>Por favor chequea que la información sea correcta</p>;
            break;
        default:
            contenido = null;
            break;
    }
    
    return contenido || null;
}

export default Card;
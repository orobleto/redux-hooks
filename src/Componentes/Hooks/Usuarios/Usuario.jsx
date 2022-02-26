import React from "react";
import { useState } from "react";
import avatar from '../../../recursos/Imagenes/avatar.png';


const Usuario = (props) => {
    const { email, username } = props;
    const [elemento, setElemento] = useState(email);
    const [mostrarCorreo,setMostrarCorreo] = useState(true);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{elemento}</p>
                    <button onClick={() => {
                        setMostrarCorreo(!mostrarCorreo);
                        setElemento(mostrarCorreo ? username : email)
                    }} className="btn btn-primary">Cambiar</button>
                </div>
            </div>
        </>
    );
}

export default Usuario;
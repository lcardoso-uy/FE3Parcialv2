import { useState } from "react";

function Form({ onAddMascota }) {
    const [nombre, setNombre] = useState("");
    const [raza, setRaza] = useState("");

    const validarNombre = (nombre) => {
        return (nombre[0] !== ' ' && nombre.length >= 3);
    }

    const validarRaza = (raza) => {
        return (raza.length >= 6);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const esValido = validarNombre(nombre) && validarRaza(raza);
        const estadoValidacion = esValido ? "S" : "N";

        onAddMascota(nombre, raza, estadoValidacion);

        setNombre("");
        setRaza("");
    };

    return (
        <div>
            <h1>Formulario de registro de mascota</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese el nombre " value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Ingrese la raza " value={raza} onChange={(e) => setRaza(e.target.value)} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Form;

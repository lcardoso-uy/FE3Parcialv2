import { useState } from 'react';
import './App.css';
import Form from './Form';
import Card from './Card';

function App() {
  const [mascota, setMascota] = useState({});

  const addMascota = (nombre, raza, valida) => {
    setMascota({ nombre, raza, valida });
  }

  return (
    <div>      
      <Form onAddMascota={addMascota} />
      <Card nombre = {mascota.nombre} raza = {mascota.raza} valida = {mascota.valida} />
    </div>
  );
}

export default App;
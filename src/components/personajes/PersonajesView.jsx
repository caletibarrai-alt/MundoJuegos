import React, { useState, useEffect } from 'react';
import FormPersonaje from './FormPersonaje';
import TablaPersonajes from './TablaPersonajes';

export default function PersonajesView() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('mj_personajes');
    if (data) setPersonajes(JSON.parse(data));
  }, []);

  const handleAdd = (nuevo) => {
    const updated = [...personajes, { ...nuevo, id: Date.now() }];
    setPersonajes(updated);
    localStorage.setItem('mj_personajes', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = personajes.filter((p) => p.id !== id);
    setPersonajes(updated);
    localStorage.setItem('mj_personajes', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>🎭 Personajes Gamers</h2>
      <FormPersonaje onAdd={handleAdd} />
      <TablaPersonajes personajes={personajes} onDelete={handleDelete} />
    </div>
  );
}
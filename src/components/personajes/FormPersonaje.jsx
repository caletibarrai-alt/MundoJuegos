import React, { useState } from 'react';

export default function FormPersonaje({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', juego: '', rol: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre) return;
    onAdd(form);
    setForm({ nombre: '', juego: '', rol: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <input placeholder="Nombre Personaje" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
      <input placeholder="Juego" value={form.juego} onChange={(e) => setForm({ ...form, juego: e.target.value })} required />
      <input placeholder="Rol (Mago, Tanque)" value={form.rol} onChange={(e) => setForm({ ...form, rol: e.target.value })} />
      <button type="submit" className="btn-add">Guardar Personaje</button>
    </form>
  );
}
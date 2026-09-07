import React, { useState } from 'react';

export default function FormCategoria({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', descripcion: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre) return;
    onAdd(form);
    setForm({ nombre: '', descripcion: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <input placeholder="Nombre Categoria" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
      <input placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} required />
      <button type="submit" className="btn-add">Guardar Categoría</button>
    </form>
  );
}
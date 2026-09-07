import React, { useState } from 'react';

export default function FormProducto({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', precio: '', stock: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.precio) return;
    onAdd({ ...form, precio: parseFloat(form.precio) });
    setForm({ nombre: '', precio: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <input placeholder="Nombre Producto" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
      <input type="number" placeholder="Precio ($)" value={form.precio} onChange={(e) => setForm({ ...form, precio: e.target.value })} required />
      <input type="number" placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required />
      <button type="submit" className="btn-add">Guardar Producto</button>
    </form>
  );
}
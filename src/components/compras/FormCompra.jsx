import React, { useState } from 'react';

export default function FormCompra({ onAdd }) {
  const [form, setForm] = useState({ cliente: '', producto: '', total: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.cliente || !form.total) return;
    onAdd(form);
    setForm({ cliente: '', producto: '', total: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <input placeholder="Cliente" value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <input placeholder="Producto" value={form.producto} onChange={(e) => setForm({ ...form, producto: e.target.value })} required />
      <input type="number" placeholder="Monto Total ($)" value={form.total} onChange={(e) => setForm({ ...form, total: e.target.value })} required />
      <button type="submit" className="btn-add">Registrar Compra</button>
    </form>
  );
}
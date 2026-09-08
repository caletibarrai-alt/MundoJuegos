import React, { useState, useEffect } from 'react';
import FormCompra from './FormCompra';
import TablaCompras from './TablaCompras';

export default function ComprasView() {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('mj_compras');
    if (data) setCompras(JSON.parse(data));
  }, []);

  const handleAdd = (nuevo) => {
    const updated = [...compras, { ...nuevo, id: Date.now(), fecha: new Date().toLocaleDateString() }];
    setCompras(updated);
    localStorage.setItem('mj_compras', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = compras.filter((c) => c.id !== id);
    setCompras(updated);
    localStorage.setItem('mj_compras', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>🛒 Compras Gamer</h2>
      <FormCompra onAdd={handleAdd} />
      <TablaCompras compras={compras} onDelete={handleDelete} />
    </div>
  );
}

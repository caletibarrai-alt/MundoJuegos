import React, { useState, useEffect } from 'react';
import FormProducto from './FormProducto';
import TablaProductos from './TablaProductos';

export default function ProductosView() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('mj_productos');
    if (data) setProductos(JSON.parse(data));
  }, []);

  const handleAdd = (nuevo) => {
    const updated = [...productos, { ...nuevo, id: Date.now() }];
    setProductos(updated);
    localStorage.setItem('mj_productos', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = productos.filter((p) => p.id !== id);
    setProductos(updated);
    localStorage.setItem('mj_productos', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>📦 CRUD Productos Gamers</h2>
      <FormProducto onAdd={handleAdd} />
      <TablaProductos productos={productos} onDelete={handleDelete} />
    </div>
  );
}
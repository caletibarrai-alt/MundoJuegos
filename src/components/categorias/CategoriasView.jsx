import React, { useState, useEffect } from 'react';
import FormCategoria from './FormCategoria';
import TablaCategorias from './TablaCategorias';

export default function CategoriasView() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('mj_categorias');
    if (data) setCategorias(JSON.parse(data));
  }, []);

  const handleAdd = (nuevo) => {
    const updated = [...categorias, { ...nuevo, id: Date.now() }];
    setCategorias(updated);
    localStorage.setItem('mj_categorias', JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = categorias.filter((c) => c.id !== id);
    setCategorias(updated);
    localStorage.setItem('mj_categorias', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>🏷️ Categorías</h2>
      <FormCategoria onAdd={handleAdd} />
      <TablaCategorias categorias={categorias} onDelete={handleDelete} />
    </div>
  );
}
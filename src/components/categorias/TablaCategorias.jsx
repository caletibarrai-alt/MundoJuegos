import React from 'react';

export default function TablaCategorias({ categorias, onDelete }) {
  return (
    <table>
      <thead><tr><th>ID</th><th>Nombre</th><th>Descripción</th><th>Acciones</th></tr></thead>
      <tbody>
        {categorias.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td><td>{c.nombre}</td><td>{c.descripcion}</td>
            <td><button className="btn-del" onClick={() => onDelete(c.id)}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
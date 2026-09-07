import React from 'react';

export default function TablaPersonajes({ personajes, onDelete }) {
  return (
    <table>
      <thead><tr><th>ID</th><th>Nombre</th><th>Juego</th><th>Rol</th><th>Acciones</th></tr></thead>
      <tbody>
        {personajes.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td><td>{p.nombre}</td><td>{p.juego}</td><td>{p.rol}</td>
            <td><button className="btn-del" onClick={() => onDelete(p.id)}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
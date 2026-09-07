import React from 'react';

export default function TablaProductos({ productos, onDelete }) {
  return (
    <table>
      <thead><tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr></thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td><td>{p.nombre}</td><td>${p.precio}</td><td>{p.stock}</td>
            <td><button className="btn-del" onClick={() => onDelete(p.id)}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
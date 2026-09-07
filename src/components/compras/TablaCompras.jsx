import React from 'react';

export default function TablaCompras({ compras, onDelete }) {
  return (
    <table>
      <thead><tr><th>ID</th><th>Cliente</th><th>Producto</th><th>Total</th><th>Fecha</th><th>Acciones</th></tr></thead>
      <tbody>
        {compras.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td><td>{c.cliente}</td><td>{c.producto}</td><td>${c.total}</td><td>{c.fecha}</td>
            <td><button className="btn-del" onClick={() => onDelete(c.id)}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
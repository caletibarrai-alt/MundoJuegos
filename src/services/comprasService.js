const KEY = 'mj_compras';

export const getCompras = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCompra = (compra) => {
  const compras = getCompras();
  const nueva = { 
    ...compra, 
    id: Date.now(), 
    fecha: new Date().toLocaleDateString() 
  };
  const updated = [...compras, nueva];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const deleteCompra = (id) => {
  const compras = getCompras();
  const updated = compras.filter((c) => c.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};
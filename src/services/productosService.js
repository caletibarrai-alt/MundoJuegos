const KEY = 'mj_productos';

export const getProductos = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducto = (producto) => {
  const productos = getProductos();
  const newProduct = { ...producto, id: Date.now() };
  productos.push(newProduct);
  localStorage.setItem(KEY, JSON.stringify(productos));
  return productos;
};

export const deleteProducto = (id) => {
  const productos = getProductos().filter((p) => p.id !== id);
  localStorage.setItem(KEY, JSON.stringify(productos));
  return productos;
};
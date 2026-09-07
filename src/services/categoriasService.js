const KEY = 'mj_categorias';

export const getCategorias = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCategoria = (categoria) => {
  const categorias = getCategorias();
  const nueva = { ...categoria, id: Date.now() };
  const updated = [...categorias, nueva];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const deleteCategoria = (id) => {
  const categorias = getCategorias();
  const updated = categorias.filter((c) => c.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};
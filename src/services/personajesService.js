const KEY = 'mj_personajes';

export const getPersonajes = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const savePersonaje = (personaje) => {
  const personajes = getPersonajes();
  const nuevo = { ...personaje, id: Date.now() };
  const updated = [...personajes, nuevo];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const deletePersonaje = (id) => {
  const personajes = getPersonajes();
  const updated = personajes.filter((p) => p.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};
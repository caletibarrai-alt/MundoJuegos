import React, { useState } from 'react';
import ProductosView from './components/productos/ProductosView';
import PersonajesView from './components/personajes/PersonajesView';
import CategoriasView from './components/categorias/CategoriasView';
import ComprasView from './components/compras/ComprasView';
import './styles.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('productos');

  return (
    <div className="app-container">
      <header>
        <h1>🎮 Gestor MundoJuegos</h1>
        <p className="subtitle">Tienda Gamer & Sistema de Administración</p>
        <nav className="navbar">
          <button 
            className={`btn-nav ${activeTab === 'productos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('productos')}
          >
            📦 Productos
          </button>
          <button 
            className={`btn-nav ${activeTab === 'personajes' ? 'active' : ''}`} 
            onClick={() => setActiveTab('personajes')}
          >
            🎭 Personajes
          </button>
          <button 
            className={`btn-nav ${activeTab === 'categorias' ? 'active' : ''}`} 
            onClick={() => setActiveTab('categorias')}
          >
            🏷️ Categorías
          </button>
          <button 
            className={`btn-nav ${activeTab === 'compras' ? 'active' : ''}`} 
            onClick={() => setActiveTab('compras')}
          >
            🛒 Compras
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'productos' && <ProductosView />}
        {activeTab === 'personajes' && <PersonajesView />}
        {activeTab === 'categorias' && <CategoriasView />}
        {activeTab === 'compras' && <ComprasView />}
      </main>
    </div>
  );
}
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ItemDetail from './components/ItemDetail';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
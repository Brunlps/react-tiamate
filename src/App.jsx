import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TiamateMidia from "./components/TiamateMidia";
import Diferenciais from './components/Diferenciais'; 

// Criamos um componente temporário simples para a página interna não dar erro
const PaginaNoticia = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">Página da Notícia</h1>
    <p>O conteúdo da notícia completa aparecerá aqui.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<TiamateMidia />} /> 
        <Route path="/diferenciais" element={<Diferenciais />} /> 
           
        
        <Route path="/noticia/:id" element={<PaginaNoticia />} />
        <Route path="/diferencias" element={<Diferenciais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

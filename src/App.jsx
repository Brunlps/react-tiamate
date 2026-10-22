import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TiamateMidia from "./components/TiamateMidia";

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
        
        <Route path="/noticia/:id" element={<PaginaNoticia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

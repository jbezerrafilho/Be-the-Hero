import React from 'react'

import './global.css'

import Routes from './router'

// JSX - Java Script XML(sintaxe HTML) 
// JSX - Quando o HTML vem dentro de File.js
// Componente React = Funçao que retorna HTML
//Componente sempre com letra maíuscula
// npm instal react-icons
// npm install react-router-dom => instala rotas
// para conectar o frontend ao backend, precisamos instalar 
// um cliente http
//npm install axios

function App() {
  return (
    <Routes />
    );
}

export default App;

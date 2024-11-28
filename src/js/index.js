// Importar React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import Countdown from './component/countdown .jsx';

// Incluir estilos
import '../styles/index.css';

// Renderizar la aplicación
const containerApp = ReactDOM.createRoot(document.getElementById('app'));
containerApp.render(<Countdown />);

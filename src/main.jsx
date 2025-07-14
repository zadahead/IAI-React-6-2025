import { createRoot } from 'react-dom/client'
import { App } from "./App"
import "./assets/fonts/fonts.css";
import "./core.css";
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/counterContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
  </BrowserRouter>
  ,
)

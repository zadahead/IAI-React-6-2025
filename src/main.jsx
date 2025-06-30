import { createRoot } from 'react-dom/client'
import { App } from "./App"
import "./assets/fonts/fonts.css";
import "./core.css";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
)

import { createRoot } from 'react-dom/client'
import { App } from "./App"
import "./assets/fonts/fonts.css";
import "./core.css";
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/counterContext';
import { ColorSwitcherProvider } from './context/colorSwitcherContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CounterProvider>
      <ColorSwitcherProvider>
        <App />
      </ColorSwitcherProvider>
    </CounterProvider>
  </BrowserRouter>
  ,
)

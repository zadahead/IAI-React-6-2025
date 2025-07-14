import { createRoot } from 'react-dom/client'
import { App } from "./App"
import "./assets/fonts/fonts.css";
import "./core.css";
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/counterContext';
import { ColorSwitcherProvider } from './context/colorSwitcherContext';
import { ThemeProvider } from './context/themeContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <CounterProvider>
        <ColorSwitcherProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ColorSwitcherProvider>
      </CounterProvider>
    </ThemeProvider>
  </BrowserRouter>
  ,
)

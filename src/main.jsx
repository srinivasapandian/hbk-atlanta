import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const bootLoader = document.getElementById('boot-loader');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

requestAnimationFrame(() => {
  document.body.classList.add('app-mounted');
  if (bootLoader) {
    bootLoader.addEventListener('transitionend', () => bootLoader.remove(), { once: true });
  }
});

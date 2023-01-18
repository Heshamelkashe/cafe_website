import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/all.min.css';
import './css/main.css';
import App from './component/App';






const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
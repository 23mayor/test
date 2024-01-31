import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './pages/Welcome';
import { BrowserRouter } from 'react-router-dom';
import Table from './pages/Table';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Welcome />
      <Table />
    </BrowserRouter>
  </React.StrictMode>
);

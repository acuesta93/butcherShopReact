import React from 'react';

import { HomePage } from './pages/home';
import { Router } from './pages/root/Router';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <React.Suspense fallback='loading...'>
      <Router />
    </React.Suspense>
  );
}

export default App;

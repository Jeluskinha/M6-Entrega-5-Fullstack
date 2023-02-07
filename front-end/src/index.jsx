import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import ResetCss from './globalStyle/resetCSS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ResetCss />
    <App />
  </AuthProvider>
);



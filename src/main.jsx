import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // استيراد الـ Router
import App from '../Frontend/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* هنا لازم تغلف التطبيق بالكامل */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
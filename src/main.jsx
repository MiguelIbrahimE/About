// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';

// Then import your custom CSS
import './App.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

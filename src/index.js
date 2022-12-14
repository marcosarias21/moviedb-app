import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UrlProvider } from './providers/UrlContext';
import { ImgProvider } from './providers/ImgHeroContext';
import { DataProvider } from './providers/DataGlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <UrlProvider>
        <ImgProvider>
          <App />
        </ImgProvider>
      </UrlProvider>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

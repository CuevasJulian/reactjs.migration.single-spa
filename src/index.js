import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import System from 'systemjs';
import reportWebVitals from './reportWebVitals';
import { LifeCycles, registerApplication, start } from "single-spa";
import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

registerApplication("container-spa", () => import('./root-app.js'),() => true);

start();
registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

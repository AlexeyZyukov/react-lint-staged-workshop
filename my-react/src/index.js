import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'div',
//     'Hi, World'
// )
const element = (
    <h1 className="greeting">
        Привет, мир!
    </h1>
);

ReactDOM.render(element, document.getElementById('root'));

console.log(element);

//==============================================

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

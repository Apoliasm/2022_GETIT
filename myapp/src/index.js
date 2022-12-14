import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Chapter02/Clock';
import CommentList from './Chapter02_1/CommentList';
import NotificationList from './Chapter03/NotificationList';
import Accommodate from './Chapter03_1/Accommodate';
const root = ReactDOM.createRoot(document.getElementById('root'));


/*
root.render(
  <React.StrictMode>
    <Clock/>
    <CommentList/>  
  </React.StrictMode>
);*/

root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
)
/*
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

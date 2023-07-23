import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './JSX/Library';
import Clock from './Elements/Clock';
import CommentList from './Components&Props/CommentList';
import NotificationList from './State/NotificationList';
import Accomodate from './Hooks/Accommodate';
import ConfirmButton from './HandlingEvents/ConfirmButton';
import LandingPage from './ConditionalRendering/LandingPage';
import AttendanceBook from './Lists&Keys/AttendanceBook';
import SignUp from './Forms/SignUp';
import Calculator from './SharedState/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

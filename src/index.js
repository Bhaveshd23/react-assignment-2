import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={employee} />
  </React.StrictMode>
);


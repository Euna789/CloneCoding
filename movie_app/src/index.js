import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// <App />과 같은것을 component라고 부름, 
//react는 component로 이루어져있고 component와 함께 동작함
//component는 html을 반환하는 함수!

//react application은 하나의 component만을 rendering해야함. (=App)
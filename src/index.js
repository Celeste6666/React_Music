import React from 'react';
// npm install react-router-dom@6
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

// 全域將 fas, far 註冊到每個模組中 ==>這樣才可以使用 .fa-solid .fa-regular
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'

import './index.scss';
import App from './App';

library.add(fas, far)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

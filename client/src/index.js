

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductContext } from './Components/Context/ProductContext';
import { WishContext } from './Components/Context/WishContext';
import { CartContext } from './Components/Context/CartContext';
import { FilterProducts } from './Components/Context/FilterProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ProductContext>
  <FilterProducts>
    <WishContext>
      <CartContext>
      <App />
      </CartContext>
    </WishContext>
    </FilterProducts>
  </ProductContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

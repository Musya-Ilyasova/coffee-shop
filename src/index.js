import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router, Link} from "react-router-dom";
import Products from "./products/products";
import Main from './main/main';
import { ReactComponent as Logo } from './logo.svg';

import './index.scss';

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/"><Logo/></Link></li>
      <li><Link to="/products">About</Link></li>
    </ul>
  </div>
)
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

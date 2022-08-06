import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {
  Chip,
  Grid,
  Box
} from '@mui/material';

import './App.css';
import {
  profile,
  career,
  skill,
  product,
  contact
} from './constance/constance'
import Home from './page/Home'
import Product from './page/Product'
import Contact from './page/Contact'



function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <h1 >Welcom to MyPortForlio</h1>
        <p>石川出身東京在住エンジニアの卵のポートフォリオ<br />いっぱい勉強してフロントエンドもバックエンドも頑張ります</p>
        <Box sx={{ flexDirection: 'row' }}>
          <Link to="/home"><Chip label="Home" variant='outlined' clickable={true} /></Link>
          <Link to="/product"><Chip label="Product" variant='outlined' clickable={true} /></Link>
          <Link to="/contact"><Chip label="Contact" variant='outlined' clickable={true} /></Link>
        </Box>

      </Box>


      <Routes>
        <Route path="/home" element={<Home profile={profile} career={career} skill={skill} />} />
        <Route path="/product" element={<Product product={product} />} />
        <Route path="/contact" element={<Contact contact={contact} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

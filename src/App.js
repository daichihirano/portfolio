import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Chip,
  Grid
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
      <div>
        
        <Grid container spacing={0.5} justifyContent="center" alignItems="center">
          <Grid item xs={12} >
            <h1 >Welcom to MyPortForlio</h1>
          </Grid>
          <Grid item xs="auto">
            <Link to="/home"><Chip label="Home" variant='outlined' clickable='true'/></Link>
          </Grid>
          <Grid item xs="auto">
            <Link to="/product"><Chip label="Product" variant='outlined' clickable="true" /></Link>
          </Grid>
          <Grid item xs="auto">
            <Link to="/contact"><Chip label="Contact" variant='outlined' clickable="true" /></Link>
          </Grid>
        </Grid>
      </div>
      
      <Routes>
        <Route path="/home" element={<Home profile={profile} career={career} skill={skill}/>} />
        <Route path="/product" element={<Product product={product} />} />
        <Route path="/contact" element={<Contact contact={contact} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

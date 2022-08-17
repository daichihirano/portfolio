import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {
  Box,
} from '@mui/material';
import {
  styled
} from '@mui/system';

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
import NaviButton from './NaviButton'

const StyledBox =styled(Box)({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignmentItems:'center',
  alignContent:'center',
  background:'#434343',
  height:{md:'70vh', sx:'40vh'},
  marginBottom:0,
  paddingBottom:0
})

function App() {
  return (
    <BrowserRouter>
      <StyledBox >
        <Box marginLeft={'50px'}>
          <h1>
            <font color='#f5f7fa' size={60}>
              Welcom to MyPortfolio<br/>          
            </font>
          </h1>
          <h1>
            <font color='#f5f7fa' size={'60'}>
              Aspiring IT Engineer<br/>
              to be Frontend & Backend Developper...
            </font>
          </h1>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
          <p><font color='#f5f7fa'>石川出身東京在住エンジニアのポートフォリオ<br/>高専出身で大学院まで機械専攻でした<br/>ITの将来性に期待して転身しました<br/>大学で何も学んでいないからこそ毎日伸びしろ感じてます</font></p>
          <NaviButton />
        </Box>
      </StyledBox>

      <Routes>
        <Route path="/home" element={<Home profile={profile} career={career} skill={skill} />} />
        <Route path="/product" element={<Product product={product} />} />
        <Route path="/contact" element={<Contact contact={contact} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

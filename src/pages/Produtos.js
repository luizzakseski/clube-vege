import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box'

import Header from '../components/Header';
import produtos from '../images/produtos.png';


function ProdutosContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Header />
      {/* Hero unit */}
      <Box sx={{ flexGrow: 1, backgroundColor: '#C8E31F' , display: 'flex', justifyContent: 'center', alignItems:'center' }}>
    
    <img src={produtos} align='center' />

      </Box>
      {/* End hero unit */}
      
      {/* Footer */}
      
    </React.Fragment>
  );
}

export default function Produtos() {
  return <ProdutosContent />;
}
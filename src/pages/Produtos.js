import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import Header from '../components/Header';



function ProdutosContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Header />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Produtos Maravilhosos
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Só coisa Boa
        </Typography>
      </Container>
      {/* End hero unit */}
      
      {/* Footer */}
      
    </React.Fragment>
  );
}

export default function Produtos() {
  return <ProdutosContent />;
}
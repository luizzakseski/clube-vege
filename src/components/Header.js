import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Logo from '../images/logo.png';



function HeaderContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Link
              variant="button"
              color="text.primary"
              href="/#"
              sx={{ my: 0.1, mx: 0.2 }}
            >
        <img src={Logo} width="80" height="80" />
        </Link>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Vege Kombucha
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/AVege"
              sx={{ my: 1, mx: 1.5 }}
            >
              Quem Somos
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/Produtos"
              sx={{ my: 1, mx: 1.5 }}
            >
              Produtos
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/Clube"
              sx={{ my: 1, mx: 1.5 }}
            >
              Clube
            </Link>
          </nav>
          <Button href="/Cliente" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Area do Cliente
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Header() {
  return <HeaderContent />;
}
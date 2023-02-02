import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Header from '../components/Header';


const tiers = [
  {
    title: 'Gratis',
    price: '0',
    description: [
      'Receba promoçoes e ofertas',
      'Whatsapp Para Duvidas',
      'Sorteios Especiais'
    ],
    buttonText: 'Cadastre-se de graça',
    buttonVariant: 'outlined',
  },
  {
    title: 'Kombucheiro',
    subheader: 'Mais Popular',
    price: '129',
    description: [
      '12 Kombuchas por mês',
      'Ofertas Exclusivas',
      'Atendimento Prioritario',
    ],
    buttonText: 'Conheça Agora',
    buttonVariant: 'contained',
  },
  {
    title: 'Mestre Kombucheiro',
    price: '199',
    description: [
      '24 Kombuchas por mes',
      'Brindes todos os meses',
      'Desconto progressivo',
    ],
    buttonText: 'Cadastre-se',
    buttonVariant: 'outlined',
  },
];



function PricingContent() {
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
          Clube VEGE
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Está na hora de conhecer o Clube VEGE, um clube de beneficios para kombucheiros!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  //action={tier.title === 'Pro' ?  : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      
    </React.Fragment>
  );
}

export default function Clube() {
  return <PricingContent />;
}
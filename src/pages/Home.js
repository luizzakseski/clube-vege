import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import main from '../images/main.png';
import main2 from '../images/main2.png';
import main3 from '../images/main3.png';



function HomeContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Header />
      {/* Hero unit */}
      <Box sx={{ flexGrow: 1, backgroundColor: '#C8E31F' , display: 'flex', justifyContent: 'center', alignItems:'center' }}>
    
          
  
        </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: '#C8E31F' , display: 'flex', justifyContent: 'center', alignItems:'center' }}>
    
            <img src={main2} align='center' />
  
        </Box>
        <Box sx={{ flexGrow: 1, backgroundColor: '#C8E31F' , display: 'flex', justifyContent: 'center', alignItems:'center' }}>
       

            <img src={main3} align='center' />

        </Box>
      {/* End hero unit */}
      
      {/* Footer */}
      
    </React.Fragment>
  );
}

export default function Home() {
  return <HomeContent />;
}
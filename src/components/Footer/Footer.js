import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; {new Date().getFullYear()} Anna Riazantseva 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
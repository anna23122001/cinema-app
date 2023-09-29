import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <MovieIcon sx={{ fontSize: 32, marginRight: 10 }} />
          <Typography variant="h6" color="inherit">
            The best cinema app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
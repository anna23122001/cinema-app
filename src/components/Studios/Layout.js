import React from 'react'
import { Grid, Box, ListItem, List } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  return (
     <Box>
      <Grid container spacing={3}>
        <Grid item x1={12} lg={12} md={12} sm={12} xs={12}>
          <Header/>
        </Grid>
        <Grid item x1={3} lg={3} md={3} sm={12} xs={12}>
          <List>
            <ListItem>
              <NavLink to="/movies">
                Movies
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/actors">
                Actors
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/directors">
                Directors
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/studios">
                Studios
              </NavLink>
            </ListItem>
          </List>
        </Grid>
        <Grid item x1={9} lg={9} md={9} sm={12} xs={12}>
          <main>
              <Outlet/>
          </main>

        </Grid>
        <Grid item x1={12} lg={12} md={12} sm={12} xs={12}>
          <footer>
            <Footer />
          </footer>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Layout
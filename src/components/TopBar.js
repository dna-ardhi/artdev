import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import routes from '../data/routes';

import Link from './Link';

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'>
            <IconButton
              sx={{ color: 'white' }}
              aria-label='home'
              size='large'
              component={Link}
              href='/'>
              <CodeOffIcon fontSize='large' />
            </IconButton>

            <Box>
              <Tooltip title='Open settings'>
                <IconButton
                  sx={{ color: 'black' }}
                  onClick={handleOpenNavMenu}
                  aria-label='Menu'
                  size='large'>
                  <MenuIcon fontSize='large' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}>
                {routes.map((route, idx) => (
                  <MenuItem key={idx} onClick={handleCloseNavMenu}>
                    <Typography
                      component={Link}
                      href={route.href}
                      sx={{ my: 2, color: 'black', display: 'block' }}>
                      {route.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;

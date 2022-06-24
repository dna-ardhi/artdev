import { Box } from '@mui/material';
import React from 'react';
import TopBar from '../components/TopBar';
import Copyright from '../Copyright';

const Index = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      pb={4}
      minHeight='100vh'
      position='relative'>
      <TopBar />
      {children}
      <Copyright />
    </Box>
  );
};

export default Index;

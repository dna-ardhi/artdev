import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/components/Link';

export default function Index() {
  return (
    <>
      <Container maxWidth='xl' sx={{ height: '88vh' }}>
        <Box
          sx={{ height: '100%' }}
          display='flex'
          flexDirection='column'
          justifyContent='center'>
          <Typography variant='h1' component='h1' gutterBottom>
            Hello, There!
          </Typography>
          <Link href='/about' color='secondary'>
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </>
  );
}

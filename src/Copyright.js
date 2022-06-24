import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      position='absolute'
      bottom='0'
      p={1}
      width='100%'
      variant='body2'
      color='text.secondary'
      align='center'>
      {'Copyright © '}
      <MuiLink color='inherit' href='https://mui.com/'>
        artdev
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

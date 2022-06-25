import * as React from 'react';
import { Box, Button, Container, Fab, Typography } from '@mui/material';
import profile from '../src/data/profile';
import Image from 'next/image';

export default function Index() {
  return (
    <Box position='relative'>
      <Box sx={{ bgcolor: 'primary.main', width: '45%', height: '100vh' }}>
        <Box
          position='absolute'
          sx={{
            top: '50%',
            right: '50%',
            transform: 'translate(30%, -50%)',
            width: '28rem',
            maxHeight: '1000px',
          }}>
          <Image
            src='/images/profile-pict.jpg'
            layout='responsive'
            width='4'
            height='7'
            objectFit='cover'
            priority
            alt=''
          />
          <Box
            width={150}
            height={10}
            bgcolor='primary.main'
            position='absolute'
            right={-75}
            bottom='15%'
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          zIndex: '10',
          top: '0',
        }}>
        <Container maxWidth='xl' sx={{ height: '100vh' }}>
          <Box sx={{ height: '100%' }} display='flex' alignItems='center'>
            <Box
              sx={{ height: '100%', width: '50%' }}
              display='flex'
              flexDirection='column'
              justifyContent='flex-end'>
              {profile.contact && Array.isArray(profile.contact) ? (
                profile.contact.map((contact, idx) => (
                  <Box mb={3} key={`profile-contact-${idx}`}>
                    <Typography variant='h5' component='h5' color='white'>
                      {contact.name} :
                    </Typography>
                    <Typography
                      sx={{ fontSize: 20 }}
                      variant='subtitle1'
                      component='p'
                      color='white'>
                      {contact.value}
                    </Typography>
                  </Box>
                ))
              ) : typeof profile.contact === 'object' ? (
                <Box mb={3}>
                  <Typography variant='h5' component='h5' color='white'>
                    {profile.contact.name} :
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20 }}
                    variant='subtitle1'
                    component='p'
                    color='white'>
                    {profile.contact.value}
                  </Typography>
                </Box>
              ) : null}

              {profile.socialMedia && (
                <Box mb={3}>
                  <Typography variant='h5' component='h5' color='white' mb={1}>
                    Find Me On
                  </Typography>
                  <Box display='flex'>
                    {Array.isArray(profile.socialMedia) ? (
                      profile.socialMedia.map((account, idx) => (
                        <Typography
                          key={`social_media_icon_${idx}`}
                          sx={{ fontSize: 24 }}
                          component={account.href ? 'a' : 'p'}
                          href={account.href ? account.href : null}
                          target='_blank'
                          color='white'
                          mr={2}>
                          <account.icon fontSize='large' />
                        </Typography>
                      ))
                    ) : (
                      <Typography
                        sx={{ fontSize: 24 }}
                        variant='overline'
                        component={profile.socialMedia.href ? 'a' : 'p'}
                        href={
                          profile.socialMedia.href
                            ? profile.socialMedia.href
                            : null
                        }
                        target='_blank'
                        color='white'
                        mr={2}>
                        <account.icon fontSize='large' />
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              width='50%'
              display='flex'
              alignItems='flex-end'
              flexDirection='column'>
              <Box width='70%'>
                <Typography
                  variant='h1'
                  component='h1'
                  color='black'
                  sx={{ fontWeight: '700', lineHeight: 0.85 }}>
                  DADI NUR
                </Typography>
                <Typography
                  variant='h1'
                  component='h1'
                  color='primary.main'
                  sx={{ fontWeight: '700', lineHeight: 0.85, mb: 5 }}>
                  ARDHI
                </Typography>
                <Typography variant='h6' component='p'>
                  {profile.summary}
                </Typography>
                <Box mt={7}>
                  <Fab variant='extended' color='primary' sx={{ mr: 4 }}>
                    Portfolio
                  </Fab>
                  <Button variant='outlined' size='large' color='primary'>
                    Resume
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

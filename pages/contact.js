import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Fab,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import profile from '../src/data/profile';

export default function Contact() {
  return (
    <Box position='relative'>
      <Box sx={{ bgcolor: 'primary.main', width: '45%', height: '100vh' }}>
        <Box
          position='absolute'
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            top: '50%',
            right: '50%',
            transform: 'translate(30%, -50%)',
            width: '28rem',
            height: '40rem',
            maxHeight: '1000px',
            bgcolor: 'grey.300',
            zIndex: 100,
            p: 5,
          }}>
          <Typography variant='h5' component='h5' mb={5} fontWeight={700}>
            SEND ME A MESSAGE
          </Typography>
          <TextField
            label='Full Name'
            variant='standard'
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label='Email Address'
            variant='standard'
            fullWidth
            sx={{ mb: 3, flexGrow: 1 }}
          />
          <TextField
            multiline
            fullWidth
            maxRows={10}
            variant='standard'
            label='Message'
            sx={{ mb: 5 }}
          />
          <Fab
            type='submit'
            variant='extended'
            color='primary'
            sx={{ width: '100%' }}>
            SEND MESSAGE
          </Fab>
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
                          variant='overline'
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
                <Typography variant='h2' component='h2' mb={5} fontWeight={700}>
                  CONTACT ME
                </Typography>
                <Grid container spacing={3}>
                  {profile.contact && Array.isArray(profile.contact) ? (
                    profile.contact.map((contact, idx) => (
                      <Grid item lg={11} key={idx}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              variant='h4'
                              component='h5'
                              fontWeight={500}
                              mb={2}>
                              {contact.name}
                            </Typography>
                            <Typography
                              variant='subtitle1'
                              component='p'
                              mb={1}>
                              {contact.value}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : typeof profile.contact === 'object' ? (
                    <Grid item lg={11} key={idx}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='h5'
                            fontWeight={500}
                            mb={2}>
                            {profile.contact.name}
                          </Typography>
                          <Typography variant='subtitle1' component='p' mb={1}>
                            {profile.contact.value}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ) : null}
                  {profile.socialMedia && (
                    <Grid container item spacing={1} xs={12} lg={11} my={5}>
                      {Array.isArray(profile.socialMedia) ? (
                        profile.socialMedia.map((account, idx) => (
                          <Grid item key={idx}>
                            <IconButton
                              component={account.href ? 'a' : 'p'}
                              href={account.href ? account.href : null}
                              target='_blank'>
                              <account.icon />
                            </IconButton>
                          </Grid>
                        ))
                      ) : typeof profile.socialMedia === 'object' ? (
                        <Grid item>
                          <IconButton
                            component={profile.socialMedia.href ? 'a' : 'p'}
                            href={
                              profile.socialMedia.href
                                ? profile.socialMedia.href
                                : null
                            }
                            target='_blank'>
                            <profile.socialMedia.icon />
                          </IconButton>
                        </Grid>
                      ) : null}
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

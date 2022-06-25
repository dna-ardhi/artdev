import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import profile from '../src/data/profile';

export default function About() {
  return (
    <>
      <Grid container position='relative' display='flex'>
        <Grid item xs={3} sx={{ bgcolor: 'primary.main', height: '100vh' }} />
        <Grid item xs={9} />
      </Grid>
      <Box
        position='absolute'
        width='100%'
        height='100%'
        top='50%'
        right='50%'
        sx={{ transform: 'translate(50%, -50%)' }}>
        <Container maxWidth='xl' sx={{ height: '100%' }}>
          <Grid container width='100%' height='100%'>
            <Grid item xs={3}>
              <Box
                sx={{ height: '100%', width: '100%' }}
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
                    <Typography
                      variant='h5'
                      component='h5'
                      color='white'
                      mb={1}>
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
                          <profile.socialMedia.icon fontSize='large' />
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box my={5} px={3}>
                <Typography variant='h4' component='h2' fontWeight={600} mb={4}>
                  EDUCATIONS
                </Typography>

                <Grid container spacing={2} mb={7}>
                  {profile.educations && Array.isArray(profile.educations) ? (
                    profile.educations.map((education, idx) => (
                      <Grid item key={`education_item_${idx}`} xs={6}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              variant='h4'
                              component='h5'
                              fontWeight={500}
                              mb={2}>
                              {education.degree}
                            </Typography>
                            <Typography
                              variant='subtitle1'
                              component='p'
                              mb={1}>
                              {education.school}
                            </Typography>
                            <Typography variant='overline' component='p'>
                              {education.graduate}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : typeof profile.educations === 'object' ? (
                    <Grid item xs={6}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='h5'
                            fontWeight={500}
                            mb={2}>
                            {profile.educations.degree}
                          </Typography>
                          <Typography variant='subtitle1' component='p' mb={1}>
                            {profile.educations.school}
                          </Typography>
                          <Typography variant='overline' component='p'>
                            {profile.educations.graduate}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ) : null}
                </Grid>

                <Typography variant='h4' component='h2' fontWeight={600} mb={4}>
                  EXPERIENCES
                </Typography>

                <Grid container spacing={2} mb={7}>
                  {profile.experiences && Array.isArray(profile.experiences) ? (
                    profile.experiences.map((experience, idx) => (
                      <Grid item key={`education_item_${idx}`} xs={6}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              variant='h4'
                              component='h5'
                              fontWeight={500}
                              mb={2}>
                              {experience.title}
                            </Typography>
                            <Typography variant='subtitle1' component='p'>
                              {experience.company}
                            </Typography>
                            <Typography
                              variant='subtitle2'
                              component='p'
                              mb={1}>
                              {experience.location}
                            </Typography>
                            <Typography variant='overline' component='p'>
                              {experience.years}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : typeof profile.experiences === 'object' ? (
                    <Grid item xs={6}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='h5'
                            fontWeight={500}
                            mb={2}>
                            {profile.experiences.title}
                          </Typography>
                          <Typography variant='subtitle1' component='p'>
                            {profile.experiences.company}
                          </Typography>
                          <Typography variant='subtitle2' component='p' mb={1}>
                            {experience.location}
                          </Typography>
                          <Typography variant='overline' component='p'>
                            {profile.experiences.years}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ) : null}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

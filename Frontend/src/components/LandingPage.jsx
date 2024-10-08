import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Button, Box, Card, CardContent, CardMedia } from '@mui/material';

function LandingPage() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 6 }}>
      <Box mb={6}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2C3E50',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          Welcome to Parkezy
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}
        >
          Your smart solution for hassle-free parking bookings.
        </Typography>
      </Box>

      <Box my={6}>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#34495E',
            textTransform: 'uppercase',
          }}
        >
          Why Choose Parkezy?
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
               <img src='/convenient.png' width={'250'} height={'250'} alt='Convenient' />

              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', color: '#3498DB' }}
                >
                  Convenient
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find and book parking spots easily with just a few clicks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
              <img src='/secure.png' width={'250'} height={'250'} alt='Secure' />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', color: '#3498DB' }}
                >
                  Secure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your booking is guaranteed, and parking locations are safe and secure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
               <img src='/affordable.png' width={'250'} height={'250'} alt='Affordable' />

              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', color: '#3498DB' }}
                >
                  Affordable
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get the best rates for parking spots in prime locations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mt={6}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#34495E', textTransform: 'uppercase' }}
        >
          Ready to Park?
        </Typography>
        <Box>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mx: 2,
              px: 4,
              py: 1,
              backgroundColor: '#3498DB',
              '&:hover': { backgroundColor: '#2980B9' },
            }}
          >
            Sign Up Now
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              mx: 2,
              px: 4,
              py: 1,
              borderColor: '#3498DB',
              color: '#3498DB',
              '&:hover': { borderColor: '#2980B9', color: '#2980B9' },
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
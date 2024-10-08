import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

function AboutUs() {
    return (
        <Box sx={{ padding: 5, bgcolor: '#f0f4f8' }}>
            <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
                <Typography 
                    variant="h3" 
                    sx={{ 
                        fontWeight: 'bold', 
                        marginBottom: 2, 
                        color: '#2C3E50' 
                    }}
                >
                    Welcome to Parkezy
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        maxWidth: '700px', 
                        margin: '0 auto', 
                        lineHeight: 1.8, 
                        color: '#7f8c8d',
                        fontSize: '1.1rem' 
                    }}
                >
                    Parkezy is committed to making parking reservations simple and efficient. Whether you're on the go for a busy workday or heading out for an event, we guarantee a seamless parking experience at your fingertips.
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card 
                        sx={{ 
                            height: '100%', 
                            boxShadow: 4, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { 
                                transform: 'scale(1.05)', 
                            },
                            borderRadius: 2,
                        }}
                    >
                        <CardContent>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    marginBottom: 2, 
                                    color: '#2980B9' 
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                                We aim to revolutionize parking by offering fast and reliable booking systems that help drivers find parking with ease. Parkezy is your trusted solution for stress-free parking.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card 
                        sx={{ 
                            height: '100%', 
                            boxShadow: 4, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { 
                                transform: 'scale(1.05)', 
                            },
                            borderRadius: 2,
                        }}
                    >
                        <CardContent>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    marginBottom: 2, 
                                    color: '#2980B9' 
                                }}
                            >
                                Our Vision
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                                We envision a future where parking is always available at your fingertips. Our goal is to create an ecosystem where drivers never worry about finding parking in crowded cities or events.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card 
                        sx={{ 
                            height: '100%', 
                            boxShadow: 4, 
                            transition: 'transform 0.3s ease', 
                            '&:hover': { 
                                transform: 'scale(1.05)', 
                            },
                            borderRadius: 2,
                        }}
                    >
                        <CardContent>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    marginBottom: 2, 
                                    color: '#2980B9' 
                                }}
                            >
                                Meet the Team
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                                Parkezy was founded by a passionate team of developers, designers, and parking experts who share a common vision of making parking easier for everyone, anywhere, anytime.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: 6 }}>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        maxWidth: '700px', 
                        margin: '0 auto', 
                        lineHeight: 1.8, 
                        color: '#7f8c8d', 
                        fontSize: '1.1rem' 
                    }}
                >
                    At Parkezy, our goal is to provide a seamless and reliable parking experience for drivers everywhere. From bustling cities to crowded events, we've got your parking needs covered.
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutUs;

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent } from '@mui/material';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box sx={{ padding: 5, bgcolor: '#f0f4f8'}}>
            <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
                <Typography 
                    variant="h3" 
                    sx={{ 
                        fontWeight: 'bold', 
                        marginBottom: 2, 
                        color: '#2C3E50' 
                    }}
                >
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
                    We would love to hear from you! Whether you have a question, suggestion, or need help with your booking, feel free to reach out.
                </Typography>
            </Box>

            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card sx={{ boxShadow: 4, borderRadius: 2 }}>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        textAlign: 'center', 
                                        marginBottom: 2, 
                                        color: '#2980B9',
                                        fontWeight: 'bold' 
                                    }}
                                >
                                    Get in Touch
                                </Typography>

                                <TextField 
                                    fullWidth 
                                    label="Name" 
                                    variant="outlined" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    sx={{ marginBottom: 2 }}
                                    required
                                />

                                <TextField 
                                    fullWidth 
                                    label="Email" 
                                    variant="outlined" 
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={{ marginBottom: 2 }}
                                    required
                                />

                                <TextField 
                                    fullWidth 
                                    label="Message" 
                                    variant="outlined" 
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    sx={{ marginBottom: 2 }}
                                    required
                                />

                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth 
                                    sx={{ 
                                        backgroundColor: '#3498DB', 
                                        '&:hover': { backgroundColor: '#2980B9' }, 
                                        fontWeight: 'bold',
                                        marginTop: 2 
                                    }}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUs;
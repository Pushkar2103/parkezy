import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between', padding: '0 20px' }}>
                <div style={{
                    display:'flex'
                }}>
                <img src="/car.svg" alt="Parkezy Logo" style={{ marginRight: '8px', height: '30px' }} />
                <Typography 
                    variant="h5" 
                    onClick={() => navigate('/')} 
                    sx={{ cursor: 'pointer', fontWeight: 'bold', color: '#2C3E50' }}
                >
                    Parkezy
                </Typography>
                </div>

                <Box>
                    <Button 
                        color="inherit" 
                        sx={{ marginRight: 2, fontWeight: 'bold', color: '#2C3E50' }} 
                        onClick={() => navigate('/about')}
                    >
                        About Us
                    </Button>
                    <Button 
                        color="inherit" 
                        sx={{ marginRight: 2, fontWeight: 'bold', color: '#2C3E50' }} 
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => navigate('/login')}
                        sx={{ backgroundColor: '#3498DB', '&:hover': { backgroundColor: '#2980B9' } }}
                    >
                        Log In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

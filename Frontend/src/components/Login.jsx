import React from 'react';
import { Button, Typography, Card, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '80vh',
            }}
        >
            <Card 
                sx={{
                    width: 400,
                    padding: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3, 
                }}
            >
                <Typography 
                    variant="h5" 
                    align="center" 
                    sx={{ marginBottom: 2, fontWeight: 'bold' }}
                >
                    Login To Parkezy
                </Typography>

                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    fullWidth 
                    sx={{ marginBottom: 2 }} 
                />

                <TextField 
                    id="password" 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    sx={{ marginBottom: 2 }} 
                />

                <Typography 
                    sx={{
                        alignSelf: 'flex-start',
                        marginBottom: 3,
                        color: 'text.secondary'
                    }}
                >
                    Don't have an account? 
                    <span 
                        onClick={() => navigate('/signup')}
                        style={{
                            color: '#1976d2', 
                            marginLeft: 5,
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        }}
                    >
                        Sign Up!
                    </span>
                </Typography>

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={() => { 
                        
                    }}
                >
                    Login
                </Button>
            </Card>
        </Box>
    );
}

export default Login;

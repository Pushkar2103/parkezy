import React from 'react';
import { Button, Typography, Card, TextField, Box } from '@mui/material';

function Signup() {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '70vh',
                padding: 2,
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
                    Create an Account
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
                    sx={{ marginBottom: 4 }} 
                />

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={() => { 
        
                    }}
                >
                    Sign Up
                </Button>
            </Card>
        </Box>
    );
}

export default Signup;

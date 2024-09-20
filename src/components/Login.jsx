import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigator = useNavigate();

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'
    }}>
        <Card style={{
            marginTop:90,
            width:400,
            height:250,
            padding:20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Typography textAlign={'center'} variant={'h6'} style={{
                marginBottom:10
            }}>Login To Parkezy</Typography>

            <TextField id="username" label="Username" variant="outlined" fullWidth style={{
                marginBottom: 10
            }} />

            <TextField id="password" label="Password" type='password' variant="outlined" fullWidth />

            <Typography style={{
                alignSelf:'start',
                margin:5,
            }}>
                Don't have an account?
                <span onClick={()=> {
                    navigator('/signup')
                }}
                style={{
                    color: 'blue',
                    marginLeft:5,
                    cursor: 'pointer',
                }}>
                    SignUp!
                </span>
            </Typography>

            <Button variant={'contained'} style={{
                marginBottom:10,
                marginTop:10
            }}>Login</Button>
        </Card>
    </div>
}

export default Login;
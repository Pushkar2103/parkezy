import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

function Signup() {

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
            }}>Create an Account</Typography>

            <TextField id="username" label="Username" variant="outlined" fullWidth style={{
                marginBottom: 10
            }} />

            <TextField id="password" label="Password" type='password' variant="outlined" fullWidth />


            <Button variant={'contained'} style={{
                marginBottom:10,
                marginTop:10
            }}>SignUp</Button>
        </Card>
    </div>
}

export default Signup;
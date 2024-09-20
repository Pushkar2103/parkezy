import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigator = useNavigate();
    return (
        <div style={{
            padding:7,
            display:'flex',
            justifyContent:'space-between'
        }}>
            <div onClick={()=> {
                navigator('/');
            }} style={{cursor:'pointer'}}>
                <Typography variant={'h6'}>Parkezy</Typography>
            </div>

            <div>
                <Button style={{
                    marginRight:7
                }}>About us</Button>

                <Button style={{
                    marginRight:7
                }}>contact us</Button>

                <Button variant='contained' onClick={()=> {
                    navigator('/login')
                }}>Log In</Button>
            </div>
        </div>
    );
}

export default Navbar;
import loginBanner from '../assets/auth/login-banner.png';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Box, Grid, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Grid container spacing={2} sx={{ padding: '0 20px' }}>
      <Grid item xs={7}>
        <Box>
          <img
            src={loginBanner}
            alt='login'
            style={{ display: 'block', aspectRatio: '1/1', height: '95vh' }}
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h4'>
            Welcome
            <WavingHandIcon />
          </Typography>
          <Typography variant='body2'>Please Login Here!</Typography>
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

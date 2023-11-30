import { Box, Typography } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4">
        Welcome
        <WavingHandIcon />
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        Please Login Here!
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;

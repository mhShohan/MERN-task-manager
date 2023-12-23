// mui
import { Box, Typography } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

// project import
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '700' }}>
        Welcome
        <WavingHandIcon />
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem', fontWeight: '500' }}>
        Please Login Here!
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;

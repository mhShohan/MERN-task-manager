import { Box, Typography } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Typography variant="h4">
          Welcome
          <WavingHandIcon />
        </Typography>
        <Typography variant="body2">Please Login Here!</Typography>
        <LoginForm />
      </Box>
    </AuthLayout>
  );
};

export default Login;

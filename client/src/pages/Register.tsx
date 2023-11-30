import { Box, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
        Register A New Account!
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default Register;

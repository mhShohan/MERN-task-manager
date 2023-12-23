// mui
import { Box, Typography } from '@mui/material';

// project import
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
        Register A New Account!
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default Register;

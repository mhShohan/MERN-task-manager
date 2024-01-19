// mui
import { Box, Typography, useTheme } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

// project import
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const theme = useTheme();
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          padding: '2rem 4rem',
          borderRadius: '.8rem',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: '700', textAlign: 'center' }}>
          Welcome
          <WavingHandIcon />
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
          Register A New Account!
        </Typography>
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Register;

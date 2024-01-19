// mui
import { Box, Typography, useTheme } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

// project import
import LoginForm from '../components/LoginForm';

const Login = () => {
  const theme = useTheme();
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
      <Box
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          padding: '2rem 4rem',
          borderRadius: '.8rem',
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
    </Box>
  );
};

export default Login;

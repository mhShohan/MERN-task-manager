import { Outlet } from 'react-router-dom';

// mui
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AuthLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.light, height: '100vh' }}>
      <Container>
        <Grid container sx={{ height: '100vh' }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: '900' }}>
                  Welcome to{' '}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: '700' }}>
                  Task Management System
                </Typography>
                <Typography variant="h5">Create a your team and manage your tasks...!!!</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthLayout;

import { Box, Grid, Typography } from '@mui/material';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid item xs={7}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3">Welcome to </Typography>
            <Typography variant="h2">Task Manager App</Typography>
            <Typography variant="h5">Create a your team and manage your tasks</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

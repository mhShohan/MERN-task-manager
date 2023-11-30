import { useState } from 'react';
import { Link } from 'react-router-dom';

// mui
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography
} from '@mui/material';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form style={{ maxWidth: '100%' }}>
      <TextField fullWidth variant="filled" color="primary" size="small" label="Email Address" />

      <FormControl variant="filled" size="small" fullWidth>
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '10px', width: '100%', padding: '8px', borderRadius: '6px' }}
      >
        Login
      </Button>
      <Box style={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant="body1">
          Don't Have An Account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Register Here!
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;

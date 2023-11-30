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

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConformShowPassword] = useState(false);

  return (
    <form style={{ maxWidth: '100%' }}>
      <TextField fullWidth variant="filled" color="primary" size="small" label="First Name" />
      <TextField fullWidth variant="filled" color="primary" size="small" label="Last Name" />
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
      <FormControl variant="filled" size="small" fullWidth>
        <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showConfirmPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onMouseDown={() => setConformShowPassword(true)}
                onMouseUp={() => setConformShowPassword(false)}
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
        sx={{ width: '100%', padding: '8px', borderRadius: '10px', marginTop: '6px' }}
      >
        Login
      </Button>
      <Box style={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant="body1">
          Already Have An Account?{' '}
          <Link to="/" style={{ textDecoration: 'none' }}>
            Login Here!
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;

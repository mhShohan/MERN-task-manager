import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form style={{ maxWidth: '400px', maxHeight: '360px' }}>
      <TextField fullWidth variant='filled' color='primary' size='small' label='Email Address' />

      <FormControl variant='filled' size='small' fullWidth>
        <InputLabel htmlFor='filled-adornment-password'>Password</InputLabel>
        <FilledInput
          id='filled-adornment-password'
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <FormControlLabel control={<Checkbox defaultChecked />} label='Remember Me' />
        <Typography variant='body1' color='primary'>
          Forgot Password?
        </Typography>
      </Box>
      <Button
        variant='contained'
        color='primary'
        sx={{ width: '100%', padding: '8px', borderRadius: '6px' }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

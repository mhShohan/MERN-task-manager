import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  Typography,
} from '@mui/material';
import { useLoginMutation } from '../store/features/authApi';
import Loader from './Loader';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginAccount, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data: any) => {
    try {
      await loginAccount(data);
      navigate(0);
    } catch (error) {
      toast.error('Error');
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form style={{ maxWidth: '100%' }} onSubmit={handleSubmit(login)}>
      <TextField
        fullWidth
        variant="filled"
        color={errors['email'] ? 'error' : 'primary'}
        size="small"
        label="Email Address"
        {...register('email', { required: true })}
      />

      <FormControl variant="filled" size="small" fullWidth color={errors['password'] ? 'error' : 'primary'}>
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
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
        type="submit"
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

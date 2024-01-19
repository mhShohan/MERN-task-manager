import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  Typography,
} from '@mui/material';
import { useLoginMutation } from '../store/features/authApi';
import { useAppDispatch } from '../store/hooks';
import { loginUser } from '../store/services/authSlice';
import decodeToken from '../utils/decodeToken';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'mr@abc.com',
      password: 'pass123',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();
      const decode = decodeToken(res.data.token);

      dispatch(
        loginUser({
          user: decode,
          token: res.data.token,
        }),
      );

      toast.success('Login successfully!');
    } catch (error) {
      toast.error('Login Failed');
    }
  };

  return (
    <form style={{ maxWidth: '100%' }} onSubmit={handleSubmit(onSubmit)}>
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

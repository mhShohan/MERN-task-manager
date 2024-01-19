import { useState } from 'react';
import { toast } from 'react-toastify';
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
import { useRegisterMutation } from '../store/features/authApi';
import { useAppDispatch } from '../store/hooks';
import { loginUser } from '../store/services/authSlice';
import decodeToken from '../utils/decodeToken';

//project import

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConformShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [userRegistration] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerAccount = async (data: any) => {
    try {
      const { firstName, lastName, email, password, confirmPassword } = data;
      if (password !== confirmPassword) {
        toast.error('Confirm password must be same to the password!');
        return;
      }

      const res = await userRegistration({ firstName, lastName, email, password }).unwrap();
      const decode = decodeToken(res.data.token);

      dispatch(
        loginUser({
          user: decode,
          token: res.data.token,
        }),
      );

      toast.success('Registered successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.data.errors[Object.keys(error.data.errors)[0]].message);
    }
  };

  return (
    <form style={{ maxWidth: '100%' }} onSubmit={handleSubmit(registerAccount)}>
      <TextField
        fullWidth
        variant="filled"
        size="small"
        color={errors['firstName'] ? 'error' : 'primary'}
        label="First Name"
        {...register('firstName', { required: true })}
      />
      <TextField
        fullWidth
        variant="filled"
        color={errors['lastName'] ? 'error' : 'primary'}
        size="small"
        label="Last Name"
        {...register('lastName', { required: true })}
      />
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
      <FormControl variant="filled" size="small" fullWidth color={errors['confirmPassword'] ? 'error' : 'primary'}>
        <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          {...register('confirmPassword', { required: true })}
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
        type="submit"
        sx={{ width: '100%', padding: '8px', borderRadius: '10px', marginTop: '6px' }}
      >
        Register
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

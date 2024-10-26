import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import React from 'react';
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface MyForm {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MyForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetForm = () => {
    reset({
      email: '',
      password: '',
    });
  };

  const submit: SubmitHandler<MyForm> = async (data) => {
    console.log(data);
    resetForm();
    // try {

    // } catch (error) {
    // }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <Typography variant="h2">{'Авторизация'}</Typography>
          <Typography variant="h3">{'Вход'}</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(submit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '485px',
              m: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '30px',
              }}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                  {...field}
                  label="Введите e-mail"
                  placeholder='Логин'
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? 'Введите корректный email-адрес' : ''}
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Введите пароль"
                    placeholder="Пароль"
                    variant="outlined"
                    error={!!errors.password}
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
            </Box>
            <Button
              sx={{ m: 1, p: 1, width: '100%', boxSizing: 'border-box' }}
              color="primary"
              variant="contained"
              type="submit"
            >
              {('Войти')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
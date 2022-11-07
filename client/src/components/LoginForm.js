import * as React from 'react';
import { Box, Card, CardContent, Button, InputAdornment, IconButton, Typography, FormControl, InputLabel, Input } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import TextField from '@mui/material/TextField';

import SignUpModal from './SignUpModal';

export default function LoginForm() {

    const [values, setValues] = React.useState({
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });


    };

    return (

        <Box
            align="center"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    variant="standard"
                    helperText="Username"
                    name="name"

                />
                <br />
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

            </div>
            <Button>Login</Button>
            <Typography>First time user? 
                <SignUpModal> Sign up here!</SignUpModal>
            </Typography> 
        </Box>




    );
}
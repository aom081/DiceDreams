import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Link, Radio, RadioGroup, FormControlLabel, FormLabel, ButtonGroup } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        telephone: '',
        email: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        usernameOrEmail: '',
        loginPassword: ''
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (queryParams.get('register') === 'true') {
            setIsRegister(true);
        }
    }, [location]);

    const handleLogin = () => {
        // Logic to handle login
        console.log('Login button clicked');
    };

    const handleRegister = () => {
        // Logic to handle register
        console.log('Register button clicked');
    };

    const handleCancel = () => {
        // Logic to handle cancel and navigate to home page
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSwitchToRegister = () => {
        setIsRegister(true);
    };

    const handleSwitchToLogin = () => {
        setIsRegister(false);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            p={10}
            style={{ backgroundImage: 'url(/path/to/your/background/image.png)', backgroundSize: 'cover' }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                bgcolor="rgba(0, 0, 0, 0.8)"
                p={5}
                borderRadius={2}
                width="600px"
                maxWidth="100%"
            >
                <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <Button color="inherit" onClick={handleSwitchToLogin}>
                            <Typography color="white">Log In</Typography>
                        </Button>
                        <Button color="inherit" onClick={handleSwitchToRegister}>
                            <Typography color="white">Register</Typography>
                        </Button>
                    </ButtonGroup>
                </Box>
                {isRegister ? (
                    <Box width="100%">
                        <TextField
                            label="Name-LastName"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="Username"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="Telephone Number"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="E-mail"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="Date of Birth"
                            type="date"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' }, shrink: true }}
                        />
                        <FormLabel component="legend" style={{ color: 'white', marginTop: '1rem' }}>Gender</FormLabel>
                        <RadioGroup row name="gender" value={formData.gender} onChange={handleInputChange}>
                            <FormControlLabel value="female" control={<Radio style={{ color: 'white' }} />} label={<Typography style={{ color: 'white' }}>Female</Typography>} />
                            <FormControlLabel value="male" control={<Radio style={{ color: 'white' }} />} label={<Typography style={{ color: 'white' }}>Male</Typography>} />
                            <FormControlLabel value="not-specified" control={<Radio style={{ color: 'white' }} />} label={<Typography style={{ color: 'white' }}>Not Specified</Typography>} />
                        </RadioGroup>
                        <Box display="flex" justifyContent="space-between" width="100%" mt={2}>
                            <Button variant="contained" color="primary" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="secondary" onClick={handleRegister}>
                                Register
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <Box width="100%">
                        <TextField
                            label="Username or e-mail"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="usernameOrEmail"
                            value={formData.usernameOrEmail}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                            fullWidth
                            margin="normal"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                        <Link href="#" color="inherit" underline="hover" alignSelf="flex-start" mb={2}>
                            <Typography color="white">Forgot your password?</Typography>
                        </Link>
                        <Box display="flex" justifyContent="space-between" width="100%">
                            <Button variant="contained" color="primary" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="secondary" onClick={handleLogin}>
                                Log In
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default LoginPage;

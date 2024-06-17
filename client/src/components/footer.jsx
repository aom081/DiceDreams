import React from 'react';
import { AppBar, Toolbar, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                    &copy; 2024 Your Company
                </Typography>
                <Link href="#" color="inherit" sx={{ mr: 2 }}>
                    Privacy Policy
                </Link>
                <Link href="#" color="inherit" sx={{ mr: 2 }}>
                    Terms of Service
                </Link>
                <IconButton href="#" color="inherit" aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton href="#" color="inherit" aria-label="linkedin">
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;

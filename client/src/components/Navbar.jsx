import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Input, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import FilterComponent from './FilterComponent'; // Ensure the path is correct

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleNavigateToLogin}>
                    <ListItemText primary="Show participation history" />
                </ListItem>
                <ListItem button onClick={handleNavigateToLogin}>
                    <ListItemText primary="Notifications" />
                </ListItem>
                <ListItem button component={Link} to="/rules">
                    <ListItemText primary="Website Rules" />
                </ListItem>
                <ListItem>
                    <FilterComponent />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
                <Link to="/">
                    <img src='logoDice.png' alt="DiceDreams Logo" style={{ marginRight: '18px', height: '64px' }} />
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }}>
                        <Typography variant="h6" component="span" sx={{ color: 'crimson', fontWeight: 'bold' }}>
                            Dice
                        </Typography>
                        <Typography variant="h6" component="span" sx={{ color: 'black', fontWeight: 'bold' }}>
                            Dreams
                        </Typography>
                    </Typography>
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        sx={{ marginLeft: 2 }}
                    />
                </Box>
                <Button color="inherit" onClick={handleNavigateToLogin}>Register</Button>
                <Button variant="contained" color="primary" onClick={handleNavigateToLogin}>Log in</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;


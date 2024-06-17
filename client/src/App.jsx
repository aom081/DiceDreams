import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Container } from '@mui/material';
import HomePage from './HomePage';
import Rules from './Rules';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh', // Ensure it covers the full viewport height
          backgroundImage: 'BGmain.jpg', // Replace with your image URL
          backgroundSize: 'cover', // Ensure the background image covers the entire area
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
        }}
      >
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Game Events
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Home', 'Events', 'Contact', 'About', 'Rules'].map((text) => (
                <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'transparent', p: 3 }} // Set bgcolor to transparent
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;


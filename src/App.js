import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Routes, Route, Outlet } from "react-router-dom";
import News from './components/News';
import About  from './components/About'
import Contact from './components/Contact'
import Home from './components/Home';
import NavItem from './components/NavItems';

const navItems = ['', 'About', 'Contact'];

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index  element={<Home />} />
      <Route  path="/news" element={<News />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} /> 
    </Route>
  </Routes>
  </div>
  );
}

function Layout(props) {
 
 return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavItem navItems={navItems}></NavItem>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Toolbar />
        <Typography>
        <Outlet/>
        </Typography>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;

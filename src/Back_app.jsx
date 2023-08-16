import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import News from './components/News';
import About  from './components/About'
import Contact from './components/Contact'
import Home from './components/Home';

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

function Layout() {
  return (
    <> 
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/news">News</Link>
    <Link to="/about">About</Link>
    
    {/* <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <React.Fragment>
        <Button variant="contained" {...bindTrigger(popupState)}>
          Home
        </Button>
        <Menu {...bindMenu(popupState)}>
          <MenuItem><Link to="/contact">Contact</Link></MenuItem>
          <MenuItem><Link to="/news">News</Link></MenuItem>
          <MenuItem><Link to="/about">About</Link></MenuItem>
        </Menu>
      </React.Fragment>
    )}
  </PopupState> */}
  <Outlet/>
  </>
  );
}

export default App;


import Button from '@mui/material/Button';
import {  Link } from "react-router-dom";

const NavItem =(props) => {

    return (<> {props.navItems.map((item) => (
        <Button key={item}>
         <Link to={item}>{item}</Link>
        </Button>
      ))}</>)
};

export default NavItem;
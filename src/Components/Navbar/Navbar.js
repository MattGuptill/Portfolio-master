import {Link, NavLink} from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

export default function Navbar () {
    const [openMenu, setOpenMenu] = useState(false);

    function handleChange() {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>
            <Link to={'/'}><h1>Matthew Guptill</h1></Link>
            <div onClick={handleChange}><FaBars size={25}/></div>
            <ul className={openMenu ? 'open' : ''}>
                <li><NavLink  to={'/about'}>About</NavLink></li>
                <li><NavLink  to={'/portfolio'}>Portfolio</NavLink></li>
                <li><NavLink  to={'/resume'}>Resume</NavLink></li>
                <li><NavLink  to={'/Contact'}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
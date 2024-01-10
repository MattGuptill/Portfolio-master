import {Link} from 'react-router-dom';
import './header.css';

export const Header = () => {
    
    return (
        <header>
            <div className='header-con'>
                <Link className='logo' to={'/'}><h1>Matthew Guptill</h1></Link>
                <nav className='open-menu'>
                    <Link className='nav-link' to={'/about'}>About</Link>
                    <Link className='nav-link' to={'/portfolio'}>Portfolio</Link>
                    <Link className='nav-link' to={'/resume'}>Resume</Link>
                    <Link className='nav-link' to={'/Contact'}>Contact</Link>
                </nav>
            </div>
        </header>
    )
}
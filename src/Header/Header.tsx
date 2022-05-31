import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../App'
import styles from './Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [navClass, setNavClass] = useState(`${styles.navClosed}`);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        setNavClass( !toggleMenu ? `${styles.navOpen}` : `${styles.navClosed}`);
    }

    return <>
    <header>
        <div className={styles.logo}><h3>Logo</h3></div>
        <nav className={navClass}>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={`/${paths.home}`} onClick={ toggleNav }>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={`/${paths.about}`} onClick={ toggleNav }>About</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={`/${paths.contact}`} onClick={ toggleNav }>Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={`/${paths.login}`} onClick={ toggleNav }>Login</NavLink>
                </li>
            </ul> 
        </nav>
        <button className={styles.menu} onClick={toggleNav}>{ !toggleMenu ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/> }</button>
    </header>
    </>
        
}
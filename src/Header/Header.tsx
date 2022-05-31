import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className={styles.logo}>Logo</div>
        <button className={styles.menu} onClick={toggleNav}>{ !toggleMenu ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/> }</button>
        <nav className={navClass}>
            <ul>
                <li>
                    <Link className='AppLink' to={`/${paths.home}`}><h6>Home</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.about}`}><h6>About us</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.contact}`}><h6>Contact</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.login}`}><h6>Login</h6></Link>
                </li>
            </ul> 
        </nav>
    </header>
    </>
        
}